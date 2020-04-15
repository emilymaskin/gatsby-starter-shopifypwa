import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { colors } from '../../utils/constants';

const Hero = ({ slides }) => {
  const [slide, setSlide] = useState(0);

  const onChange = (value) => setSlide(value);

  return (
    <div className={css(styles.carouselWrapper, styles.desktop)}>
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
            <img
              src={slide.node.data.desktop_image.url}
              className={css(styles.image)}
              alt=""
            />
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
          </div>
        ))}
      </Carousel>
      <Dots
        className={css(styles.dots)}
        value={slide}
        onChange={onChange}
        number={3}
      />
    </div>
  );
};

export default Hero;

const styles = StyleSheet.create({
  carouselWrapper: {
    position: 'relative',
    height: 480,
  },
  slide: {
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
  },
  content: {
    color: colors.white,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: 190,
  },
  image: {
    height: '100%',
    minWidth: '100%',
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
