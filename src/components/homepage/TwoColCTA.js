import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../../utils/constants';
import idx from 'idx';

const TwoColCTA = ({ content }) => {
  return (
    <div className={css(styles.wrapper)}>
      {content.edges.map((col, index) => (
        <BackgroundImage
          className={css(styles.image)}
          fluid={idx(
            col.node.data.image,
            (_) => _.localFile.childImageSharp.fluid,
          )}
          key={index}
        >
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
        </BackgroundImage>
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
    paddingBottom: 150,
  },
  image: {
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    height: 425,
  },
  content: {
    background: colors.white,
    padding: '40px 20px 20px',
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    marginBottom: -220,
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
