// vendors
import React from "react"
import Layout from "../components/Layout"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"
import wrapper from "../utils/wrapper"
import TextColumns from "../components/TextColumns/TextColumns"
import { colors, transition } from "../styles/variables"
import Seo from "../components/Seo"

const premiereOvationPage = () => {
  return (
    <Layout>
      <Seo title="Première ovation" />
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
            Les dates de dépôt à retenir : 1er mars et 1er octobre de chaque
            année.
          </p>

          <TextColumns className="h3">
            <p className="prevent-column-break">
              Première Ovation — Danse vise le dévelop&shy;pement des artistes,
              des collectifs et des compagnies de la relève pour faciliter leur
              intégration au milieu professionnel en respectant l’équilibre en
              place.
            </p>

            <p className="prevent-column-break">
              Par l’attribution de différentes bourses, ce volet contribue à :
            </p>

            <p className="prevent-column-break">
              Faciliter le démarrage de la carrière en soutenant les premières
              expériences professionnelles;
            </p>

            <p className="prevent-column-break">
              Favoriser l'intégration des artistes de la relève au milieu
              professionnel de la danse;
            </p>

            <p className="prevent-column-break">
              Soutenir des projets artistiques qui contribuent à la
              professionnalisation des artistes de la relève;
            </p>

            <p className="prevent-column-break">
              Contribuer à l'enrichis&shy;sement de la démarche des artistes de
              la relève.
            </p>

            <p
              className="prevent-column-break"
              css={css`
                margin: 2em 0;
              `}
            >
              <a
                href="https://premiereovation.com/programmes-aide/danse-presentation.aspx"
                css={css`
                  color: initial;
                  text-decoration: none;
                  text-transform: uppercase;
                  background-image: linear-gradient(
                    120deg,
                    ${colors.PaleCerulean} 0%,
                    ${colors.PaleCerulean} 100%
                  );
                  background-size: 100% 80%;
                  background-position: 0 center;
                  background-repeat: no-repeat;

                  transition: background-image ${transition.speed.fast}
                    ${transition.curve.default};

                  :hover {
                    color: initial;
                    background-image: linear-gradient(
                      120deg,
                      ${colors.pink} 0%,
                      ${colors.pink} 100%
                    );
                  }
                `}
              >
                Consulter <br />
                les programmes <br />
                offerts
              </a>
            </p>

            <p
              className="prevent-column-break"
              css={css`
                font-size: ${33 / 55}em;
                max-width: 630px;
              `}
            >
              Pour de plus amples renseignements,
              <br />
              consulter{" "}
              <a href="https://premiereovation.com/">premiereovation.com</a> ou
              écrivez-nous à{" "}
              <a href="mailto:pod@larteredanse.ca">pod@larteredanse.ca</a>.
            </p>
          </TextColumns>
        </section>
      </article>
    </Layout>
  )
}

export default premiereOvationPage
