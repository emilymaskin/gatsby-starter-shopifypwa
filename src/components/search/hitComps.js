import React from 'react';
import { Link } from 'gatsby';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../utils/constants';

export const ProductHit = (clickHandler) => ({ hit }) => {
  return (
    <Link
      to={`/products/${hit.handle}`}
      onClick={clickHandler}
      className={css(styles.result)}
    >
      {hit.title}
    </Link>
  );
};

const styles = StyleSheet.create({
  result: {
    textDecoration: 'none',
    color: colors.textGray,
    fontSize: 14,
  },
});
