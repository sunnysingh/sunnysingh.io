import React, { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/tag';
import { Blockquote } from '../mdx';
import { Header, Footer, GlobalStyle } from '../../components';
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
        blockquote: props => <Blockquote {...props} location={location} />,
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
          <Header currentPath={location && location.pathname} />
          <Content role="main">{children}</Content>
          <Footer />
        </Container>
      </Fragment>
    </MDXProvider>
  );
}
