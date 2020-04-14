import React from 'react';
import { Link } from 'gatsby';
import { StyleSheet, css } from 'aphrodite/no-important';

const ProductBox = ({ product }) => {
  const {
    handle,
    title,
    images,
    priceRange: {
      minVariantPrice: { currencyCode, amount },
    },
  } = product;

  const minPrice = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);

  return (
    <li>
      <Link to={`/products/${handle}`} className={css(styles.link)}>
        {images.edges.length && (
          <img
            src={images.edges[0].node.originalSrc}
            alt={images.edges[0].node.altText || ''}
            className={css(styles.img)}
          />
        )}
        <h3 className={css(styles.h3)}>{title}</h3>
        <div>{`From ${minPrice}`}</div>
      </Link>
    </li>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  img: {
    maxWidth: 120,
  },
  link: {
    border: '1px solid #ddd',
    display: 'block',
    padding: 30,
    textAlign: 'center',
    textDecoration: 'none',
    color: '#158EC2',
    height: 340,
  },
  h3: {
    lineHeight: 1.4,
    fontSize: 14,
    padding: 20,
  },
});
