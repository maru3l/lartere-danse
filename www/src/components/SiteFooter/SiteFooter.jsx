// vendors
import React from "react"
import { css } from "@emotion/core"
import VisuallyHidden from "@reach/visually-hidden"
import { colors, transition } from "../../styles/variables"
import mediaQuery from "../../utils/media-query"
import wrapper from "../../utils/wrapper"
import { useStaticQuery, graphql, Link } from "gatsby"
import IconFacebook from "../../images/IconFacebook"
import LogoCalq from "../../images/LogoCalq"
import LogoConseilsDesArts from "../../images/LogoConseilsDesArts"
import LogoVilleDeQuebecEntenteDeDeveloppementCulturel from "../../images/LogoVilleDeQuebecEntenteDeDeveloppementCulturel"
import LogoPremiereOvation from "../../images/LogoPremiereOvation"
import LogoMaisonPourLaDanse from "../../images/LogoMaisonPourLaDanse"
import LogoEDQ from "../../images/LogoEDQ"
import LogoRotonde from "../../images/LogoRotonde"
import LogoConseilDeLaCulture from "../../images/LogoConseilDeLaCulture"
import logoRQD from "../../images/logo-RQD.png"

const breakpoint = 1024

const SiteFooter = ({ themeColor }) => {
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

  let textColor = colors.Isabelline
  let hoverColor = colors.PortlandOrange

  switch (themeColor) {
    case "ORANGE":
      textColor = colors.Isabelline
      hoverColor = colors.Jet
      break

    case "DARK":
      textColor = colors.PortlandOrange
      hoverColor = colors.Isabelline
      break

    case "LIGHT":
      textColor = colors.PortlandOrange
      hoverColor = colors.Jet
      break

    default:
      textColor = colors.PortlandOrange
      hoverColor = colors.Isabelline
      break
  }
  return (
    <footer
      css={css`
        ${wrapper.bolt("padding")}
        margin-top: 10em;

        ${mediaQuery.greaterThen(breakpoint)} {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
      `}
    >
      <nav
        css={css`
          display: flex;
          grid-column: 1 / span 2;
          align-items: flex-start;

          ${mediaQuery.lessThen(breakpoint)} {
            display: none;
          }
        `}
      >
        <div
          css={css`
            margin-right: 1em;
          `}
        >
          <a href="https://www.facebook.com/artereQC">
            <IconFacebook
              css={css`
                fill: ${textColor};
                width: 1em;
                transition: fill ${transition.speed.default}
                  ${transition.curve.default};

                :hover {
                  fill: ${hoverColor};
                }
              `}
            />
          </a>
        </div>
        <ul
          css={css`
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: start;
            grid-auto-flow: column dense;

            li {
              grid-column: 2;

              &:nth-child(1),
              &:nth-child(2) {
                grid-column: 1;
              }
            }
          `}
        >
          {navigation.primary.items.map(({ title, link }) => (
            <li>
              <Link
                to={link}
                css={css`
                  text-decoration: none;
                  color: ${textColor};
                  transition: color ${transition.speed.default}
                    ${transition.curve.default};

                  :hover {
                    color: ${hoverColor};
                    transition: color ${transition.speed.default}
                      ${transition.curve.default};
                  }
                `}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        css={css`
          font-size: ${22 / 33}em;
          grid-column: 4 / span 1;

          a {
            color: ${textColor};
            text-decoration: none;

            :hover {
              color: ${hoverColor};
            }
          }
        `}
      >
        <VisuallyHidden>
          <p>Addresse</p>
        </VisuallyHidden>
        <address
          css={css`
            font-style: normal;
            color: ${textColor};
            text-transform: uppercase;
          `}
        >
          336, rue du roi, suite 120
          <br />
          Québec, QC{"  "}G1K 2W5
        </address>

        <p
          css={{
            textTransform: `uppercase`,
            color: textColor,
            margin: "1em 0",
          }}
        >
          Téléphone: <a href="tel:+14185231777,4">418 523-1777 poste 4</a>
        </p>

        <VisuallyHidden>
          <p>Addresse courriels</p>
        </VisuallyHidden>

        <ul
          css={css`
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          <li>
            <a href="mailto:direction@larteredanse.ca">
              direction@larteredanse.ca
            </a>
          </li>
          <li>
            <a href="mailto:inscription@larteredanse.ca">
              inscription@larteredanse.ca
            </a>
          </li>
        </ul>
      </div>

      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          grid-row: 2 / span 1;
          grid-column: 1 / span 4;
          margin: 3em -${30 / 33}em;
          flex-wrap: wrap;

          ${mediaQuery.lessThen(breakpoint)} {
            display: none;
          }

          > div {
            margin: 0 ${30 / 33}em;
            max-height: ${60 / 33}em;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          svg {
            fill: ${textColor};
          }
        `}
      >
        <div>
          <LogoCalq
            css={css`
              height: ${35 / 33}em;
            `}
          />
        </div>

        <div>
          <LogoConseilsDesArts
            css={css`
              height: ${32 / 33}em;
            `}
          />
        </div>

        <div>
          <LogoVilleDeQuebecEntenteDeDeveloppementCulturel
            css={css`
              height: ${51 / 33}em;
            `}
          />
        </div>

        <div>
          <LogoPremiereOvation
            css={css`
              height: ${33 / 33}em;
            `}
          />
        </div>

        <div>
          <LogoMaisonPourLaDanse
            css={css`
              height: ${59 / 33}em;
            `}
          />
        </div>

        <div>
          <LogoEDQ
            css={css`
              height: ${56 / 33}em;
            `}
          />
        </div>

        <div>
          <LogoRotonde
            css={css`
              height: ${63 / 33}em;
            `}
            light
          />
        </div>

        <div>
          <img
            src={logoRQD}
            alt=""
            css={css`
              height: ${36 / 33}em;
            `}
          />
        </div>

        <div>
          <LogoConseilDeLaCulture
            css={css`
              height: ${41 / 33}em;
            `}
          />
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
