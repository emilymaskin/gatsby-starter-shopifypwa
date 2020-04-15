import { Helmet } from 'react-helmet';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ContextProviderComponent } from './context';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <Footer />
      </ContextProviderComponent>
    )}
  />
);

export default Layout;

const styles = StyleSheet.create({
  wrapper: {
    margin: '0 auto',
    padding: '0 0 1.45rem',
    paddingTop: 0,
  },
});
