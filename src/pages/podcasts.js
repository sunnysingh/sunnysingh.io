import React from 'react';
import { Layout, Container, CardGrid } from '../components';
import { PODCASTS } from '../podcasts/constants';

export default function PodcastsPage({ location }) {
  return (
    <Layout
      title="Podcasts by Sunny Singh"
      description="Podcasts related to web development, business, and podcasting itself. Hosted by Sunny Singh."
      location={location}
    >
      <Container>
        <CardGrid items={PODCASTS} />
      </Container>
    </Layout>
  );
}
