import React from 'react';
import { Layout, Form, Field, Button } from '../components';

export default function ContactPage({ location }) {
  return (
    <Layout
      title="Contact"
      description="Send a message to Sunny Singh."
      location={location}
    >
      <Form
        name="contact"
        method="POST"
        action="/contact-sent"
        data-netlify="true"
      >
        <Field id="name" label="Your name" type="text" required />

        <Field id="email" label="Your email" type="email" required />

        <Field id="message" label="Your message" as="textarea" required />

        <div data-netlify-recaptcha="true" />

        <Button size="large" type="submit">
          Send
        </Button>
      </Form>
    </Layout>
  );
}
