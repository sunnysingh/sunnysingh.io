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
          <span aria-hidden="true">&#x1F44B;</span> Hi,{' '}
          <Link to="/" title="Learn about me">
            I'm Sunny
          </Link>
          . Hope you enjoyed reading this!
        </Text>
      </div>
    </Container>
  );
}
