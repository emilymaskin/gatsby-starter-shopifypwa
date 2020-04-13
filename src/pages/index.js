import React from 'react';
import { Link, graphql } from 'gatsby';
import BestSellers from '../components/homepage/BestSellers';
import Blog from '../components/homepage/Blog';
import Brands from '../components/homepage/Brands';

const brands = [
  {
    handle: 'neo-pure',
    name: 'Neo-Pure',
    image: 'Home_Page_Logo_Neo-Pure.jpg',
  },
  {
    handle: 'john-guest',
    name: 'John Guest',
    image: 'Home_Page_Logo_JohnGuest.jpg',
  },
  {
    handle: 'everpure',
    name: 'Everpure',
    image: 'Home_Page_Logo_Everpure.jpg',
  },
  {
    handle: 'watts',
    name: 'Watts Water Technologies',
    image: 'Home_Page_Logo_Watts.jpg',
  },
  {
    handle: 'grundfos',
    name: 'Grundfos',
    image: 'Home_Page_Logo_Grundfos.jpg',
  },

  {
    handle: 'sharkbite-fittings',
    name: 'SharkBite Fittings',
    image:
      'Home_Page_Logo_SharkBite_120x120_c0f65ef8-120d-41da-a6bc-50ceaf4c624b_500x.jpg',
  },
  {
    handle: '3m-aqua-pure',
    name: '3M (Aqua Pure)',
    image: 'Home_Page_Logo_3M.jpg',
  },
  {
    handle: 'colder-products',
    name: 'CPC: Colder Products Company',
    image: 'Home_Page_Logo_Colder.jpg',
  },
  {
    handle: 'axeon-water',
    name: 'AXEON Water Technologies',
    image: 'Home_Page_Logo_Axeon.jpg',
  },
  {
    handle: 'omnipure',
    name: 'Omnipure - Water Filters',
    image: 'Home_Page_Logo_Omnipure.jpg',
  },

  {
    handle: 'filmtec',
    name: 'Filmtec',
    image: 'Home_Page_Logo_Filmtech.jpg',
  },
  {
    handle: 'culligan-water-filters',
    name: 'Culligan Water',
    image: 'Home_Page_Logo_Culligan.jpg',
  },
  {
    handle: 'atlantic-ultraviolet-corporation',
    name: 'Atlantic Ultraviolet',
    image: 'Home_Page_Logo_Atlantic.jpg',
  },
  {
    handle: 'pentair-water',
    name: 'Pentair Water',
    image: 'Home_Page_Logo_Pentair.jpg',
  },
  {
    handle: 'viqua',
    name: 'Viqua',
    image: 'Home_Page_Logo_Viqua.jpg',
  },
];

const IndexPage = ({ data }) => {
  const { products } = data.shopify.shop.collectionByHandle;
  const { blogByHandle } = data.shopify;

  return (
    <>
      <div>
        <Link to="/products/">All Products</Link>
      </div>
      <div>
        <Link to="/collections/">All Collections</Link>
      </div>
      <Brands brands={brands} />
      <BestSellers products={products} />
      <Blog blog={blogByHandle} />
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
