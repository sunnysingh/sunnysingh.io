import React from 'react';
import { Layout, Container, CardGrid } from '../components';
import { PODCASTS } from '../podcasts/constants';

export default function PodcastsPage({ location }) {
  return (
    <Layout title="Podcasts" location={location}>
      <Container>
        <CardGrid items={PODCASTS} />
      </Container>
    </Layout>
  );
}
