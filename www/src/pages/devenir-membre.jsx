// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { css } from "@emotion/react"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout"
import TextColumns from "../components/TextColumns/TextColumns"
import wrapper from "../utils/wrapper"
import PortableText from "../components/PortableText/PortableText"
import SEO from "../components/Seo/Seo"

const DevenirMembrePage = ({ data }) => {
  const honoraryMembers = (data.honoraryMembers.edges || []).map(
    ({ node }) => node
  )

  const siteConfiguration = data.siteConfiguration

  const benefitsByType = data.benefits.group

  const { benefitTypes } = data

  const getBenefitByTypeId = (id) => {
    const benefits = benefitsByType.find(({ fieldValue }) => fieldValue === id)

    if (!benefits) return []

    return benefits.edges.map(({ node }) => node)
  }

  return (
    <Layout>
      <SEO
        title="Devenir membre"
        description="Devenez membre de L’Artère pour bénéficier de tarifs préférentiels sur nos activités tout en contribuant au foisonnement de la communauté de la danse et du mouvement à Québec!"
      />
      <article
        css={css`
          ${wrapper.bolt()}
        `}
      >
        <section id="intro">
          <VisuallyHidden>
            <h1>Devenir Membre</h1>
          </VisuallyHidden>

          <p className="h2">
            Devenir membre de L’Artère, c’est démontrer votre appart&shy;enance
            à la communauté de la danse et du mouvement de Québec. Grâce à votre
            soutien, vous assurez la pérennité de l’organisme et contribuez à
            son épanouis&shy;sement.
          </p>

          <p className="h3 color-orange">
            De plus, en tant que membre, <br />
            de nombreux avantages vous sont offerts.
          </p>
        </section>

        <section id="inscrire">
          <h2
            css={css`
              margin-top: 0;
            `}
          >
            S'inscrire
          </h2>

          <ol
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              grid-gap: 2.5em;
              list-style: none;
              padding: 0;

              p {
                max-width: 420px;
              }
            `}
          >
            <li>
              <p
                css={css`
                  font-size: 4em;
                `}
              >
                1.
              </p>

              <p>
                Identifier sa catégorie de membre en consultant notre{" "}
                <a
                  href={siteConfiguration.membershipPolicy.file.asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politique d’adhésion
                </a>
                .
              </p>
            </li>

            <li>
              <p
                css={css`
                  font-size: 4em;
                `}
              >
                2.
              </p>

              <p>
                Compléter le formulaire d'adhésion et le paiement de sa
                cotisation{" "}
                <a
                  href={siteConfiguration.membershipFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ici
                </a>
                .
              </p>
            </li>

            <li>
              <p
                css={css`
                  font-size: 4em;
                `}
              >
                3.
              </p>

              <p>
                Envoyer son curriculum vitæ à jour à l'adresse{" "}
                <a href="mailto:inscriptions@larteredanse.ca">
                  inscriptions@larteredanse.ca
                </a>
                .
              </p>
            </li>
          </ol>

          <p
            className="color-orange"
            css={css`
              max-width: 710px;
            `}
          >
            Votre statut devient effectif uniquement lorsque toutes ces
            conditions sont remplies.
          </p>
        </section>

        <TextColumns
          css={css`
            margin-top: ${180 / 30}em;
            h3 {
              margin-top: ${90 / 56}em;
              margin-bottom: 0.5rem;

              &.color-orange {
                margin-bottom: 0;
              }
            }

            section p:last-child {
              margin-bottom: 0;
            }
          `}
        >
          <section
            id="Criteres-dadmissibilite"
            className="prevent-column-break"
          >
            <h2>Critères d'admis&shy;sibilité</h2>

            <p>
              Chaque membre doit répondre à la définition et aux conditions
              d’admis&shy;sibilité de sa catégorie, ainsi que soumettre les
              pièces justificatives nécessaires. Toute demande d’adhésion peut
              être soumise à un comité de pairs possédant les connaissances
              appropriées pour en vérifier la conformité.
            </p>

            <h3 className="color-orange">Cas particuliers</h3>

            <p className="color-orange">
              Toute personne ne répondant pas à tous les critères de la{" "}
              <a href={siteConfiguration.membershipPolicy.file.asset.url}>
                Politique d’adhésion
              </a>{" "}
              de L’Artère, mais se considérant comme un·e professionnel·le de la
              danse peut nous contacter par courriel à{" "}
              <a href="mailto:inscriptions@larteredanse.ca">
                inscriptions@larteredanse.ca
              </a>
              .
            </p>
          </section>

          <section
            id="status-de-membres"
            className="prevent-column-break"
            css={css`
              /** Fix columns break issue on safari only */
              @media not all and (min-resolution: 0.001dpcm) {
                @supports (-webkit-appearance: none) {
                  display: inline-block;
                }
              }
            `}
          >
            <h2>Statuts de membres</h2>

            <h3
              css={css`
                margin-top: 0 !important;
              `}
            >
              Actif·ve
            </h3>

            <p>
              Tout·e artiste de la danse et du mouvement qui œuvre dans un
              contexte professionnel et qui est reconnu·e par ses pairs, dont la
              pratique de son art est son activité principale. Il·Elle est
              rémunéré·e pour ses activités et répond aux conditions
              d’admis­sibilité prévues à l’article 1.2 du document de politique
              d’adhésion.
            </p>

            <h3>Associé·e</h3>

            <p>
              Toute personne morale ou physique qui a à cœur le
              dévelop&shy;pement de L’Artère sans toutefois être un·e artiste
              professionnel·le en danse et en mouvement, ou qui est en voie de
              le devenir.
            </p>

            <h3 className="color-orange">Important</h3>

            <p className="color-orange">
              Pour chacun des statuts, les conditions d’admis&shy;­sibilité, les
              pièces justificatives à fournir ainsi que les privilèges sont
              spécifiés dans le document de{" "}
              <a href={siteConfiguration.membershipPolicy.file.asset.url}>
                politique d’adhésion
              </a>
              .
            </p>
          </section>
        </TextColumns>

        <section id="avantages">
          <h2>Avantages</h2>

          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(220px, 580px));
              grid-column-gap: 1em;

              div p:first-child {
                margin-top: 0;
              }
            `}
          >
            <div>
              <p>
                Avantages d'entraînement pour tou·te·s les membres de L’Artère :
              </p>

              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                  margin: 0;
                `}
              >
                {getBenefitByTypeId("49ba3926-a3e2-48c3-a7d4-7087203ff30d").map(
                  (benefit) => (
                    <li>
                      <PortableText blocks={benefit._rawDescription} />
                    </li>
                  )
                )}
              </ul>
            </div>

            {benefitTypes.edges.map(({ node }) => (
              <div id={node.slug.current}>
                <p className="color-orange">{node.name} :</p>

                <ul
                  css={css`
                    list-style: none;
                    padding: 0;
                    margin: 0;
                  `}
                >
                  {getBenefitByTypeId(node._id).map((benefit) => (
                    <li>
                      <PortableText blocks={benefit._rawDescription} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="membre-honoraire">
          <h2 className="h3">Membre honoraire. Honoré·e par L'Artère</h2>

          <p className="h2">
            Le·La membre honoraire est une personne physique, ou compagnie de
            danse, méritante annuellement ayant par son expertise ou son
            implication continue contribué de manière except&shy;ionnelle à
            l’enrichis&shy;sement et au dévelop&shy;pement de L’Artère et ses
            membres. Il·Elle est élu·e tous les deux ans et devient membre de
            L’Artère à vie. Il·Elle a les mêmes privilèges que les membres
            actif·ve·s.
          </p>
          {honoraryMembers.length > 0 && (
            <>
              <p className="h3">
                {honoraryMembers[0].name} ({honoraryMembers[0].year})
              </p>

              {honoraryMembers[0]._rawDescription && (
                <TextColumns
                  css={css`
                    line-height: 1.5em;
                  `}
                >
                  <PortableText blocks={honoraryMembers[0]._rawDescription} />
                </TextColumns>
              )}

              <h3 className="color-orange">Membres honorifiques</h3>

              <ul
                css={css`
                  list-style: none;
                  padding: 0;
                `}
              >
                {honoraryMembers.map((honoraryMember) => (
                  <li
                    className="h2 color-orange"
                    css={css`
                      margin: 0;
                    `}
                  >
                    {honoraryMember.name} ({honoraryMember.year})
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </article>
    </Layout>
  )
}

export default DevenirMembrePage

export const query = graphql`
  query {
    honoraryMembers: allSanityHonoraryMember(
      sort: { fields: year, order: DESC }
    ) {
      edges {
        node {
          _rawDescription
          name
          year
        }
      }
    }
    siteConfiguration: sanitySiteSetting {
      membershipPolicy {
        file {
          asset {
            url
          }
        }
        title
      }
      membershipFormUrl
    }
    benefits: allSanityBenefit(sort: { fields: sortOrder, order: ASC }) {
      group(field: benefitType____id) {
        fieldValue
        edges {
          node {
            _rawDescription
          }
        }
      }
    }
    benefitTypes: allSanityBenefitType(
      sort: { fields: sortOrder, order: ASC }
      filter: { _id: { ne: "49ba3926-a3e2-48c3-a7d4-7087203ff30d" } }
    ) {
      edges {
        node {
          _id
          name
          slug {
            current
          }
        }
      }
    }
  }
`
