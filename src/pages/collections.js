import React from 'react';
import { graphql } from 'gatsby';

const Collections = ({ data }) => {
  const collections = data.shopify.shop.collections;

  return (
    <div>
      <h1>All Collections</h1>
      {collections.edges.map((edge, index) => (
        <div key={index}>
          <a href={`/collections/${edge.node.handle}`}>{edge.node.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Collections;

export const query = graphql`
  query collectionsQuery {
    shopify {
      shop {
        collections(first: 250) {
          edges {
            node {
              id
              handle
              title
              image {
                originalSrc
                altText
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
`;
