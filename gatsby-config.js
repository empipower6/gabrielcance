/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 if(process.env.NODE_ENV == 'development'){

  require("dotenv").config({
    path: `.env`,
  })
}

module.exports = {
  /* Your site config here */
  plugins: [
   `gatsby-plugin-sass`,
   `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6wat0wmtevq1`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
