import React from 'react';
import styled from 'styled-components';

const Container = styled.footer.attrs({
  role: 'contentinfo',
})`
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
        <NavLink href="https://buttondown.email/sunnysingh">Newsletter</NavLink>
        <NavLink href="https://www.notion.so/sunnysingh/Web-Development-Resources-ea153ce48f7c4557862a6b8fb88d72a9">
          Resources
        </NavLink>
        <NavLink href="https://ideascratch.com/sunnysinghio">Ideas</NavLink>
      </Nav>
      <Copyright>&copy; 2019 Sunny Singh</Copyright>
    </Container>
  );
}
