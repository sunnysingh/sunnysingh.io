import React from 'react';
import styled from 'styled-components';

const Container = styled.footer.attrs(() => ({
  role: 'contentinfo',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Copyright = styled.p`
  color: #5c5c69;
`;

export default function Footer() {
  return (
    <Container>
      <Copyright>&copy; {new Date().getFullYear()} Sunny Singh</Copyright>
    </Container>
  );
}
