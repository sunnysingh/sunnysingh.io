import React from 'react';
import { Layout, Container, CardGrid } from '../components';
import { PROJECTS } from '../projects/constants';

export default function ProjectsPage({ location }) {
  return (
    <Layout title="Projects" location={location}>
      <Container>
        <CardGrid items={PROJECTS} />
      </Container>
    </Layout>
  );
}
