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
  Bio,
  BioContent,
  BioTitle,
  BioText,
  BioAvatar,
  SubscribeForm,
  EmailSection,
  SubmitSection,
  ActionLink,
} from '../newsletter/styled';
import avatarBase64 from '../assets/avatar-base64';

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
            <Title>Exclusive updates</Title>
            <Subtitle>for the software enthusiast</Subtitle>
            <ActionLink href="https://buttondown.email/sunnysingh/archive/">
              Browse the archive
            </ActionLink>
          </HeaderContent>
        </Header>
        <Bio>
          <BioContent>
            <BioTitle>Who am I?</BioTitle>
            <div>
              <BioText>Hi, I'm Sunny. I love building software.</BioText>
              <BioText>
                I want to share my passion and knowledge with you.
              </BioText>
              <BioText>
                Subscribe to exclusive content where I share my experience from
                projects like <a href="https://ironmic.fm/">IronMic</a>,{' '}
                <a href="https://resrc.dev/">Resrc</a>,{' '}
                <a href="https://sunnycommutes.fm/">Sunny Commutes</a>, and
                more.
              </BioText>
            </div>
          </BioContent>
          <BioAvatar>
            <img src={avatarBase64} alt="Photo of Sunny Singh" />
          </BioAvatar>
        </Bio>
        <SubscribeForm
          action="https://buttondown.email/api/emails/embed-subscribe/sunnysingh"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/sunnysingh', 'popupwindow')"
          class="embeddable-buttondown-form"
        >
          <input type="hidden" name="embed" value="1" />
          <EmailSection>
            <Field name="email" id="bd-email" label="Your email" />
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
