module.exports = {
  siteMetadata: {
    title: `Design code`,
    description: `Fun to learn modern coding courses for designers including React, Different styling methods, static data with JSON, GraphQL, and contemporary content management`,
    keywords:
      "courses, react, framer x, designers, components, graphql, contentful",
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "nql3d04airsl",
        accessToken: "ILoKvZKN-47xfpLwpZ9D7atQrJHpIMwnMZ4wjDEkUnE",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
