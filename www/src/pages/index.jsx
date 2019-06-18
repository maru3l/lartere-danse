// vendors
import React from "react"

// components
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
