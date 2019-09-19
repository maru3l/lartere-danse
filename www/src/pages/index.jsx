// vendors
import React from "react"
import { css } from "@emotion/core"
import VisuallyHidden from "@reach/visually-hidden"

// components
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Cress from "../images/vector-header.svg"
import Logo from "../images/logo-lartere.svg"
import IconFacebook from "../images/icon-facebook.svg"
import { colors } from "../styles/variables"
import mediaQuery from "../utils/media-query"
import wrapper from "../utils/wrapper"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <div
      css={css`
        ${wrapper.bolt()}
        display: grid;
        margin-top: ${(135 / 1920) * 100}vw;
        margin-bottom: ${(135 / 1920) * 100}vw;

        ${mediaQuery.greaterThen(475)} {
          grid-template-columns: repeat(2, auto);
        }

        ${mediaQuery.greaterThen(1920)} {
          margin-top: 135px;
          margin-bottom: 135px;
        }
      `}
    >
      <img
        src={Cress}
        alt="Logo en forme de A dansant."
        css={css`
          grid-column: 1 / span 1;
          grid-row: 1 / span 1;
          margin-bottom: ${(150 / 1920) * 100}vw;

          ${mediaQuery.greaterThen(475)} {
            grid-column: 1 / span 2;
            grid-row: 1 / span 1;
          }

          ${mediaQuery.greaterThen(1920)} {
            margin-bottom: 150px;
          }
        `}
      />

      <p
        css={css`
          color: ${colors.PortlandOrange};
          font-size: ${122 / 33}em;
          letter-spacing: ${55 / 1000}em;
          grid-column: 1 / span 1;
          grid-row: 2 / span 1;
          text-transform: lowercase;
          margin: 0;

          ${mediaQuery.greaterThen(475)} {
            grid-column: 1 / span 1;
            grid-row: 2 / span 1;
            margin-bottom: ${(378 / 1920) * 100}vw;
          }

          ${mediaQuery.greaterThen(1920)} {
            margin-bottom: 378px;
          }
        `}
      >
        Art de la danse
      </p>
      <p
        css={css`
          color: ${colors.PortlandOrange};
          font-size: ${122 / 33}em;
          letter-spacing: ${55 / 1000}em;
          text-transform: lowercase;
          grid-column: 1 / span 1;
          grid-row: 3 / span 1;
          margin-top: 0;
          margin-bottom: ${(378 / 1920) * 100}vw;

          ${mediaQuery.greaterThen(475)} {
            margin-bottom: 0;
            grid-column: 2 / span 1;
            grid-row: 3 / span 1;
            writing-mode: tb;
            writing-mode: sideways-rl;
          }

          ${mediaQuery.greaterThen(1920)} {
            margin-bottom: 378px;
          }
        `}
      >
        {" "}
        Et du mouvement
      </p>

      <p
        className="h3"
        css={css`
          grid-column: 1 / span 1;
          grid-row: 4 / span 1;
          max-width: 1280px;

          ${mediaQuery.greaterThen(475)} {
            width: ${(1280 / 1920) * 100}vw;
            grid-column: 1 / span 1;
            grid-row: 3 / span 1;
            margin-top: 0;
          }
        `}
      >
        L’Artère est un organisme à but non lucratif œuvrant à faire rayonner
        l’art de la danse et du mouvement sur le territoire de la
        Capitale-Nationale. Sa mission est de soutenir le développement
        artistique et professionnel des artistes en danse contemporaine en
        offrant une programmation de stages et de services à la fine pointe de
        la pratique actuelle de l’art de la danse et du mouvement, contribuant
        ainsi à la rétention d’artistes de grand talent sur le territoire.
      </p>
    </div>
  </Layout>
)

export default IndexPage
