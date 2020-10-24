import React from 'react';
import { Link } from 'gatsby';
import { Container, Text, Avatar } from './styled';
import avatarBase64 from '../../assets/avatar-base64';

export default function AuthorBio() {
  return (
    <Container>
      <Avatar src={avatarBase64} alt="Photo of Sunny Singh" />
      <div>
        <Text>
          <span aria-hidden="true">&#x1F44B;</span> Hello,{' '}
          <Link to="/" title="Learn about me">
            I'm Sunny
          </Link>
          . A software engineer at <a href="https://nomadhealth.com/">Nomad</a>
        </Text>
        <Text>
          <span aria-hidden="true">🎙</span> Prefer video or audio?{' '}
          <a href="https://sunnycommutes.fm/">Listen to my podcast</a>
        </Text>
        <Text>
          <span aria-hidden="true">📨</span> Want early access?{' '}
          <Link to="/newsletter">Subscribe to my newsletter</Link>
        </Text>
      </div>
    </Container>
  );
}
