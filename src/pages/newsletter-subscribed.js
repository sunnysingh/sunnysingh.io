import React from 'react';
import { Layout, SuccessfulLanding } from '../components';

export default function NewsletterSubscribedPage({ location }) {
  return (
    <Layout title="Subscribed Successfully" location={location} noSearchIndex>
      <SuccessfulLanding message="Thanks for subscribing! You should see an email from me soon." />
    </Layout>
  );
}
