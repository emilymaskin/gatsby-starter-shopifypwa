import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Blog = ({ blog }) => {
  return (
    <>
      <h2>{blog.title}</h2>
      <div className={css(styles.blog)}>
        <div className={css(styles.article)}>
          <a
            href={blog.article1.url}
            className={css(styles.link)}
            target="_blank"
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
          >
            <img
              src={blog.article3.image.originalSrc}
              alt={blog.article3.image.altText}
            />
            <div>{blog.article3.title}</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;

const styles = StyleSheet.create({
  blog: {
    display: 'flex',
  },
  article: {
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
