// vendors
import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { colors } from "../styles/variables"
import wrapper from "../utils/wrapper"
import PortableText from "../components/PortableText/PortableText"

const RessourcesPage = ({ data }) => {
  const ressources = data.ressources.group || []

  const getRessourcesByType = type =>
    ressources
      .find(({ fieldValue }) => fieldValue === type)
      .edges.map(({ node }) => node)

  const localCompagniesAndCollectifs = getRessourcesByType(
    "localCompagniesAndCollectifs"
  )

  const organisation = getRessourcesByType("organisation")

  const other = getRessourcesByType("other")

  return (
    <Layout orange>
      <article
        css={css`
          ${wrapper.bolt()}
        `}
      >
        <VisuallyHidden>
          <h1>Ressoruces</h1>
        </VisuallyHidden>

        {localCompagniesAndCollectifs.length > 0 && (
          <section id="compagnies-collectifs">
            <h2 className="p">
              Compagnies et collectifs de la Ville de Québec
            </h2>

            <ul
              className="h2"
              css={css`
                list-style: none;
                padding: 0;

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
              {localCompagniesAndCollectifs.map(({ name, url }) => (
                <li>
                  {url && <a href={url}>{name}</a>}
                  {!url && <p>{name}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 560px));
            grid-gap: 2em;
          `}
        >
          {organisation.length > 0 && (
            <section id="organismes-specialises">
              <h2 className="h3 color-black">Organismes spécialisés</h2>

              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                `}
              >
                {organisation.map(({ name, url, _rawDescription = null }) => (
                  <li>
                    <p>{name}</p>

                    {_rawDescription && (
                      <div>
                        <PortableText blocks={_rawDescription} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {other.length > 0 && (
            <section id="ressources">
              <h2 className="h3 color-black">Ressources</h2>

              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                `}
              >
                {other.map(({ name, url, _rawDescription = null }) => (
                  <li>
                    <p>{name}</p>

                    {_rawDescription && (
                      <div>
                        <PortableText blocks={_rawDescription} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </Layout>
  )
}

export default RessourcesPage

export const query = graphql`
  query RessourcesPageQuery {
    ressources: allSanityRessource {
      group(field: type) {
        fieldValue
        edges {
          node {
            name
            url
            _rawDescription
          }
        }
      }
    }
  }
`
