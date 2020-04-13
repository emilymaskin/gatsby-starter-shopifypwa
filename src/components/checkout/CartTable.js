import React from 'react';
import RemoveProduct from './RemoveProduct';

import { StyleSheet, css } from 'aphrodite/no-important';

const CartTable = ({ products, subtotalPrice, totalTax, totalPrice }) => {
  if (!products) {
    return <p>Your cart is currently empty.</p>;
  }

  let productList = products.edges.map(({ node }) => (
    <tr key={node.id.toString()}>
      <td>
        <h3>{node.title}</h3>
        <ul>
          <li>SKU: {node.variant.sku}</li>
          {node.variant.selectedOptions.map(option => {
            return (
              <li>
                {option.name}: {option.value}
              </li>
            );
          })}
        </ul>
      </td>
      <td>
        <p>
          Qty: <input type="number" value={node.quantity} />
        </p>
      </td>
      <td>
        <p>{node.variant.price}</p>
      </td>
      <td>
        <RemoveProduct id={node.id} />
      </td>
    </tr>
  ));

  return (
    <>
      <table className={css(styles.table)}>
        <tbody className={css(styles.tbody)}>{productList}</tbody>
        <tfoot>
          <tr>
            <td>Subtotal</td>
            <td>{subtotalPrice ? subtotalPrice : '0.00'}</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td>{totalTax || '0.00'}</td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td>{totalPrice || '0.00'}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartTable;

const styles = StyleSheet.create({
  table: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tbody: {
    width: '100%',
  },
});
