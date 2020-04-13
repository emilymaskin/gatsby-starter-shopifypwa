import React from 'react';
import { Link } from 'gatsby';
import { StyleSheet, css } from 'aphrodite/no-important';

const Brands = ({ brands }) => {
  return (
    <>
      <h2>Shop by Brand</h2>
      <div className={css(styles.bestSellers)}>
        {brands.edges.map((brand, index) => {
          const { brand_slug, brand_logo } = brand.node.data;

          return (
            <div key={index} className={css(styles.brand)}>
              <Link
                to={`/collections/${brand_slug}`}
                className={css(styles.link)}
              >
                <img src={brand_logo.fixed.src} alt={brand_logo.alt} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Brands;

const styles = StyleSheet.create({
  bestSellers: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    fontFamily: "'futura-pt', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 14,
    lineHeight: 1.4,
    fontWeight: 600,
  },
});
