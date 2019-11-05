// vendors
import React from "react"
import Layout from "../components/Layout"
import VisuallyHidden from "@reach/visually-hidden"
import css from "@emotion/css"
import wrapper from "../utils/wrapper"
import TextColumns from "../components/TextColumns/TextColumns"
import { colors, transition } from "../styles/variables"
import Seo from "../components/Seo"
import Button from "../components/Button/Button"

const premiereOvationPage = () => {
  return (
    <Layout>
      <Seo
        title="Première ovation"
        description="L’Artère est gestionnaire de la mesure Première Ovation — Danse, qui soutient le dévelop­pement des artistes, des collectifs et des compagnies de la relève de la ville de Québec pour faciliter leur intégration au milieu professionnel de la danse."
      />
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
              <Button
                tag="a"
                href="https://premiereovation.com/programmes-aide/danse-presentation.aspx"
                secondary
                css={css`
                  text-transform: uppercase;
                `}
              >
                Consulter <br />
                les programmes <br />
                offerts
              </Button>
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
              consultez{" "}
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
