import React from 'react';
import { graphql } from 'gatsby';
import ProductList from '../components/ProductList';

const Products = ({ data }) => {
  const products = data.shopify.shop.products;

  return (
    <div>
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Products;

export const query = graphql`
  query productsQuery {
    shopify {
      shop {
        products(first: 40) {
          edges {
            node {
              id
              handle
              title
              priceRange {
                minVariantPrice {
                  currencyCode
                  amount
                }
              }
              images(first: 2) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
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
