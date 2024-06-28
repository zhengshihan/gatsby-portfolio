/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Nature & Code Haven",
    description:
      "A sanctuary for nature enthusiasts and coding aficionados. Explore captivating nature content and cutting-edge coding tutorials in one place.",
    copyright: "© 2024 Nature & Code Haven. All rights reserved.",
    contact: "zhengshihan1998@outlook.com",
    bottom: "© 2024 Nature & Code Haven. All rights reserved.",
  },
};
