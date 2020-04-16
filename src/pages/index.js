import React from 'react';
import { graphql } from 'gatsby';
import BestSellers from '../components/homepage/BestSellers';
import Blog from '../components/homepage/Blog';
import Brands from '../components/homepage/Brands';
import Hero from '../components/homepage/Hero';
import Top5 from '../components/homepage/Top5';
import TwoColCTA from '../components/homepage/TwoColCTA';

const IndexPage = ({ data }) => {
  const {
    shopify: {
      collectionByHandle: { products },
      blogByHandle,
    },
    allPrismicHomepageBrand,
    allPrismicTop5Categories,
    allPrismicHeroSlide,
    allPrismicHomepage2ColumnCta,
  } = data;

  return (
    <>
      <Hero slides={allPrismicHeroSlide} />
      <Top5 collections={allPrismicTop5Categories} />
      <Brands brands={allPrismicHomepageBrand} />
      <TwoColCTA content={allPrismicHomepage2ColumnCta} />
      <BestSellers products={products} />
      <Blog blog={blogByHandle} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query homepageQuery {
    allPrismicHomepage2ColumnCta {
      edges {
        node {
          data {
            title
            description
            image {
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 675) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            button_text
            link {
              url
              target
            }
          }
        }
      }
    }
    allPrismicHeroSlide {
      edges {
        node {
          data {
            title
            subtitle
            desktop_image {
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            cta_text
            cta_link
            mobile_image {
              url
            }
          }
        }
      }
    }
    allPrismicTop5Categories {
      edges {
        node {
          data {
            collection_handle
            image {
              alt
              url
            }
          }
        }
      }
    }
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
              images(first: 1, maxWidth: 150) {
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
