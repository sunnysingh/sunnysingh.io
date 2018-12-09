import React from 'react';
import { Link } from 'gatsby';
import { Layout, Container, Masthead, AccessibleText } from '../components';
import {
  HandWaveIcon,
  EarthIcon,
  ComputerIcon,
  RocketIcon,
} from '../components/icons';
import {
  Intro,
  IntroColumn,
  Heading,
  SubHeading,
  AvatarContainer,
  Avatar,
  SocialGrid,
  Bio,
  BioText,
  CurrentWork,
  Contact,
  LinkButton,
} from '../home/styled';
import { SOCIAL_LINKS } from '../home/constants';
import avatar from '../assets/avatar.jpg';

export default function HomePage({ location }) {
  return (
    <Layout location={location}>
      <Masthead>
        <Container>
          <Intro>
            <IntroColumn>
              <Heading>Sunny Singh</Heading>
              <SubHeading>Web Developer / Creator</SubHeading>
            </IntroColumn>
            <IntroColumn>
              <AvatarContainer>
                <Avatar src={avatar} alt="" />
              </AvatarContainer>
            </IntroColumn>
            <IntroColumn>
              <SocialGrid>
                {SOCIAL_LINKS.map(({ url, text, Icon }) => (
                  <a href={url} key={url}>
                    <Icon size={32} />
                    <AccessibleText>{text}</AccessibleText>
                  </a>
                ))}
              </SocialGrid>
            </IntroColumn>
          </Intro>
        </Container>
      </Masthead>
      <Bio>
        <BioText>
          <HandWaveIcon size={32} /> Hello! I'm a developer based in{' '}
          <a href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina">
            Charlotte, North Carolina
          </a>
          .
        </BioText>
        <BioText>
          <EarthIcon size={32} /> Born in{' '}
          <a href="https://en.wikipedia.org/wiki/Kharkiv">Kharkiv</a>, with
          parents from{' '}
          <a href="https://en.wikipedia.org/wiki/Tanzania">Tanzania</a> and{' '}
          <a href="https://en.wikipedia.org/wiki/Kolkata">Kolkata</a>.
        </BioText>
        <BioText>
          <ComputerIcon size={32} /> Coding using web technologies since the age
          of thirteen.
        </BioText>
        <CurrentWork>
          <RocketIcon size={32} /> Currently, I'm recording{' '}
          <Link to="/podcasts">podcasts</Link> and building{' '}
          <a href="https://ironmic.fm/">IronMic</a>.
        </CurrentWork>
      </Bio>
      <Contact>
        <p>Have an inquiry?</p>
        <LinkButton to="/contact">Send me a message</LinkButton>
      </Contact>
    </Layout>
  );
}
