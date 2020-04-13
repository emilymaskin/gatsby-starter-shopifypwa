import React from 'react';
import { Link, graphql } from 'gatsby';
import BestSellers from '../components/homepage/BestSellers';
import Blog from '../components/homepage/Blog';
import Brands from '../components/homepage/Brands';

const IndexPage = ({ data }) => {
  const {
    shopify: {
      collectionByHandle: { products },
      blogByHandle,
    },
    allPrismicHomepageBrand,
  } = data;

  return (
    <>
      <div>
        <Link to="/products/">All Products</Link>
      </div>
      <div>
        <Link to="/collections/">All Collections</Link>
      </div>
      <Brands brands={allPrismicHomepageBrand} />
      <BestSellers products={products} />
      <Blog blog={blogByHandle} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query homepageQuery {
    allPrismicHomepageBrand {
      edges {
        node {
          data {
            brand_slug
            brand_logo {
              fixed(height: 120, width: 120) {
                src
              }
              alt
            }
          }
        }
      }
    }
    shopify {
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
      blogByHandle(handle: "blog") {
        title
        article1: articleByHandle(handle: "activated-carbon-filters-101") {
          url
          title
          image(crop: CENTER, maxHeight: 240, maxWidth: 360) {
            originalSrc
            altText
          }
        }
        article2: articleByHandle(handle: "under-sink-filters-buyers-guide") {
          url
          title
          image(crop: CENTER, maxHeight: 240, maxWidth: 360) {
            originalSrc
            altText
          }
        }
        article3: articleByHandle(
          handle: "what-is-a-water-booster-pump-and-how-does-it-work"
        ) {
          url
          title
          image(crop: CENTER, maxHeight: 240, maxWidth: 360) {
            originalSrc
            altText
          }
        }
      }
    }
  }
`;
