// vendors
import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

// styles
import "normalize.css"
import globalStyle from "../../styles/global"
import { colors, transition } from "../../styles/variables"
import SiteHeader from "../SiteHeader"

const Layout = ({ children, themeColor = "DARK" }) => {
  let backgroundColor = colors.Jet

  switch (themeColor) {
    case "DARK":
      backgroundColor = colors.Jet
      break

    case "ORANGE":
      backgroundColor = colors.PortlandOrange
      break

    case "LIGHT":
      backgroundColor = colors.Isabelline
      break

    default:
      backgroundColor = colors.Jet
      break
  }

  return (
    <>
      <Global styles={globalStyle} />
      <Global
        styles={css`
          html {
            background-color: ${backgroundColor};
            transition: background-color ${transition.speed.default}
              ${transition.curve.default};
          }
        `}
      />
      <SiteHeader themeColor={themeColor} />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
