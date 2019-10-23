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
import IconInstagram from "../../images/IconInstagram"
import { RemoveScroll } from "react-remove-scroll"
import FocusLock from "react-focus-lock"

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

const SiteHeader = ({ themeColor = "DARK", onNewsletterOpen }) => {
  const [open, setOpen] = useState(false)
  const scroll = useScroll()
  const isMobile = useMobile(breakpoint) || false
  const isOnTop = scroll ? !(scroll.y > viewBreak) : false

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

  const data = useStaticQuery(graphql`
    query {
      primary: navigationYaml(key: { eq: "primary" }) {
        items {
          title
          link
          subMenu {
            title
            link
          }
          subMenuType
        }
      }
      activityTypes: allSanityEventType(sort: { fields: order, order: ASC }) {
        edges {
          node {
            name
            alwaysOn
            slug {
              current
            }
          }
        }
      }
      activitiesGroup: allSanityEvent {
        group(field: eventType___slug___current) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const handleClick = () => {
    setOpen(!open)
  }

  const activityLinks = data.activityTypes.edges.reduce(
    (
      acc,
      {
        node: {
          name: title,
          alwaysOn,
          slug: { current: slug },
        },
      }
    ) => {
      if (
        !alwaysOn &&
        !data.activitiesGroup.group.find(
          ({ fieldValue }) => fieldValue === slug
        )
      ) {
        return acc
      }

      return [...acc, { title, link: `/activites#${slug}` }]
    },
    []
  )

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

          ${mediaQuery.greaterThen(breakpoint)} {
            padding-top: ${96 / 33}rem;

            ${isOnTop &&
              css`
                display: flex;
                justify-content: space-between;
              `}
          }
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

                ${mediaQuery.greaterThen(1024)} {
                  width: ${between("400px", "876px", "1024px", "1920px")};
                }
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

              ${mediaQuery.greaterThen(breakpoint)} {
                margin-top: ${27 / 33}rem;

                ${isOnTop &&
                  css`
                    display: none;
                  `}
              }
            `}
          >
            Menu
          </button>
        </div>

        <RemoveScroll
          enabled={open}
          css={css`
            ${mediaQuery.lessThen(breakpoint)} {
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: ${background};
              opacity: 0;
              pointer-events: none;
            }

            ${mediaQuery.greaterThen(breakpoint)} {
              ${!isOnTop &&
                css`
                  position: fixed;
                  top: 0;
                  right: 0 !important;
                  bottom: 0;
                  left: 0;
                  background-color: ${background};
                  opacity: 0;
                  pointer-events: none;
                `}
            }

            ${open &&
              css`
                overflow: auto;
                display: grid;
                opacity: 1 !important;
                pointer-events: auto !important;
                transition: opacity ${transition.speed.default}
                  ${transition.curve.default};
              `}
          `}
        >
          <FocusLock disabled={!open}>
            <div
              css={css`
                padding-top: 1em;

                ${mediaQuery.lessThen(breakpoint)} {
                  ${wrapper.bolt("padding")}
                  display: grid;
                  grid-template-rows: 1fr auto 1fr;
                  padding-bottom: 1em;
                }

                ${mediaQuery.greaterThen(breakpoint)} {
                  padding-top: ${27 / 33}rem;
                  ${!isOnTop &&
                    css`
                      padding-top: ${123 / 33}rem;
                      ${wrapper.bolt("padding")}
                      display: grid;
                      grid-template-rows: 1fr auto 1fr;
                      padding-bottom: 1em;
                    `}
                }

                ${open &&
                  css`
                    display: grid;
                  `}
              `}
            >
              <div
                css={css`
                  text-align: right;
                  grid-row: 1 / span 1;

                  ${mediaQuery.greaterThen(breakpoint)} {
                    ${isOnTop &&
                      css`
                        display: none;
                      `}
                  }
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

                  ${mediaQuery.lessThen(breakpoint)} {
                    grid-row: 2 / span 1;
                    flex-flow: column;
                  }

                  ${!isOnTop &&
                    css`
                      grid-row: 2 / span 1;
                      flex-flow: column;
                    `}
                `}
              >
                <ul
                  css={css`
                    &,
                    ul {
                      list-style: none;
                      margin: 0;
                    }
                    padding: 0;

                    ${mediaQuery.greaterThen(breakpoint)} {
                      ${isOnTop &&
                        css`
                          display: grid;
                          grid-template-columns: repeat(2, 1fr);
                          align-items: start;
                          grid-auto-flow: column dense;
                          grid-column-gap: 1em;
                        `}
                    }

                    li {
                      ${(isMobile || !isOnTop) &&
                        css`
                          font-size: ${30 / 16}em;
                          font-weight: 500;
                          margin: 0.5em 0;
                        `}

                      ${mediaQuery.greaterThen(breakpoint)} {
                        ${isOnTop &&
                          css`
                            grid-column: 2;

                            &:nth-child(1),
                            &:nth-child(2),
                            &:nth-child(3) {
                              grid-column: 1;
                            }
                          `}

                        ${!isOnTop &&
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
                    }
                  `}
                >
                  {data.primary.items.map(item => (
                    <li>
                      <Match path={item.link}>
                        {props => (
                          <>
                            <Link
                              to={item.link}
                              css={css`
                                text-decoration: none;
                                color: ${textColor};
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
                              {item.title}
                            </Link>

                            {item.subMenu && open && (
                              <ul
                                css={css`
                                  li {
                                    font-size: 0.5em !important;
                                  }
                                `}
                              >
                                {item.subMenu.map(subMenu => (
                                  <li>
                                    <Link
                                      to={subMenu.link}
                                      css={css`
                                        text-decoration: none;
                                        color: ${textColor};
                                        transition: color
                                          ${transition.speed.default}
                                          ${transition.curve.default};

                                        /* stylelint-disable-next-line */
                                        :hover {
                                          color: ${hoverColor};
                                          transition: color
                                            ${transition.speed.default}
                                            ${transition.curve.default};
                                        }
                                      `}
                                    >
                                      {subMenu.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {item.subMenuType === "activity" && open && (
                              <ul
                                css={css`
                                  li {
                                    font-size: 0.5em !important;
                                  }
                                `}
                              >
                                {activityLinks.map(subMenu => (
                                  <li>
                                    <Link
                                      to={subMenu.link}
                                      css={css`
                                        text-decoration: none;
                                        color: ${textColor};
                                        transition: color
                                          ${transition.speed.default}
                                          ${transition.curve.default};

                                        /* stylelint-disable-next-line */
                                        :hover {
                                          color: ${hoverColor};
                                          transition: color
                                            ${transition.speed.default}
                                            ${transition.curve.default};
                                        }
                                      `}
                                    >
                                      {subMenu.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </Match>
                    </li>
                  ))}

                  <li>
                    <button
                      onClick={() => onNewsletterOpen(true)}
                      css={css`
                        appearance: none;
                        background: none;
                        border: none;
                        padding: 0;
                        text-decoration: none;
                        color: ${textColor};
                        cursor: pointer;
                        transition: color ${transition.speed.default}
                          ${transition.curve.default};

                        /* stylelint-disable-next-line */
                        :hover {
                          color: ${hoverColor};
                          transition: color ${transition.speed.default}
                            ${transition.curve.default};
                        }
                      `}
                    >
                      Infolettre
                    </button>
                  </li>
                </ul>

                <div
                  css={css`
                    ${mediaQuery.greaterThen(breakpoint)} {
                      a {
                        display: inline-block;
                        margin-right: 0.5em;
                      }

                      ${isOnTop &&
                        css`
                          margin-left: 1em;

                          a {
                            display: block;
                            margin-right: 0;
                          }
                        `}
                    }
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
                  <a href="https://www.instagram.com/arteredanse/">
                    <IconInstagram
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
          </FocusLock>
        </RemoveScroll>
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
