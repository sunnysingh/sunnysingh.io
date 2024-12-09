import React from 'react';
import { Link } from 'gatsby';
import {
  Layout,
  Container,
  Masthead,
  AccessibleText,
  Button,
} from '../components';
import { HandWaveIcon, EarthIcon, ComputerIcon } from '../components/icons';
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
  AnimatedWave,
  Earth,
  AnimatedComputer,
  Contact,
} from '../home/styled';
import { SOCIAL_LINKS } from '../home/constants';
import avatarBase64 from '../assets/avatar-base64';

export default function HomePage({ location }) {
  return (
    <Layout location={location}>
      <Masthead>
        <Container>
          <Intro>
            <IntroColumn>
              <Heading>Sunny Singh</Heading>
              <SubHeading>Creating Content & Code</SubHeading>
            </IntroColumn>
            <IntroColumn>
              <AvatarContainer>
                <Avatar src={avatarBase64} alt="" />
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
          <AnimatedWave>
            <HandWaveIcon size={32} />
          </AnimatedWave>{' '}
          Hey, I'm a software engineer based in New York City.
        </BioText>
        <BioText>
          <Earth>
            <EarthIcon size={32} />
          </Earth>{' '}
          Born in Ukraine, with parents from Tanzania and India.
        </BioText>
        <BioText>
          <AnimatedComputer>
            <ComputerIcon size={32} />
          </AnimatedComputer>{' '}
          Coding with web technologies since the age of thirteen.
        </BioText>
      </Bio>
      <Contact>
        <p>Have an inquiry?</p>
        <Button as={Link} to="/contact">
          Send me a message
        </Button>
      </Contact>
    </Layout>
  );
}
