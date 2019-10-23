// vendors
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo/Seo"
import { graphql, Link } from "gatsby"
import VisuallyHidden from "@reach/visually-hidden"
import { css } from "@emotion/core"

import datesStillAvailable from "../utils/datesStillAvailable"
import wrapper from "../utils/wrapper"
import { colors } from "../styles/variables"

const ArchiveCard = ({ title, picture, slug, ...props }) => (
  <div
    css={css`
      width: 100%;
      display: block;
      position: relative;
    `}
    {...props}
  >
    <Link
      to={`/archives/${slug}`}
      css={css`
        text-decoration: none;
        color: inherit;

        :hover {
          color: ${colors.PortlandOrange};
        }
      `}
    >
      <picture
        css={css`
          width: 100%;
          display: block;
          overflow: hidden;
          line-height: 0;
          position: relative;
          background-color: ${colors.Isabelline};

          ::before {
            display: block;
            padding-bottom: ${(86 / 140) * 100}%;
            content: "";
          }

          > * {
            filter: grayscale();
            position: absolute;
            mix-blend-mode: multiply;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}
      >
        <source sizes="" srcset={picture.srcSetWebp} type="image/webp" />
        <img srcset={picture.srcSet} src={picture.src} alt={picture.alt} />
      </picture>
      <div
        css={css`
          font-size: 100%;
          margin: 1rem 0;
        `}
      >
        {title}
      </div>
    </Link>
  </div>
)

const ArchivesPage = ({ data }) => {
  const events = (data.events.edges || [])
    .filter(({ node: { date } }) => !datesStillAvailable(date))
    .map(({ node }) => node)

  return (
    <Layout themeColor="LIGHT">
      <SEO
        title="Archives"
        description="Pour parcourir les archives des activités et des artistes ayant été de passage à L’Artère, art de la danse et du mouvement."
      />
      <div
        css={css`
          ${wrapper.bolt()};
          margin-top: 5rem;
          margin-bottom: 5rem;
        `}
      >
        <VisuallyHidden>
          <h1>Archives</h1>
        </VisuallyHidden>

        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 1rem;
          `}
        >
          <div />

          {events.map(node => (
            <ArchiveCard
              title={node.title}
              slug={node.slug.current}
              picture={
                node.featuredImage
                  ? {
                      ...node.featuredImage.asset.fluid,
                      alt: node.featuredImage.alt,
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ArchivesPage

export const query = graphql`
  query ArchivesPageQuery {
    events: allSanityEvent(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          slug {
            current
          }
          title
          featuredImage {
            asset {
              fluid {
                src
                srcSet
                srcSetWebp
              }
            }
            alt
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
`
