import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../utils/constants';

const H4 = ({ children }) => <h4 className={css(styles.h4)}>{children}</h4>;

export default H4;

const styles = StyleSheet.create({
  h4: {
    textAlign: 'center',
    fontSize: 28,
    margin: '40px auto',
    color: colors.textGray,
  },
});
