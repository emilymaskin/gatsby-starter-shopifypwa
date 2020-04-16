const queries = require('./src/utils/algolia');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Fresh Water Systems',
  },
  plugins: [
    'gatsby-plugin-aphrodite',
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-apollo-shopify',
      options: {
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `settings`,
        path: `./src/settings/`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'Shopify',
        fieldName: 'shopify',
        url: `https://${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com/api/graphql`,
        headers: {
          'X-Shopify-Storefront-Access-Token':
            process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Fresh Water Systems',
        short_name: 'FWS',
        start_url: '/',
        background_color: '#50B83C',
        theme_color: '#50B83C',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'fwsco', // (REQUIRED, replace with your own)
        accessToken:
          'MC5YcFRpV3hBQUFPN0c0Y19a.77-977-9Ru-_ve-_vSFWeRbvv73vv73vv709OlttQkMd77-977-9MO-_ve-_ve-_vXAwce-_vX_vv719', // (optional API access token)
        schemas: {
          blog_post: require('./src/schemas/blog_post.json'),
          homepage_brand: require('./src/schemas/homepage_brand.json'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
};
