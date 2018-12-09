import React from 'react';
import { Layout, Container } from '../components';

export default function ContactPage({ location }) {
  return (
    <Layout title="Contact" location={location}>
      <Container>Contact page.</Container>
    </Layout>
  );
}
