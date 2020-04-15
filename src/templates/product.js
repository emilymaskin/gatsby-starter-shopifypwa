import React from 'react';
import { graphql, Link } from 'gatsby';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import VariantSelector from '../components/VariantSelector';
import AddToCart from '../components/AddToCart';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../utils/constants';

const GET_PRODUCT = gql`
  query($handle: String!) {
    shop {
      productByHandle(handle: $handle) {
        variants(first: 1) {
          edges {
            node {
              availableForSale
            }
          }
        }
      }
    }
  }
`;

class Product extends React.Component {
  state = {};

  componentDidMount() {
    this.props.data.shopify.shop.productByHandle.options.forEach((selector) => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0] },
      });
    });
  }

  handleOptionChange = (event) => {
    const target = event.target;
    const variants = this.props.data.shopify.shop.productByHandle.variants
      .edges;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = variants.findIndex((variant) => {
      let hasFoundVariant = false;

      variant.node.selectedOptions.forEach((selectedOption) => {
        if (
          selectedOptions[selectedOption.name] ===
          selectedOption.value.valueOf()
        ) {
          hasFoundVariant = true;
        }
      });

      return hasFoundVariant;
    });

    if (selectedVariant < 0) {
      return;
    }

    this.setState({
      selectedVariant: variants[selectedVariant].node,
      selectedVariantImage:
        variants[selectedVariant].node.image &&
        variants[selectedVariant].node.image.originalSrc,
    });
  };

  handleQuantityChange = (event) => {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  };

  render() {
    const product = this.props.data.shopify.shop.productByHandle;

    let variant = this.state.selectedVariant || product.variants.edges[0].node;
    let variantImage =
      this.state.selectedVariantImage || product.images.edges[0].node.src;
    let variantQuantity = this.state.selectedVariantQuantity || 1;

    const price = new Intl.NumberFormat('en', {
      style: 'currency',
      currency: product.priceRange.minVariantPrice.currencyCode,
    }).format(variant.price);

    let variantSelectors = product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });

    return (
      <>
        <Link to={`/products/`}>‹ All Products</Link>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.productColumn)}>
            {product.images &&
              product.images.edges.map((image, i) => {
                // return (
                //     <Img
                //         key={i}
                //         fixed={image.childImageSharp.fixed}
                //     />
                // )
                return (
                  <img
                    key={i}
                    src={image.node.originalSrc}
                    alt={image.node.altText}
                  />
                );
              })}
          </div>
          <div className={css(styles.product)}>
            <div className={css(styles.vendor)}>{product.vendor}</div>
            <h1 className={css(styles.h1)}>{product.title}</h1>
            <div>{price}</div>
            <Query query={GET_PRODUCT} variables={{ handle: product.handle }}>
              {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>;
                if (error) return <div>Error :(</div>;

                return (
                  <>
                    <h3>
                      {data &&
                      data.shop.productByHandle &&
                      data.shop.productByHandle.variants &&
                      data.shop.productByHandle.variants.edges[0].node
                        .availableForSale
                        ? 'In Stock'
                        : 'Out of Stock'}
                    </h3>
                  </>
                );
              }}
            </Query>
            <div className={css(styles.options)}>
              <div className={css(styles.variants)}>{variantSelectors}</div>
              <div>
                <label onChange={null}>
                  Quantity
                  <input
                    min="1"
                    type="number"
                    defaultValue={variantQuantity}
                    onChange={this.handleQuantityChange}
                    className={css(styles.input)}
                  ></input>
                </label>
              </div>
            </div>
            <AddToCart variantId={variant.id} quantity={variantQuantity} />
          </div>
        </div>
        <p>{product.description}</p>
      </>
    );
  }
}

export default Product;

export const query = graphql`
  query($handle: String!) {
    shopify {
      shop {
        productByHandle(handle: $handle) {
          title
          description
          handle
          vendor
          priceRange {
            minVariantPrice {
              currencyCode
              amount
            }
          }
          options {
            id
            name
            values
          }
          images(first: 250) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          variants(first: 100) {
            edges {
              node {
                id
                price
                compareAtPrice
                sku
                availableForSale
                image {
                  originalSrc
                  altText
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

const styles = StyleSheet.create({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 40,
  },
  productColumn: {
    maxWidth: 400,
    margin: 'auto',
  },
  h1: {
    fontSize: 28,
  },
  options: {
    marginBottom: 20,
    display: 'flex',
  },
  variants: {
    marginRight: 40,
  },
  input: {
    display: 'block',
  },
  vendor: {
    color: colors.textLightGray,
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 20,
  },
});
