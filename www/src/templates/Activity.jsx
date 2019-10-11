// vendors
import React from "react"
import css from "@emotion/css"

// components
import Layout from "../components/Layout"
import wrapper from "../utils/wrapper"
import { graphql } from "gatsby"
import SEO from "../components/Seo/Seo"
import EventCard from "../components/EventCard/EventCard"

const ActivityTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title="Activités" />

      <EventCard
        event={data.event}
        css={css`
          ${wrapper.bolt()}
        `}
      />
    </Layout>
  )
}

export default ActivityTemplate

export const query = graphql`
  query ActivityTemplateQuery($slug: String!) {
    event: sanityEvent(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      _rawDescription
      featuredImage {
        alt
        asset {
          fluid {
            src
            srcSet
            srcSetWebp
          }
        }
      }
      date {
        ... on SanityDaily {
          _type
          from
          to
          fromTime {
            hour
            minute
          }
          toTime {
            hour
            minute
          }
        }
        ... on SanitySingleEvent {
          _type
          from
          fromTime {
            hour
            minute
          }
          to
          toTime {
            hour
            minute
          }
        }
        ... on SanityWeekly {
          _type
          from
          day
          fromTime {
            hour
            minute
          }
          to
          toTime {
            hour
            minute
          }
        }
      }
      venue {
        city
        local
        name
        street
        zip
      }
    }
  }
`
