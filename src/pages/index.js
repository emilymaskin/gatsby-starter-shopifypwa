import React from 'react';
import { Link, graphql } from 'gatsby';

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

      <div>
        {products.edges.map((product, index) => {
          const { title, handle, images } = product.node;
          const { originalSrc, altText } = images.edges[0].node;

          return (
            <div key={index}>
              <a href={`/products/${handle}`}>
                <img src={originalSrc} alt={altText} />
                <div>{title}</div>
              </a>
            </div>
          );
        })}
      </div>
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
