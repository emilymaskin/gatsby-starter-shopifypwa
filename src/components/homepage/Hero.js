import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Hero = ({ slides }) => (
  <div className={css(styles.carouselWrapper, styles.desktop)}>
    <Carousel
      slidesPerPage={1}
      slidesPerScroll={1}
      arrowRight={<div className={css(styles.arrow, styles.arrowRight)} />}
      arrowLeft={<div className={css(styles.arrow, styles.arrowLeft)} />}
      addArrowClickHandler
    >
      {slides.edges.map((slide, index) => (
        <div className={css(styles.slide)} key={index}>
          <img src={slide.node.data.desktop_image.url} alt="" />
          <div className={css(styles.content)}>
            <h3 className={css(styles.h3)}>{slide.node.data.subtitle}</h3>
            <h2 className={css(styles.h2)}>{slide.node.data.title}</h2>
            <a
              className={css(styles.button)}
              href={slide.node.data.cta_link}
              target="_blank"
            >
              {slide.node.data.cta_text}
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Hero;

const styles = StyleSheet.create({
  carouselWrapper: {
    position: 'relative',
  },
  slide: {
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
  },
  content: {
    color: '#fff',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: 100,
  },
  h2: {
    fontSize: 42,
    marginBottom: 40,
    width: 300,
  },
  h3: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    width: 300,
  },
  button: {
    background: '#0077C0',
    color: '#fff',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 1,
    padding: '15px 40px',
  },
});
