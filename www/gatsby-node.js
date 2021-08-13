/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// import { GraphQLInt, GraphQLString } from "gatsby/graphql"

// const grahqlType = require("gatsby/graphql")

// const { createRemoteFileNode } = require("gatsby-source-filesystem")

const eventStillAvailable = require("./src/utils/datesStillAvailable")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityEvent(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
            date {
              ... on SanityDaily {
                to
              }
              ... on SanitySingleEvent {
                to
              }
              ... on SanityWeekly {
                to
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const events = result.data.allSanityEvent.edges || []
  events.forEach((edge, index) => {
    const path = `/archives/${edge.node.slug.current}`

    if (!eventStillAvailable(edge.node.date)) {
      createPage({
        path,
        component: require.resolve("./src/templates/Activity.jsx"),
        context: { slug: edge.node.slug.current },
      })
    }
  })
}

// exports.setFieldsOnGraphQLNodeType = ({ type }) => {
//   if (type.name === `SanityImageAsset`) {
//     return {
//       localFile: {
//         type: `File`,
//         args: {
//           width: {
//             type: grahqlType.GraphQLInt,
//           },
//           // format: {
//           //   type: ImageFormatType,
//           // },
//           height: {
//             type: grahqlType.GraphQLInt,
//           },
//           fit: {
//             type: grahqlType.GraphQLString,
//             defaultValue: "crop",
//           },
//         },
//       },
//     }
//   }

//   // by default return empty object
//   return {}
// }

// exports.createResolvers = ({
//   actions: { createNode },
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
// }) => {
//   const resolvers = {
//     SanityImageAsset: {
//       localFile: {
//         resolve: (source, { width, height, fit }) => {
//           const url = `${source.url}?fit=${fit}${width ? `&w=${width}` : ""}${
//             height ? `&h=${height}` : ""
//           }`
//           return createRemoteFileNode({
//             url,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//           })
//         },
//       },
//     },
//   }
//   createResolvers(resolvers)
// }
