import React from 'react';
import { Layout, Form, Field, Button } from '../components';

const NETLIFY_FORM_NAME = 'contact';

export default function ContactPage({ location }) {
  return (
    <Layout
      title="Contact"
      description="Send a message to Sunny Singh."
      location={location}
    >
      <Form
        name={NETLIFY_FORM_NAME}
        method="POST"
        action="/contact-sent"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />

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
