// vendors
import React from "react"
import Layout from "../components/Layout"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"
import wrapper from "../utils/wrapper"
import TextColumns from "../components/TextColumns/TextColumns"
import { graphql } from "gatsby"

const premiereOvationPage = ({ data }) => {
  const awardWinners = data.awardWinners.edges.map(({ node }) => node)

  return (
    <Layout>
      <article
        css={css`
          ${wrapper.bolt()}
        `}
      >
        <section id="intro">
          <VisuallyHidden>
            <h1>Première Ovation</h1>
          </VisuallyHidden>
          <p className="h2">
            L’Artère est l’organisme responsable de la mesure Première Ovation —
            Danse depuis 2019.
          </p>

          <p
            className="h3 color-orange"
            css={css`
              max-width: 1080px;
            `}
          >
            Les dates de dépôt à retenir : 1er mars et 1er octobre de chaque
            année.
          </p>

          <TextColumns className="h3">
            <p>
              Première Ovation — Danse vise le développement des artistes, des
              collectifs et des compagnies de la relève pour faciliter leur
              intégration au milieu professionnel en respectant l’équilibre en
              place.
            </p>

            <p>
              Par l’attribution de différentes bourses, ce volet contribue à :
            </p>

            <p>
              Faciliter le démarrage de la carrière en soutenant les premières
              expériences professionnelles;
            </p>

            <p>
              Favoriser l'intégration des artistes de la relève au milieu
              professionnel de la danse;
            </p>

            <p>
              Soutenir des projets artistiques qui contribuent à la
              professionnalisation des artistes de la relève;
            </p>

            <p>
              Contribuer à l'enrichissement de la démarche des artistes de la
              relève.
            </p>

            <p
              css={css`
                font-size: ${33 / 55}em;
                max-width: 630px;
              `}
            >
              Pour de plus amples renseignements,
              <br />
              consulter{" "}
              <a href="https://premiereovation.com/">premiereovation.com</a> ou
              écrivez-nous à{" "}
              <a href="mailto:pod@larteredanse.ca">pod@larteredanse.ca</a>.
            </p>
          </TextColumns>
        </section>

        {awardWinners.length > 0 && (
          <section id="boursiers">
            <h2 className="h3 color-orange">
              Boursier·ère·s des années passées
            </h2>
            <ul
              className="color-orange"
              css={css`
                list-style: none;
                padding: 0;
                font-size: ${148 / 33}em;
                margin-top: 0;
              `}
            >
              {awardWinners.map(winner => (
                <li>
                  {winner.firstname}, {winner.lastname} ({winner.year})
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </Layout>
  )
}

export default premiereOvationPage

export const query = graphql`
  query premiereOvationPageQuery {
    awardWinners: allSanityWinnerAwardOvation(
      sort: { fields: year, order: ASC }
    ) {
      edges {
        node {
          firstname
          lastname
          year
        }
      }
    }
  }
`
