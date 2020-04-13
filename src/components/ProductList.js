import React from 'react';
import ProductBox from './ProductBox';
import { StyleSheet, css } from 'aphrodite/no-important';

const ProductList = ({ products }) => {
  const productList = products.edges.map(({ node }) => (
    <ProductBox key={node.id.toString()} product={node} />
  ));

  return <ul className={css(styles.ul)}>{productList}</ul>;
};

export default ProductList;

const styles = StyleSheet.create({
  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
    gridGap: 20,
    listStyle: 'none',
  },
});
