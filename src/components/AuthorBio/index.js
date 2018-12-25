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
          <span role="img" aria-label="wave emoji">
            👋
          </span>{' '}
          Hello,{' '}
          <Link to="/" title="Learn about me">
            I'm Sunny
          </Link>
          . Thanks for reading!
        </Text>
        <Text>
          <span role="img" aria-label="thinking face emoji">
            🤔
          </span>{' '}
          On the go? <Link to="/podcasts">Listen to my podcasts</Link>.
        </Text>
        <Text>
          <span role="img" aria-label="hand with finger pointing down emoji">
            👇
          </span>{' '}
          Share, and join the discussion.
        </Text>
      </div>
    </Container>
  );
}
