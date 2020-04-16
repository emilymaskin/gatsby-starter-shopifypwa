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

export const queries = [
  {
    query: productQuery,
    indexName: `shopfiy_product`,
  },
];
