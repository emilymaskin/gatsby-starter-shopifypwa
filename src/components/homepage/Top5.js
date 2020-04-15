import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Top5 = ({ collections }) => (
  <div className={css(styles.collections)}>
    {collections.edges.map((handle, index) => (
      <a
        href={`/collections/${handle.node.data.collection_handle}`}
        className={css(styles.collection)}
        key={index}
      >
        <img
          src={handle.node.data.image.url}
          alt={handle.node.data.image.alt}
        />
        <div className={css(styles.title)}>{handle.node.data.image.alt}</div>
        <div className={css(styles.arrow)}>&rarr;</div>
      </a>
    ))}
  </div>
);

export default Top5;

const styles = StyleSheet.create({
  collections: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: 40,
    margin: 'auto',
    maxWidth: 1360,
    padding: '40px 0',
  },
  collection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    position: 'relative',
  },
  title: {
    position: 'absolute',
    color: '#555',
    padding: 10,
    fontWeight: 600,
    fontSize: 16,
  },
  arrow: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    background: '#0077C0',
    color: '#fff',
    padding: '12px 20px',
    fontSize: 16,
  },
});
