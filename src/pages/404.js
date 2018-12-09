import React from 'react';
import { Layout, Container } from '../components';

export default function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <Container>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  );
}
