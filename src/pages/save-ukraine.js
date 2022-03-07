import React from 'react';
import styled, { css } from 'styled-components';
import { Layout, Button } from '../components';
import { breakpoints } from '../config';
import rallyImage from '../assets/ukraine-rally.jpeg';

const LINKS = [
  {
    label: '📝 Write and call your elected officials',
    url: 'https://docs.google.com/document/d/1s2RFC2nHgTGbI5-Aq8mhesEi__h3xsMWpyeSwXjbJVU/edit',
  },
  {
    label: '📝 Demand the world to help',
    url: 'https://docs.google.com/document/u/2/d/1YOH91yIJ57DL88utH_2bBJPO0pjG1Fo7epZ4IbLDez8/mobilebasic,',
  },
  {
    label: '📝 Contact your congressional representatives',
    url: 'https://actionnetwork.org/letters/stand-with-ukraine',
  },
  {
    label: '📍 Particiate in rallies and events',
    url: 'https://www.stopputin.net/,',
  },
  {
    label: "🪖 Donate directly to Ukraine's Armed Forces",
    url: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
  },
  {
    label: '🦺 Donate for helmets and vests',
    url: 'https://www.facebook.com/donate/3129928640587218',
  },
  {
    label: "🆘 Donate to Razom's Emergency Response",
    url: 'https://razomforukraine.org/donate/',
  },
  {
    label: '🤝 Donate for humanitarian aid',
    url: 'https://www.facebook.com/donate/1137971146948461/',
  },
  {
    label: '🏥 Donate for hospital aid',
    url: 'https://4agc.com/fundraiser_pages/e9aca7e4-13d5-4e67-b6bd-548f94822793,',
  },
  {
    label: '⛑ Donate to Red Cross',
    url: 'https://www.icrc.org/en/donate/ukraine',
  },
];

const Poster = styled.h1`
  margin-bottom: 2rem;
  width: 100vw;
  color: white;
  font-size: 2rem;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.25em;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
`;

const PosterHalf = styled.div`
  padding: 0.75rem 0;

  ${(props) => css`
    border-top: 4px solid
      ${props.isTop ? 'rgb(0, 91, 187)' : 'rgba(255, 213, 0, 0.75)'};
    border-bottom: 4px solid
      ${props.isTop ? 'rgb(0, 91, 187)' : 'rgba(255, 213, 0, 0.75)'};
    background-color: ${props.isTop
      ? 'rgba(0, 91, 187, 0.75)'
      : 'rgba(255, 213, 0, 0.6)'};
  `}

  @media (min-width: ${breakpoints.medium}px) {
    padding: 1.25rem 0;
  }
`;

const CallToAction = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 4rem;
  }
`;

const Card = styled.div`
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  width: calc(100% - 4rem);
  max-width: 100%;
  padding: 2rem;
  background-color: rgba(0, 91, 187, 0.1);
  border: 4px solid rgba(255, 213, 0, 0.25);
  border-radius: 16px;
  font-size: 1.2rem;
  line-height: 1.5;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 4rem;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem;
    width: 820px;
    box-shadow: 0 0 100px rgba(255, 213, 0, 0.1);
    font-size: 1.5rem;
  }
`;

const CardHeading = styled.h2`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;

  @media (min-width: ${breakpoints.medium}px) {
    font-size: 2rem;
  }
`;

const CardText = styled.p`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const CardImageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const CardLinks = styled.ul`
  list-style: none;

  & li:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const CardLink = styled.a`
  display: block;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  text-decoration: none;
  transition: transform ease 200ms;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export default function SaveUkrainePage({ location }) {
  return (
    <Layout
      title="Save Ukraine"
      description="Hear my story and help Ukraine overcome Putin's invasion."
      image="/meta-ua.png"
      location={location}
    >
      <Poster>
        <PosterHalf isTop>Save</PosterHalf>
        <PosterHalf>Ukraine</PosterHalf>
      </Poster>

      <CallToAction>
        <Button size="large" as="a" href="#links">
          I Want To Help
        </Button>
      </CallToAction>

      <Card>
        <CardHeading>🇺🇦 My Story</CardHeading>
        <CardImageContainer>
          <img src={rallyImage} alt="" />
        </CardImageContainer>
        <CardText>I was born in Kharkiv. My wife was born in Odessa.</CardText>
        <CardText>
          We live in NYC, but many of our relatives and friends are in Ukraine.
          Recently, the Russian dictator Vladimir Putin started an invasion of
          Ukraine which is a <strong>currently ongoing war</strong>.
        </CardText>
        <CardText>
          I am still in disbelief. The new normalcy used to be just wearing
          masks and quarantining. Now it is running to bunkers and escaping
          bombs. Unfortunately, this is real. I am texting my family and friends
          to make sure that they're still alive.
        </CardText>
        <CardText>
          <em>
            While many of us can choose to ignore this war, that choice is a
            privilege that others don't have. Ukraine needs your help.
          </em>
        </CardText>
      </Card>

      <Card id="links">
        <CardHeading>🙏 Ways To Help</CardHeading>
        <CardText>
          Spreading awareness by showcasing Ukraine's flag 🇺🇦 in your social
          media names and avatars is a nice and motivating act, but you can go a
          step further by contacting government representatives, attending
          rallies, and donating money.
        </CardText>
        <CardLinks>
          {LINKS.map((link) => (
            <li key={link.url}>
              <CardLink
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </CardLink>
            </li>
          ))}
        </CardLinks>
        <CardText>
          <a
            href="https://linktr.ee/RazomForUkraine"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Razom's curated list
          </a>{' '}
          for more ways to help.
        </CardText>
      </Card>
    </Layout>
  );
}
