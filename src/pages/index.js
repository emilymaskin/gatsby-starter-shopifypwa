import React from 'react';
import { Link, graphql } from 'gatsby';
import BestSellers from '../components/homepage/BestSellers';

const IndexPage = ({ data }) => {
  const { products } = data.shopify.shop.collectionByHandle;

  return (
    <>
      <div>
        <Link to="/products/">All Products</Link>
      </div>
      <div>
        <Link to="/collections/">All Collections</Link>
      </div>
      <BestSellers products={products} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query homepageQuery {
    shopify {
      shop {
        collectionByHandle(handle: "best-sellers") {
          products(first: 5) {
            edges {
              node {
                title
                handle
                variants(first: 2) {
                  edges {
                    node {
                      price
                    }
                  }
                }
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                  minVariantPrice {
                    amount
                  }
                }
                images(first: 1, maxWidth: 200) {
                  edges {
                    node {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
