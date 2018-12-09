import React, { Component } from 'react';
import { Layout, Container, Masthead, AccessibleText } from '../../components';
import { HandWaveIcon, EarthIcon, ComputerIcon } from '../../components/icons';
import {
  Intro,
  IntroColumn,
  Heading,
  SubHeading,
  AvatarContainer,
  Avatar,
  SocialGrid,
  Bio,
  Contact,
  LinkButton,
} from './_styled';
import { SOCIAL_LINKS } from './_constants';
import avatar from '../../assets/avatar.jpg';

export default class IndexPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
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
          <p>
            <HandWaveIcon size={32} /> Hello! I'm a developer based in{' '}
            <a href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina">
              Charlotte, North Carolina
            </a>
            .
          </p>
          <p>
            {/* TODO: Show map in a popover when clicking cities. */}
            <EarthIcon size={32} /> Born in{' '}
            <a href="https://en.wikipedia.org/wiki/Kharkiv">Kharkiv</a>, with
            parents from{' '}
            <a href="https://en.wikipedia.org/wiki/Tanzania">Tanzania</a> and{' '}
            <a href="">Kolkata</a>.
          </p>
          <p>
            <ComputerIcon size={32} /> Coding using web technologies since the
            age of thirteen.
          </p>
        </Bio>
        <Contact>
          <p>Have an inquiry?</p>
          <LinkButton to="/contact">Send me a message</LinkButton>
        </Contact>
      </Layout>
    );
  }
}
