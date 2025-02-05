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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
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
        repositoryName: 'fwsco',
        accessToken: process.env.PRISMIC_TOKEN,
        schemas: {
          blog_post: require('./src/schemas/blog_post.json'),
          homepage_brand: require('./src/schemas/homepage_brand.json'),
          hero_slide: require('./src/schemas/hero_slide.json'),
          homepage_2_column_cta: require('./src/schemas/homepage_2_column_cta.json'),
          top_5_categories: require('./src/schemas/top_5_categories.json'),
          top_banner: require('./src/schemas/top_banner.json'),
        },
        shouldDownloadImage: () => true,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000, // default: 1000
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
