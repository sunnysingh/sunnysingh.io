import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Ghost } from 'react-kawaii';
import { Layout, Button } from '../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  padding-top: 1rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 2rem;
  line-height: 1.5;
  font-family: 'PT Sans', sans-serif;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.05em;
`;

const Illustration = styled.div`
  margin-bottom: 4rem;
`;

export default function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <Container>
        <Heading>Oh no! Page not found</Heading>
        <Illustration>
          <Ghost size={240} mood="shocked" />
        </Illustration>
        <Button as={Link} size="large" to="/">
          Go to about page
        </Button>
      </Container>
    </Layout>
  );
}
