import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Banner = ({ content }) => {
  const { text, link } = content.edges[0].node.data;
  return (
    <a href={link.url} target={link.target} className={css(styles.banner)}>
      {text}
    </a>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    background: '#0077C0',
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    padding: 5,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 1,
    display: 'block',
    textDecoration: 'none',
  },
});
