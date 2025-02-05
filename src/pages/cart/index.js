import React from 'react';
import { Link } from 'gatsby';
import ContextConsumer from '../../layouts/context';
import CartTable from '../../components/checkout/CartTable';

const emptyCart = (
  <>
    <p>Your cart is currently empty.</p>
    <Link to={`/`}>Continue Shopping</Link>
  </>
);

// TODO: Abstract into helper function.Will be used for sharing carts
const checkoutUrl = storeProvider => {
  let url = storeProvider.checkout.webUrl;

  return url;
};

const Cart = () => (
  <>
    <h1>Your Cart</h1>
    <ContextConsumer>
      {({ store }) => {
        if (!store.checkout || store.cartCount === 0) {
          return emptyCart;
        }

        return (
          <>
            <CartTable
              products={store.checkout.lineItems}
              subtotalPrice={store.checkout.subtotalPrice}
              totalTax={store.checkout.totalTax}
              totalPrice={store.checkout.totalPrice}
            />
            <Link to={`/`}>Continue Shopping</Link>
            <br />
            <a href={checkoutUrl(store)}>Go to Checkout</a>
          </>
        );
      }}
    </ContextConsumer>
  </>
);

export default Cart;
