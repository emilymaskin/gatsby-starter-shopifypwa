import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import ContextConsumer from '../layouts/context';
import { ReturnFieldsCheckout } from '../helpers/gqlFragments';
import { getSetting } from '../helpers/settings';
import { StaticQuery, graphql } from 'gatsby';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../utils/constants';

const ADD_TO_CART = gql`
  mutation AddToCart($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkoutUserErrors {
        message
        field
      }
      checkout {
        ...ReturnFieldsCheckout
      }
    }
  }
  ${ReturnFieldsCheckout}
`;

const ADD_TO_EXISTING_CART = gql`
  mutation checkoutLineItemsAdd(
    $lineItems: [CheckoutLineItemInput!]!
    $checkoutId: ID!
  ) {
    checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
      userErrors {
        field
        message
      }
      checkout {
        ...ReturnFieldsCheckout
      }
    }
  }
  ${ReturnFieldsCheckout}
`;

const ASSOCIATE_CUSTOMER_CHECKOUT = gql`
  mutation checkoutCustomerAssociateV2(
    $checkoutId: ID!
    $customerAccessToken: String!
  ) {
    checkoutCustomerAssociateV2(
      checkoutId: $checkoutId
      customerAccessToken: $customerAccessToken
    ) {
      userErrors {
        field
        message
      }
      checkout {
        ...ReturnFieldsCheckout
      }
      customer {
        id
      }
    }
  }
  ${ReturnFieldsCheckout}
`;

const AddToCart = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query settings {
          allFile(
            filter: {
              name: { eq: "products" }
              sourceInstanceName: { eq: "settings" }
            }
          ) {
            edges {
              node {
                childJson {
                  canAdd
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const canAddtoCart = getSetting(data, 'canAdd');
        if (!canAddtoCart) {
          return null;
        }

        return (
          <ContextConsumer>
            {({ set, store }) => {
              return (
                <Mutation mutation={ASSOCIATE_CUSTOMER_CHECKOUT}>
                  {(associateCustomer) => (
                    <Mutation
                      mutation={
                        store.checkout && store.checkout.id
                          ? ADD_TO_EXISTING_CART
                          : ADD_TO_CART
                      }
                      onCompleted={(res) => {
                        let { checkout } =
                          res.checkoutLineItemsAdd || res.checkoutCreate;
                        if (checkout.webUrl !== undefined) {
                          set({
                            checkout: checkout,
                            cartCount:
                              store.cartCount + parseInt(props.quantity),
                          });
                        }
                      }}
                    >
                      {(addToCart, { loading }) => {
                        if (loading)
                          return (
                            <button type="button" disabled="disabled">
                              Adding to Cart
                            </button>
                          );

                        return (
                          <button
                            className={css(styles.button)}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();

                              let mutationInput = {
                                lineItems: [
                                  {
                                    quantity: parseInt(props.quantity),
                                    variantId: props.variantId,
                                  },
                                ],
                              };

                              if (store.checkout && store.checkout.id) {
                                mutationInput.checkoutId = store.checkout.id;

                                addToCart({
                                  variables: mutationInput,
                                }).then((res) => {
                                  if (
                                    !res.data.checkoutLineItemsAdd.userErrors
                                      .length &&
                                    store.customerAccessToken
                                  ) {
                                    associateCustomer({
                                      variables: {
                                        checkoutId:
                                          res.data.checkoutLineItemsAdd.checkout
                                            .id,
                                        customerAccessToken:
                                          store.customerAccessToken.accessToken,
                                      },
                                    });
                                  }
                                });
                              } else {
                                addToCart({
                                  variables: {
                                    input: {
                                      lineItems: [
                                        {
                                          quantity: parseInt(props.quantity),
                                          variantId: props.variantId,
                                        },
                                      ],
                                    },
                                  },
                                });
                              }
                            }}
                          >
                            Add to Cart
                          </button>
                        );
                      }}
                    </Mutation>
                  )}
                </Mutation>
              );
            }}
          </ContextConsumer>
        );
      }}
    />
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  button: {
    background: colors.green,
    color: colors.white,
    WebkitAppearance: 'none',
    border: 'none',
    width: 300,
    padding: 12,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 1,
    cursor: 'pointer',
  },
});
