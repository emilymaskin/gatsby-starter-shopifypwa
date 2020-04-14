import React from 'react';
import H4 from '../elements/H4';
import { Link } from 'gatsby';
import { StyleSheet, css } from 'aphrodite/no-important';

const BestSellers = ({ products }) => {
  return (
    <>
      <H4>Popular Products</H4>
      <div className={css(styles.bestSellers)}>
        {products.edges.map((product, index) => {
          const {
            title,
            handle,
            images,
            priceRange: { maxVariantPrice, minVariantPrice },
          } = product.node;
          const { originalSrc, altText } = images.edges[0].node;

          return (
            <div key={index} className={css(styles.product)}>
              <Link to={`/products/${handle}`} className={css(styles.link)}>
                <img
                  src={originalSrc}
                  alt={altText}
                  className={css(styles.img)}
                />
                <div className={css(styles.text)}>{title}</div>
                <div>
                  {maxVariantPrice.amount > minVariantPrice.amount
                    ? 'From '
                    : null}
                  ${minVariantPrice.amount}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BestSellers;

const styles = StyleSheet.create({
  bestSellers: {
    display: 'flex',
  },
  product: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    textAlign: 'center',
    flex: 1,
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    fontFamily: "'futura-pt', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 14,
    lineHeight: 1.4,
    fontWeight: 600,
  },
  text: {
    letterSpacing: 0.5,
    textAlign: 'left',
    marginTop: 20,
  },
});
