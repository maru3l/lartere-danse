require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "L'Artère, art de la danse et du mouvement",
    description:
      "L’Artère est un organisme à but non lucratif œuvrant à faire rayonner l’art de la danse contemporaine professionnelle sur le territoire de la Capitale-Nationale.",
    siteUrl: "https://www.larteredanse.ca/",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    // "gatsby-plugin-subfont",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_DEPLOY_STUDIO_TOKEN,
        overlayDrafts: true,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
}
