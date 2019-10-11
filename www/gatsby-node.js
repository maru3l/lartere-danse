/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
