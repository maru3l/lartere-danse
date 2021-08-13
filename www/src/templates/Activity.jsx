// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { css } from "@emotion/react"

// components
import Layout from "../components/Layout"
import wrapper from "../utils/wrapper"
import { graphql } from "gatsby"
import SEO from "../components/Seo/Seo"
import EventCard from "../components/EventCard/EventCard"

const ActivityTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.event.seo.title}
        description={data.event.seo.description}
      />

      <EventCard
        event={data.event}
        css={css`
          ${wrapper.bolt()}
          margin-top: 5rem;
          margin-bottom: 5rem;
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
      seo {
        title: seo_title
        description: meta_description
      }
      _rawDescription
      featuredImage {
        alt
        asset {
          gatsbyImageData(width: 480)
        }
        hotspot {
          x
          y
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
