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
  </div>
);

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
    color: '#fff',
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
    background: '#0077C0',
    color: '#fff',
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 0.5,
    padding: 15,
    minWidth: 320,
    display: 'inline-block',
    textAlign: 'center',
  },
  arrow: {
    width: 36,
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    cursor: 'pointer',
    top: 0,
    opacity: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 36,
    ':hover': {
      opacity: 1,
    },
  },
  arrowLeft: {
    left: 0,
    backgroundImage:
      'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAAAXNSR0IArs4c6QAAA+VJREFUeAHt3L9O21AUx/G4aZqpUgeWRh0iMTBUrTJ2YWdgZmDIkhfIyhtEPANkQKxIvEHEyO5KGSOGqgNSx0aRotQuWOGPgcQ5vr7nnm+WJEgcn/P7+BgWO1osFqMaL3MJvDM3MQP/TwB4oycC8MAbTcDo2Gw88EYTMDo2Gw+80QSMjs3GA280AaNjs/HAG03A6NhsPPBGEzA6NhsPvNEEjI7NxgNvNAGjY7PxwBtNwOjYbDzwRhMwOjYbD7zRBB6MfXNz03jwNeiPbPw978XFxaednZ0fx8fHn4MWvx8u4k6aWi1FPzw8/DabzerNZnM+Ho+v2+32LOQTwPzGP0RvNBrzs7OzOHT09IQ2Df8U/fz8PD44OPgT8qZns5mFt4xuduOto5uEB/3uYm/qUg969hfe0D93oC/RzVzqQX+MbgIe9OfowcODno8eNDzoL6MHCw/66+hBwoP+Nnpw8KCvhh4UPOirowcDD/p66EHAg74+unp40Iuhq4YHvTi6WnjQN0NXCQ/65ujq4EGXQVcFD7ocuhp40GXRVcCDLo/uPTzo5aB7DQ96eejewoNeLrqX8KCXj+4dPOhu0L2CB90dujfwoLtF9wIedPfolcMfHR19Se5H/54+iSJ9KIGl+9Or4V4e9f3yo9tPp6enW4PBYDs5apS8FsPh8KeVhxK4TTr/aJXdLdvtdm9brdY0bSt5Dk90cnLSmk6nUX6b/FQ6gcrgk0t7bTKZXO/u7t6mQ11dXW3t7e19BV+aOL9eZfBpOyn+aDSK9/f3f6ffwU9TcPOqFD4dsV6v1y4vL8fguwHPjlI5PPgZhdt3L+DBd4ueHs0bePDd4nsFD747fO/gwXeD7yU8+OXjewsPfrn4XsODXx6+9/Dgl4OvAh58eXw18ODL4quCB18OXx08+DL4KuHB3xxfLTz4m+Grhge/OL56ePCL4QcBD/76+MHAg78eflDw4K+OHxw8+KvhBwkP/tv4wcKD/zp+0PDgv4wfPDz4+fgm4MF/jm8GHvzH+KbgwV/im4MH/w7fJDz4nt07t7wQuflk+RZtsxufnVpW8c3D51324zj+mDym5UN2coT4HiUPHhqFOFiRmebzea3X6233+/1fnU7nb5EaWn4HeC1Swn1yqRcOVEs54LVICfcJvHCgWsoBr0VKuE/ghQPVUg54LVLCfQIvHKiWcsBrkRLuE3jhQLWUA16LlHCfwAsHqqUc8FqkhPsEXjhQLeWA1yIl3CfwwoFqKQe8FinhPoEXDlRLOeC1SAn3CbxwoFrKAa9FSrhP4IUD1VIOeC1Swn0CLxyolnLAa5ES7hN44UC1lPsHqdZh6ZJoEBsAAAAASUVORK5CYII=")',
  },
  arrowRight: {
    right: 0,
    backgroundImage:
      'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAAAXNSR0IArs4c6QAABDZJREFUeAHt3T9LW1EYx/EmaWI6FjoUBwl0CZihW0cRHBwFVwdRX4MvwJfi4ODk4OBWHLsJpZChFHHIVKHQoVpJ01zjJTFNcv/k5vQ55/cV9Ca5f85zfp/7XAmYa6nX6318wZdcAmW5GTPhxwSAFz0RgAdeNAHRadPxwIsmIDptOh540QREp03HAy+agOi06XjgRRMQnTYdD7xoAqLTpuOBF01AdNp0PPCiCYhOm44HXjQB0WnT8cCLJiA6bToeeNEERKdNxwMfZgJXV1evdnd333W73TAnmHNWL3Pu58Vu7XZ7aWNj4/3t7e1S/7t6dnbWrlQqXtS+6CKDvtQ3Go3frVbrZxTi+fn5262trSadPzilgoav1+u9i4uLL2tra9/BH4DHP4OGjyYJfkz9fBk8PPjPweNnEvDgx9zDpQw8+EP06JEUPPhDfDl48Af4kvDgC17qhxc77bd6sh0fnwCq7/Pl4VUv+8A/tb5a5wMfX/P7SyV84Efgo4cq+MCPwavgAz8BXgEf+CnwoeMDPwM+ZHzgE+BDxQc+BXyI+MCnhA8NH/gM8CHhA58RPhR84HPAh4APfE543/GBnwPeZ3zg54T3FR/4AuB9xAe+IHjf8IEvEN4nfOALhvcFH/gFwPuAD/yC4K3jA79A+Gn46+vrrYeHhwWPPPvwJf6N+OyAilp7d3dX2tzcXL28vHwTHXN5efnX9fX1p2q1WtQQmY5Dx2eKK//G0V/vHhwcdEqlUi86SqfTqR8fHz+eBPmPmn/PoO96lT+W4vc8PT19vbe3t9q/wpbK5fKfw8PDb/v7+4/35il+tOQjAp+c0dxbROg7OzvR7/VKrVbrnpycfN7e3v4x94HnOACX+jnCS7OrRfSobuDT6OXcxio68DlB0+xmGR34NII5trGODnwO1KRdfEAHPkkx43pf0IHPCDtrc5/QgZ8lmWGdb+jAZ8CdtqmP6MBP00z5uq/owKcEnrSZz+jATxJN8Zrv6MCnQB7fJAR04MdVE56Hgg58AvTo6pDQgR+VnfE4NHTgZ2DHq0JEBz7WnbIMFR34KeDRyyGjAz8FPnR04CfAK6ADPwavgg78CLwSOvBP8GrowPcTUESXh1dFl4ZXRpeFV0eXhAc9Yhf77BzoA3QpeNCH6DLwoD9Hj54Ffw+c/n1mas1m88P9/b2ZmxL8y+D+leA/H99oNH4fHR197d+DxsSdKNwTTx4x+I6Pp31zc1NdWVn5v/cYi4sxsJSBN5C1qRKCv9SbSttQMcAbwnBZCvAu0zY0FvCGMFyWArzLtA2NBbwhDJelAO8ybUNjAW8Iw2UpwLtM29BYwBvCcFkK8C7TNjQW8IYwXJYCvMu0DY0FvCEMl6UA7zJtQ2MBbwjDZSnAu0zb0FjAG8JwWQrwLtM2NBbwhjBclgK8y7QNjQW8IQyXpQDvMm1DY/0FBAmMmqzZMDwAAAAASUVORK5CYII=")',
  },
});
