import React from 'react';
import { Layout, Container, Field, Button } from '../components';
import Art from '../newsletter/Art';
import {
  Header,
  HeaderArt,
  HeaderContent,
  Divider,
  Title,
  Subtitle,
  SubscribeForm,
  EmailSection,
  SubmitSection,
  ActionLink,
} from '../newsletter/styled';

export default function NewsletterPage({ location }) {
  return (
    <Layout title="Newsletter" location={location}>
      <Container>
        <Header>
          <Divider />
          <HeaderArt>
            <Art />
          </HeaderArt>
          <HeaderContent>
            <Title>An email every Sunday</Title>
            <Subtitle>for the software enthusiast</Subtitle>
            <ActionLink href="https://buttondown.email/sunnysingh/archive/wfh-culture/">
              Read issue #33: WFH Culture
            </ActionLink>
          </HeaderContent>
        </Header>
        <SubscribeForm>
          <EmailSection>
            <Field id="email" label="Your email" />
          </EmailSection>
          <SubmitSection>
            <Button size="large" type="submit">
              Subscribe
            </Button>
          </SubmitSection>
        </SubscribeForm>
      </Container>
    </Layout>
  );
}
