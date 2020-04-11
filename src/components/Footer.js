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

const Nav = styled.div`
  margin-bottom: 1rem;
`;

const NavLink = styled.a`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Copyright = styled.p`
  color: #5c5c69;
`;

export default function Footer() {
  return (
    <Container>
      <Nav>
        <NavLink href="https://sunny.link/news">
          Subscribe to my newsletter
        </NavLink>
        <NavLink href="https://resrc.dev/">Explore curated resources</NavLink>
      </Nav>
      <Copyright>&copy; 2020 Sunny Singh</Copyright>
    </Container>
  );
}
