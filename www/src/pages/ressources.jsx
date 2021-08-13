// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { css } from "@emotion/react"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { colors } from "../styles/variables"
import wrapper from "../utils/wrapper"
import PortableText from "../components/PortableText/PortableText"
import mediaQuery from "../utils/media-query"
import { between } from "polished"
import Seo from "../components/Seo"

const RessourcesPage = ({ data }) => {
  const ressources = data.ressources.group || []

  const ressourceTypes = (data.allSanityRessourceType.edges || []).map(
    ({ node }) => node
  )

  const featuredRessourceTypes = [ressourceTypes.shift()]

  const getRessourcesById = (id) => {
    const ressourcesGroup = ressources.find(
      ({ fieldValue }) => fieldValue === id
    )

    if (!ressourcesGroup) return []

    return ressourcesGroup.edges.map(({ node }) => node)
  }

  return (
    <Layout themeColor="ORANGE">
      <Seo
        title="Ressources"
        description="Plusieurs ressources sont mises à votre disposition afin de répondre à vos besoins en matière d’art de la danse et du mouvement. L’Artère les rassemble ici."
      />
      <article
        css={css`
          ${wrapper.bolt()}
        `}
      >
        <VisuallyHidden>
          <h1>Ressoruces</h1>
        </VisuallyHidden>

        {featuredRessourceTypes.map(
          ({ _id, name, slug: { current: slug } }) => (
            <section id={slug}>
              <h2
                className="h3"
                css={css`
                  max-width: 630px;
                `}
              >
                {name}
              </h2>

              <ul
                className="h1"
                css={css`
                  list-style: none;
                  padding: 0;
                  margin: 0;

                  li {
                    margin-bottom: ${between(
                      "12.5px",
                      "0px",
                      "375px",
                      "1920px"
                    )};

                    :last-child {
                      margin-bottom: 0;
                    }

                    ${mediaQuery.greaterThen(1920)} {
                      margin-bottom: 0px;
                    }
                  }

                  a {
                    text-decoration: none;

                    :hover {
                      color: ${colors.text};
                    }
                  }

                  p {
                    margin: 0;
                  }

                  p,
                  a {
                    color: ${colors.pink};
                  }
                `}
              >
                {getRessourcesById(_id).map(({ name, url }) => (
                  <li>
                    {url && <a href={url}>{name}</a>}
                    {!url && <p>{name}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )
        )}

        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 560px));
            grid-gap: 2em;

            section {
              > h2 {
                margin-bottom: 1rem;
              }

              > ul {
                margin: 0;
                list-style: none;
                padding: 0;

                a {
                  text-decoration: none;
                }

                > li p {
                  margin: 0;

                  :first-child {
                    margin-top: 1rem;
                  }

                  :last-child {
                    margin-bottom: 1rem;
                  }
                }
              }
            }
          `}
        >
          {ressourceTypes.map(({ _id, name, slug: { current: slug } }) => (
            <section id={slug}>
              <h2 className="h3 color-black">{name}</h2>

              <ul>
                {getRessourcesById(_id).map(
                  ({ name, url, _rawDescription = null }) => (
                    <li>
                      <p>{url ? <a href={url}>{name}</a> : name}</p>

                      {_rawDescription && (
                        <div>
                          <PortableText blocks={_rawDescription} />
                        </div>
                      )}
                    </li>
                  )
                )}
              </ul>
            </section>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default RessourcesPage

export const query = graphql`
  query RessourcesPageQuery {
    ressources: allSanityRessource(sort: { fields: sort, order: ASC }) {
      group(field: ressourceType____id) {
        fieldValue
        edges {
          node {
            url
            sort
            name
            _rawDescription
          }
        }
      }
    }
    allSanityRessourceType(sort: { fields: sortOrder, order: ASC }) {
      edges {
        node {
          name
          _id
          slug {
            current
          }
        }
      }
    }
  }
`
