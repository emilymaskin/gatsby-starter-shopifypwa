import React from 'react';
import { graphql } from 'gatsby';
import ProductList from '../components/ProductList';
import { StyleSheet, css } from 'aphrodite/no-important';

const Collection = ({ data }) => {
  const {
    title,
    description,
    image,
    products,
  } = data.shopify.shop.collectionByHandle;

  return (
    <>
      <h1>{title}</h1>
      {image && <img src={image.originalSrc} alt={image.altText || ''} />}
      <div className={css(styles.description)}>{description}</div>
      <ProductList products={products} />
    </>
  );
};

export default Collection;

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    marginBottom: 40,
  },
});

export const query = graphql`
  query($handle: String!) {
    shopify {
      shop {
        collectionByHandle(handle: $handle) {
          handle
          title
          description
          image {
            originalSrc
            altText
          }
          products(first: 20) {
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
          }
        }
      }
    }
  }
`;
