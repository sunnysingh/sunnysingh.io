import React from 'react';
import { Layout, SuccessfulLanding } from '../components';

export default function ContactSentPage({ location }) {
  return (
    <Layout title="Sent Successfully" location={location} noSearchIndex>
      <SuccessfulLanding message="Message sent successfully! I will respond ASAP" />
    </Layout>
  );
}
