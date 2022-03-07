import React, { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Blockquote } from '../mdx';
import { Header, Footer, GlobalStyle, Alert } from '../../components';
import Meta from './Meta';
import { Container, Content } from './styled';
import { DOMAIN } from './constants';

export default function Layout({
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  location,
  noSearchIndex,
  children,
}) {
  const baseUrl = location
    ? `https://${location.host || DOMAIN}`
    : `https://${DOMAIN}`;

  return (
    <MDXProvider
      components={{
        blockquote: (props) => <Blockquote {...props} />,
      }}
    >
      <Fragment>
        <Meta
          title={title}
          description={description}
          image={image}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          baseUrl={baseUrl}
          currentPath={location && location.pathname}
          noSearchIndex={noSearchIndex}
        />
        <GlobalStyle />
        <Container>
          {!location.pathname.startsWith('/save-ukraine') && (
            <Alert type="saveua" href="/save-ukraine">
              I am Ukrainian and need your help to save my country. Learn about
              ways to help.
            </Alert>
          )}
          <Header currentPath={location && location.pathname} />
          <Content role="main">{children}</Content>
          <Footer />
        </Container>
      </Fragment>
    </MDXProvider>
  );
}
