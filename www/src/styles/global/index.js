// vendors
import { css } from "@emotion/core"
import { between } from "polished"

// style varaibles
import { colors, fonts, lineHeights, transition } from "../variables"
import mediaQuery from "../../utils/media-query"

export default css`
  :root {
    --font-size: ${between("16px", "33px", "375px", "1920px")};
    --line-height: ${66 / 55};

    ${mediaQuery.greaterThen(1920)} {
      --font-size: 33px;
    }
  }

  html {
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-family: ${fonts.body};
    scroll-behavior: smooth;
    background-color: ${colors.background};
  }

  body {
    font-family: ${fonts.body};
    color: ${colors.text};
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-weight: medium;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: ${53 / 1000}em;

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
      break-inside: avoid !important;

      :hover {
        color: ${colors.pink};
      }
    }

    &:first-child {
      margin-top: 0;
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

  h2,
  .h2 {
    /* 35 / 96 */

    font-size: ${96 / 33}em;
    margin-bottom: ${186 / 96}em;
  }

  h3,
  .h3,
  .big {
    /* 20 / 55 */

    font-size: ${55 / 33}em;
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

  .font-accent {
    font-family: ${fonts.accent};
  }
`
