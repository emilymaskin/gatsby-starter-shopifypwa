const productQuery = `{
  getAllProducts {
    shopify {
      shop {
        products(first: 250) {
          edges {
            cursor
            node {
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    }
  }
}`;

const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: productQuery,
    transformer: ({ data }) => flatten(data.products.edges),
    indexName: `shopfiy_product`,
    settings,
  },
];

module.exports = queries;
