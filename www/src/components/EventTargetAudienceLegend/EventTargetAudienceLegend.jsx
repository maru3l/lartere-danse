// vendors
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { css } from "@emotion/react"
import { colors } from "../../styles/variables"

const EventTargetAudienceLegend = () => (
  <ul
    css={css`
      list-style: none;
      padding: 0;
      margin: 0 0 5em 0;
      max-width: 55ch;

      li {
        display: flex;
      }

      li:before {
        order: 0;
        flex-basis: 48px;
        flex-shrink: 0;
        width: 48px;
        height: 24px;
        content: "";
        display: inline-block;
      }

      li:after {
        order: 1;
        content: " = ";
        display: inline-block;
        padding: 0 0.5ch;
      }

      span {
        order: 2;
      }
    `}
  >
    <li
      css={css`
        :before {
          background-color: ${colors.PortlandOrange};
        }
      `}
    >
      {" "}
      <span>Professionnel·le·s des arts de la danse et du mouvement</span>
    </li>
    <li
      css={css`
        :before {
          background-color: ${colors.PaleCerulean};
        }
      `}
    >
      {" "}
      <span>
        Bougeur·se·s expérimenté·e·s et artistes des arts de la scène (cirque •
        arts martiaux • théâtre • musique • etc.)
      </span>
    </li>
    <li
      css={css`
        :before {
          background-color: ${colors.canary};
        }
      `}
    >
      {" "}
      <span>Tout public</span>
    </li>
  </ul>
)

export default EventTargetAudienceLegend
