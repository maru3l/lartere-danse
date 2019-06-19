// vendors
import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"

// styles
import "normalize.css"
import globalStyle from "../../styles/global"

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyle} />

    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
