import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Footer = () => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.inner)}>Footer content here</div>
  </div>
);

export default Footer;

const styles = StyleSheet.create({
  wrapper: {
    borderBottom: '1px solid #ddd',
  },
  inner: {
    margin: '0 auto',
    maxWidth: 1280,
    padding: '1rem',
    display: 'flex',
  },
});
