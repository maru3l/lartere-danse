// vendors
import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

// styles
import "normalize.css"
import globalStyle from "../../styles/global"
import { colors, transition } from "../../styles/variables"
import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter/SiteFooter"

const Layout = ({ children, themeColor }) => {
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

      <SiteFooter themeColor={themeColor} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeColor: PropTypes.string,
}

Layout.defaultProps = {
  themeColor: "DARK",
}

export default Layout
