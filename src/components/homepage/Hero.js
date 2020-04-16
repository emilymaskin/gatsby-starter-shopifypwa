import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import BackgroundImage from 'gatsby-background-image';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { colors } from '../../utils/constants';
import idx from 'idx';

const Hero = ({ slides }) => {
  const [slide, setSlide] = useState(0);

  const onChange = (value) => setSlide(value);

  return (
    <>
      <Carousel
        slidesPerPage={1}
        slidesPerScroll={1}
        autoPlay={10000}
        onChange={onChange}
        value={slide}
        infinite
      >
        {slides.edges.map((slide, index) => (
          <div className={css(styles.slide)} key={index}>
            <BackgroundImage
              className={css(styles.image)}
              fluid={idx(
                slide.node.data.desktop_image,
                (_) => _.localFile.childImageSharp.fluid,
              )}
            >
              <div className={css(styles.content)}>
                <h3 className={css(styles.h3)}>{slide.node.data.subtitle}</h3>
                <h2 className={css(styles.h2)}>{slide.node.data.title}</h2>
                <a
                  className={css(styles.button)}
                  href={slide.node.data.cta_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {slide.node.data.cta_text}
                </a>
              </div>
            </BackgroundImage>
          </div>
        ))}
      </Carousel>
      <Dots
        className={css(styles.dots)}
        value={slide}
        onChange={onChange}
        number={3}
      />
    </>
  );
};

export default Hero;

const styles = StyleSheet.create({
  slide: {
    display: 'flex',
    alignContent: 'center',
    height: 480,
    minWidth: '100%',
  },
  content: {
    color: colors.white,
    marginLeft: 190,
  },
  image: {
    minWidth: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
  },
  h2: {
    fontSize: 46,
    marginBottom: 50,
    width: 400,
    letterSpacing: 1.2,
  },
  h3: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    width: 400,
    marginBottom: 20,
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
  },
  dots: {
    position: 'absolute',
    bottom: 30,
    filter: 'invert(100%)',
    textAlign: 'center',
    width: '100%',
  },
});
