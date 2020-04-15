import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../utils/constants';

const TwoColCTA = ({ content }) => {
  return (
    <div className={css(styles.wrapper)}>
      {content.edges.map((col) => (
        <div className={css(styles.col)}>
          <img src={col.node.data.image.url} alt="" />
          <div className={css(styles.content)}>
            <div className={css(styles.title)}>{col.node.data.title}</div>
            <div className={css(styles.text)}>{col.node.data.description}</div>
            <a
              className={css(styles.button)}
              href={col.node.data.link.url}
              target={col.node.data.link.target}
              rel="noopener noreferrer"
            >
              {col.node.data.button_text}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoColCTA;

const styles = StyleSheet.create({
  wrapper: {
    padding: 40,
    maxWidth: 1400,
    display: 'grid',
    margin: 'auto',
    gridGap: 40,
    gridTemplateColumns: '1fr 1fr',
    color: colors.textGray,
  },
  col: {
    position: 'relative',
    paddingBottom: 100,
  },
  content: {
    background: colors.white,
    padding: 40,
    textAlign: 'center',
    width: '70%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.25,
    margin: '0 auto 10px',
  },
  text: {
    fontSize: 14,
    marginBottom: 25,
  },
  button: {
    background: colors.blue,
    color: colors.white,
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 0.5,
    padding: 15,
    minWidth: 320,
    display: 'inline-block',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
