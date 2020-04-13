import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ContextConsumer from '../../layouts/context';
import { ReturnFieldsCheckout } from '../../helpers/gqlFragments';

const REMOVE_LINE_ITEM = gql`
  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
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

const RemoveProduct = ({ id }) => {
  return (
    <ContextConsumer>
      {({ set, store }) => {
        return (
          <Mutation
            mutation={REMOVE_LINE_ITEM}
            onCompleted={res => {
              set({
                checkout: res.checkoutLineItemsRemove.checkout,
                cartCount:
                  res.checkoutLineItemsRemove.checkout == null
                    ? 0
                    : res.checkoutLineItemsRemove.checkout.lineItems.edges
                        .length
              });
            }}
          >
            {(removeLineItem, { data, loading, errors }) => {
              return (
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    removeLineItem({
                      variables: {
                        checkoutId: store.checkout.id,
                        lineItemIds: [id]
                      }
                    });
                  }}
                >
                  Remove
                </button>
              );
            }}
          </Mutation>
        );
      }}
    </ContextConsumer>
  );
};

export default RemoveProduct;
