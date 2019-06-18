// vendors
import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

// styles
import "normalize.css"
import globalStyle from "../../styles/global"
import { colors } from "../../styles/variables"

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
