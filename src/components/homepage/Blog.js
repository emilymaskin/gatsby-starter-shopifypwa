import React from 'react';
import H4 from '../elements/H4';
import { StyleSheet, css } from 'aphrodite/no-important';

const Blog = ({ blog }) => {
  return (
    <div className={css(styles.blog)}>
      <H4>{blog.title}</H4>
      <div className={css(styles.inner)}>
        <div className={css(styles.article)}>
          <a
            href={blog.article1.url}
            className={css(styles.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={blog.article1.image.originalSrc}
              alt={blog.article1.image.altText}
            />
            <div>{blog.article1.title}</div>
          </a>
        </div>
        <div className={css(styles.article)}>
          <a
            href={blog.article2.url}
            className={css(styles.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={blog.article2.image.originalSrc}
              alt={blog.article2.image.altText}
            />
            <div>{blog.article2.title}</div>
          </a>
        </div>
        <div className={css(styles.article)}>
          <a
            href={blog.article3.url}
            className={css(styles.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={blog.article3.image.originalSrc}
              alt={blog.article3.image.altText}
            />
            <div>{blog.article3.title}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

const styles = StyleSheet.create({
  blog: {
    background: '#F4F4F4',
    padding: 40,
  },
  inner: {
    maxWidth: 1280,
    display: 'flex',
    margin: 'auto',
    justifyContent: 'space-around',
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  link: {
    color: '#555',
    textDecoration: 'none',
    fontSize: 14,
    lineHeight: 1.4,
    fontWeight: 600,
  },
});
