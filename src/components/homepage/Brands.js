import React from 'react';
import { Link } from 'gatsby';
import { StyleSheet, css } from 'aphrodite/no-important';

const Brands = ({ brands }) => {
  return (
    <>
      <h2>Shop by Brand</h2>
      <div className={css(styles.bestSellers)}>
        {brands.map((brand, index) => {
          const { handle, name, image } = brand;

          return (
            <div key={index} className={css(styles.brand)}>
              <Link to={`/collections/${handle}`} className={css(styles.link)}>
                <img
                  src={`//cdn.shopify.com/s/files/1/2723/8896/files/${image}`}
                  alt={name}
                />
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
