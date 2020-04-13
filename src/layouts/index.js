import Helmet from 'react-helmet';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ContextProviderComponent } from './context';
import Header from '../components/header';
import '../components/layout.css';
import { StyleSheet, css } from 'aphrodite/no-important';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ContextProviderComponent>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={css(styles.wrapper)}>{children}</div>
      </ContextProviderComponent>
    )}
  />
);

export default Layout;

const styles = StyleSheet.create({
  wrapper: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
  },
});
