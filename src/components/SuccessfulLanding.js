import React from 'react';
import styled from 'styled-components';
import { SpeechBubble } from 'react-kawaii';
import { Link } from 'gatsby';
import { Button } from '../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h1`
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.05em;
`;

const Illustration = styled.div`
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

export default function SuccessfulLanding({ message }) {
  return (
    <Container>
      <Illustration>
        <SpeechBubble size={240} mood="blissful" color="#A6E191" />
      </Illustration>
      <Text>{message || 'Success!'}</Text>
      <Button as={Link} size="large" to="/">
        Go to about page
      </Button>
    </Container>
  );
}
