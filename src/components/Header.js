import React from 'react';
import { Link } from 'gatsby';
import AuthenticationWrapper from './account/AuthenticationWrapper';
import Logout from './account/logout';
import CartLink from './account/CartLink';
import { StyleSheet, css } from 'aphrodite/no-important';
import logoImg from '../images/logo.webp';
import { colors } from '../utils/constants';

const Header = ({ siteTitle }) => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.inner)}>
      <h1 className={css(styles.h1)}>
        <Link to="/">
          <img src={logoImg} className={css(styles.logo)} alt={siteTitle} />
        </Link>
      </h1>
      <AuthenticationWrapper>
        {({ isAuthenticated }) => {
          return (
            <div className={css(styles.links)}>
              {!isAuthenticated ? (
                <>
                  <Link className={css(styles.link)} to="/account/login">
                    Sign In
                  </Link>
                  &nbsp;or&nbsp;
                  <Link className={css(styles.link)} to="/account/register">
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link className={css(styles.link)} to="/account">
                    My Account
                  </Link>
                  &nbsp;
                  <Logout />
                </>
              )}
              <CartLink />
            </div>
          );
        }}
      </AuthenticationWrapper>
    </div>
  </div>
);

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    borderBottom: '1px solid #ddd',
  },
  inner: {
    margin: '0 auto',
    maxWidth: 1280,
    padding: '1rem',
    display: 'flex',
  },
  logo: {
    height: 70,
  },
  h1: {
    margin: 0,
    fontSize: 24,
  },
  links: {
    marginLeft: 'auto',
    fontSize: 14,
  },
  link: {
    color: colors.textGray,
    fontWeight: 600,
    textDecoration: 'none',
  },
});
