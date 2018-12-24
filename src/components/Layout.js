import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/tag';
import styled from 'styled-components';
import { Blockquote, Image } from '../components/mdx';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Footer from './Footer';

const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
`;

export default function Layout({ title, location, children }) {
  return (
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
        <MDXProvider
          components={{
            blockquote: props => <Blockquote {...props} location={location} />,
          }}
        >
          <Fragment>
            <Helmet>
              <html lang="en" />
              <title>
                {title
                  ? `${title} | ${data.site.siteMetadata.title}`
                  : `${data.site.siteMetadata.title} - Web Developer / Creator`}
              </title>
              <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
              <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png?v=zXb4gzXN7G"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png?v=zXb4gzXN7G"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png?v=zXb4gzXN7G"
              />
              <link rel="manifest" href="/site.webmanifest?v=zXb4gzXN7G" />
              <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg?v=zXb4gzXN7G"
                color="#1c1c22"
              />
              <link rel="shortcut icon" href="/favicon.ico?v=zXb4gzXN7G" />
              <meta name="apple-mobile-web-app-title" content="sunnysingh.io" />
              <meta name="application-name" content="sunnysingh.io" />
              <meta name="msapplication-TileColor" content="#1c1c22" />
              <meta name="theme-color" content="#1c1c22" />
              <meta name="description=" content="Web Developer / Creator" />
            </Helmet>
            <GlobalStyle />
            <Container>
              <Header currentPath={location.pathname} />
              <Content role="main">{children}</Content>
              <Footer />
            </Container>
          </Fragment>
        </MDXProvider>
      )}
    />
  );
}
