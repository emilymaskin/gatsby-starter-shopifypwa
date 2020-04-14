import React from 'react';
import H4 from '../elements/H4';
import { Link } from 'gatsby';
import { StyleSheet, css } from 'aphrodite/no-important';

const Brands = ({ brands }) => {
  return (
    <>
      <H4>Shop by Brand</H4>
      <div className={css(styles.brands)}>
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
  brands: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: 20,
    maxWidth: 1000,
    margin: 'auto',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    fontSize: 14,
    lineHeight: 1.4,
    fontWeight: 600,
  },
});
