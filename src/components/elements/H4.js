import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const H4 = ({ children }) => <h4 className={css(styles.h4)}>{children}</h4>;

export default H4;

const styles = StyleSheet.create({
  h4: {
    textAlign: 'center',
    fontSize: 28,
    margin: '80px auto',
    color: '#555',
  },
});
