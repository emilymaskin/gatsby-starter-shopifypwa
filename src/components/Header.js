import React from 'react';
import { Link } from 'gatsby';
import AuthenticationWrapper from './account/AuthenticationWrapper';
import Logout from './account/logout';
import CartLink from './account/CartLink';
import { StyleSheet, css } from 'aphrodite/no-important';

const Header = ({ siteTitle }) => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.inner)}>
      <h1 className={css(styles.h1)}>
        <Link to="/" className={css(styles.h1Link)}>
          {siteTitle}
        </Link>
        <AuthenticationWrapper>
          {({ isAuthenticated }) => {
            return (
              <div className={css(styles.links)}>
                {!isAuthenticated ? (
                  <>
                    <Link to="/account/login">Log In</Link>
                    &nbsp;
                    <Link to="/account/register">Sign Up</Link>
                  </>
                ) : (
                  <>
                    <Link to="/account">My Account</Link>
                    &nbsp;
                    <Logout />
                  </>
                )}
                <CartLink />
              </div>
            );
          }}
        </AuthenticationWrapper>
      </h1>
    </div>
  </div>
);

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: '1.45rem',
    borderBottom: '1px solid #ddd',
  },
  inner: {
    margin: '0 auto',
    maxWidth: 1280,
    padding: '1rem',
  },
  h1: {
    display: 'flex',
    margin: 0,
    fontSize: 24,
  },
  h1Link: {
    color: 'black',
    textDecoration: 'none',
  },
  links: {
    marginLeft: 'auto',
  },
});
