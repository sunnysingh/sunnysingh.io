import React from 'react';
import { Layout, Container, CardGrid } from '../components';
import { PROJECTS } from '../projects/constants';

export default function ProjectsPage({ location }) {
  return (
    <Layout
      title="Projects by Sunny Singh"
      description="Side projects related to podcasting, web development, and social media. Built by Sunny Singh."
      location={location}
    >
      <Container>
        <CardGrid items={PROJECTS} />
      </Container>
    </Layout>
  );
}
