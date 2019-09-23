// vendors
import { css } from "@emotion/core"
import { between } from "polished"

// style varaibles
import { colors, fonts, lineHeights, transition } from "../variables"
import mediaQuery from "../../utils/media-query"

export default css`
  :root {
    --font-size: ${between("16px", "30px", "375px", "1920px")};
    --line-height: ${66 / 55};

    ${mediaQuery.greaterThen(1920)} {
      --font-size: 30px;
    }
  }

  html {
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-family: ${fonts.body};
    scroll-behavior: smooth;
    background-color: ${colors.background};

    scroll-padding-top: 250px;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: ${fonts.body};
    color: ${colors.text};
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-weight: medium;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: ${26 / 1000}em;

    /* Rythme background */
    /* background-image: linear-gradient(#eee 1px, transparent 1px);
    background-size: 100% calc(var(--line-height) * 1rem);
    background-position-y: calc(-0.5rem + 1px); */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-rendering: optimizeLegibility;
    letter-spacing: -7;
  }

  .p {
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-family: ${fonts.body};
  }

  p {
    margin: ${lineHeights.body}rem 0;
    padding: 0;

    a {
      transition: color ${transition.speed.fast} ${transition.curve.default};
      color: inherit;

      :hover {
        color: ${colors.pink};
      }
    }
  }

  ul {
    list-style-type: "- ";
  }

  li {
    a {
      transition: color ${transition.speed.fast} ${transition.curve.default};
      color: inherit;
      break-inside: avoid !important;

      :hover {
        color: ${colors.pink};
      }
    }
  }

  h1,
  .h1 {
    /* 24 / 148 */

    font-size: ${between(`24px`, `148px`, "375px", "1920px")};

    ${mediaQuery.greaterThen(1920)} {
      font-size: 148px;
    }

    line-height: ${165 / 148};
    margin-top: ${180 / 148}em;
    margin-bottom: ${80 / 148}em;
    font-weight: 500;
  }

  h2,
  .h2 {
    /* 35 / 96 */

    font-size: ${94 / 32}em;
    line-height: ${108 / 92};
    margin-top: ${180 / 96}em;
    margin-bottom: ${80 / 96}em;
    font-weight: 500;
  }

  h3,
  .h3,
  .big {
    /* 20 / 55 */

    font-size: ${56 / 32}em;
    font-weight: 500;
    margin-top: ${130 / 56}em;
    margin-bottom: ${80 / 56}em;

    & + p {
      margin-top: 0;
    }
  }

  .color-black {
    color: ${colors.Jet};
  }

  .color-pink {
    color: ${colors.pink};
  }

  .color-orange {
    color: ${colors.PortlandOrange};
  }

  .color-canary {
    color: ${colors.canary};
  }

  .color-pale-cerulean {
    color: ${colors.PaleCerulean};
  }

  .color-grey {
    color: ${colors.grey};
  }

  .prevent-column-break {
    break-inside: avoid; /* Chrome, Safari */
    page-break-inside: avoid; /* Theoretically FF 20+ */
    display: table; /* Actually FF 20+ */
  }
`
