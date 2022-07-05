import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `szkolka-tomala`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    'gatsby-plugin-postcss', 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/tomala_logo.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "data",
        "path": "./src/data/"
      },
      __key: "data"
    },
    "gatsby-transformer-csv"
  ]
};

export default config;
