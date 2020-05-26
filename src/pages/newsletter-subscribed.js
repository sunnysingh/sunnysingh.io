import React, { useEffect } from 'react';
import { useGoal } from 'gatsby-plugin-fathom';
import { Layout, SuccessfulLanding } from '../components';

export default function NewsletterSubscribedPage({ location }) {
  const completeGoal = useGoal('WOQSFHG4');

  useEffect(() => {
    completeGoal();
  }, []);

  return (
    <Layout title="Subscribed Successfully" location={location} noSearchIndex>
      <SuccessfulLanding message="Thanks for subscribing! You should see an email from me soon." />
    </Layout>
  );
}
