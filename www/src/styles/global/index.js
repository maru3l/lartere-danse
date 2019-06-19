// vendors
import { css } from "@emotion/core"
import { between } from "polished"

// style varaibles
import { colors, fonts, lineHeights } from "../variables"

export default css`
  :root {
    --font-size: ${between("20px", "27.5px", "375px", "1920px")};
    --line-height: ${66 / 55};
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

  p {
    margin: ${lineHeights.body}rem 0;
    padding: 0;

    &:first-child {
      margin-top: 0;
    }
  }
`
