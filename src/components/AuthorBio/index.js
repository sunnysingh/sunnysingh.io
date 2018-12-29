import React from 'react';
import { Link } from 'gatsby';
import { Container, Text, Avatar } from './styled';
import avatar from '../../assets/avatar.jpg';

export default function AuthorBio() {
  return (
    <Container>
      <Avatar src={avatar} alt="Photo of Sunny Singh" />
      <div>
        <Text>
          <span aria-hidden="true">&#x1F44B;</span> Hello,{' '}
          <Link to="/" title="Learn about me">
            I'm Sunny
          </Link>
          . Thanks for reading!
        </Text>
        <Text>
          <span aria-hidden="true">&#x1F399;</span> If you also like audio,{' '}
          <Link to="/podcasts">listen to my podcasts</Link>.
        </Text>
        <Text>
          <span aria-hidden="true">&#x1F628;</span> Fear missing out?{' '}
          <a href="https://buttondown.email/sunnysingh">
            Subscribe to my newsletter
          </a>
          .
        </Text>
      </div>
    </Container>
  );
}
