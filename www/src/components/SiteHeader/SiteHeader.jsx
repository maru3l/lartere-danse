// vendors
import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { Match } from "@reach/router"
import LogoLartere from "../../images/LogoLartere"
import wrapper from "../../utils/wrapper"
import { colors, transition, zIndices } from "../../styles/variables"
import IconFacebook from "../../images/IconFacebook"
import useScroll from "../../hooks/useScroll"
import useMobile from "../../hooks/useMobile"
import { between } from "polished"
import mediaQuery from "../../utils/media-query"

const breakpoint = 1024
const viewBreak = 250

const LogoComponent = ({ children, ...rests }) => (
  <Match path="/">
    {props => {
      return props.match ? (
        <h1 {...rests}>{children}</h1>
      ) : (
        <Link to="/" {...rests}>
          {children}
        </Link>
      )
    }}
  </Match>
)

const SiteHeader = ({ themeColor = "DARK" }) => {
  const [open, setOpen] = useState(false)
  const scroll = useScroll()
  const isMobile = useMobile(breakpoint)
  const isOnTop = !(scroll.y > viewBreak)

  let textColor = colors.Isabelline
  let hoverColor = colors.PortlandOrange
  let background = colors.Jet

  switch (themeColor) {
    case "ORANGE":
      textColor = colors.Isabelline
      hoverColor = colors.Jet
      background = colors.PortlandOrange
      break

    case "DARK":
      textColor = colors.Isabelline
      hoverColor = colors.pink
      background = colors.Jet
      break

    case "LIGHT":
      textColor = colors.PortlandOrange
      hoverColor = colors.Jet
      background = colors.Isabelline
      break

    default:
      textColor = colors.Isabelline
      hoverColor = colors.PortlandOrange
      background = colors.Jet
      break
  }

  const navigation = useStaticQuery(graphql`
    query {
      primary: navigationYaml(key: { eq: "primary" }) {
        items {
          title
          link
        }
      }
    }
  `)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <header
        css={css`
          position: fixed;
          width: 100vw;
          box-sizing: border-box;
          ${wrapper.bolt("padding")}
          padding-top: 1rem;
          padding-bottom: 1em;
          top: 0;
          z-index: ${zIndices.sticky};
          height: auto;

          ${!isMobile &&
            isOnTop &&
            css`
              display: flex;
              justify-content: space-between;
            `}

          ${!isMobile &&
            css`
              padding-top: ${96 / 33}rem;
            `}
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: flex-start;
            flex-grow: 1;
          `}
        >
          <LogoComponent
            css={css`
              margin: 0;
              display: block;
              flex-grow: 1;
              font-size: inherit;
              transform-origin: top left;
            `}
          >
            <LogoLartere
              css={css`
                display: block;
                max-width: 876px;
                margin-right: 3em;
                height: 100%;
                fill: ${textColor};
                transition: fill ${transition.speed.default}
                  ${transition.curve.default};
              `}
            />
          </LogoComponent>

          <button
            type="button"
            onClick={handleClick}
            css={css`
              margin-left: 3em;
              appearance: none;
              border: none;
              background: none;
              cursor: pointer;
              color: ${textColor};

              ${!isMobile &&
                isOnTop &&
                css`
                  display: none;
                `}
            `}
          >
            Menu
          </button>
        </div>

        <div
          css={css`
            ${(isMobile || !isOnTop) &&
              css`
                ${wrapper.bolt("padding")}
                position: fixed;
                display: grid;
                grid-template-rows: 1fr auto 1fr;
                padding-top: 1em;
                padding-bottom: 1em;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                overflow: scroll;
                background-color: ${background};
                opacity: 0;
                pointer-events: none;

                ::-webkit-scrollbar {
                  display: none;
                }

                ${!isMobile &&
                  css`
                    padding-top: ${96 / 33}rem;
                  `}

                ${open &&
                  css`
                    display: grid;
                    opacity: 1;
                    pointer-events: auto;
                    transition: opacity ${transition.speed.default}
                      ${transition.curve.default};
                  `}
              `}

            ${isMobile &&
              css`
                transition: opacity ${transition.speed.default}
                  ${transition.curve.default};
              `}
          `}
        >
          <div
            css={css`
              text-align: right;

              ${(isMobile || !isOnTop) &&
                css`
                  grid-row: 1 / span 1;
                `}

              ${!isMobile &&
                isOnTop &&
                css`
                  display: none;
                `}
            `}
          >
            <button
              onClick={handleClick}
              css={css`
                appearance: none;
                background: none;
                border: 0;
                color: ${textColor};
                margin: 0;
                padding: 0;
                cursor: pointer;
              `}
            >
              Fermer
            </button>
          </div>

          <nav
            css={css`
              display: flex;

              ${(isMobile || !isOnTop) &&
                css`
                  grid-row: 2 / span 1;
                  flex-flow: column;
                `}
            `}
          >
            <ul
              css={css`
                list-style: none;
                margin: 0;
                padding: 0;

                ${!isMobile &&
                  isOnTop &&
                  css`
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    align-items: start;
                    grid-auto-flow: column dense;
                  `}

                li {
                  ${(isMobile || !isOnTop) &&
                    css`
                      font-size: ${30 / 16}em;
                      font-weight: 500;
                      margin: 0.5em 0;
                    `}

                  ${!isMobile &&
                    isOnTop &&
                    css`
                      grid-column: 2;

                      &:nth-child(1),
                      &:nth-child(2) {
                        grid-column: 1;
                      }
                    `}

                    ${!isMobile &&
                      !isOnTop &&
                      css`
                        font-weight: 900;
                        margin-top: 0;
                        font-size: ${between(
                          "25px",
                          "96px",
                          "375px",
                          "1920px"
                        )};
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
                          font-size: 96px;
                        }
                      `}
                }
              `}
            >
              {navigation.primary.items.map(({ title, link }) => (
                <li>
                  <Match path={link}>
                    {props => (
                      <Link
                        to={link}
                        css={css`
                          text-decoration: none;
                          transition: color ${transition.speed.default}
                            ${transition.curve.default};

                          /* stylelint-disable-next-line */
                          :hover {
                            color: ${hoverColor};
                            transition: color ${transition.speed.default}
                              ${transition.curve.default};
                          }

                          ${props.match &&
                            css`
                              color: ${hoverColor};
                            `}
                        `}
                      >
                        {title}
                      </Link>
                    )}
                  </Match>
                </li>
              ))}
            </ul>

            <div
              css={css`
                ${!isMobile &&
                  isOnTop &&
                  css`
                    margin-left: 1em;
                  `}
              `}
            >
              <a href="https://www.facebook.com/artereQC">
                <IconFacebook
                  css={css`
                    fill: ${textColor};
                    width: 1em;
                    transition: fill ${transition.speed.default}
                      ${transition.curve.default};

                    /* stylelint-disable-next-line */
                    :hover {
                      fill: ${hoverColor};
                    }
                  `}
                />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div
        css={css`
          height: 250px;
        `}
      />
    </>
  )
}

export default SiteHeader
