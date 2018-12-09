import React from 'react';
import { Link } from 'gatsby';
import Container from '../Container';
import { AccessibleText } from '../ScreenReader';
import LogoSvg from '../Logo';
import { HeaderLayout, Logo, Nav, NavLink } from './styled';

export default function Header({ currentPath }) {
  return (
    <header role="banner">
      <Container>
        <HeaderLayout>
          <Nav>
            <NavLink to="/" first>
              <span>About</span>
            </NavLink>
            <NavLink to="/projects">
              <span>Projects</span>
            </NavLink>
          </Nav>
          {currentPath === '/' ? (
            <Logo>
              <LogoSvg />
              <AccessibleText>Sunny Singh logo</AccessibleText>
            </Logo>
          ) : (
            <Logo>
              <Link to="/" title="Go to home page">
                <LogoSvg />
                <AccessibleText>Sunny Singh logo</AccessibleText>
              </Link>
            </Logo>
          )}
          <Nav secondary>
            <NavLink to="/blog">
              <span>Articles</span>
            </NavLink>
            <NavLink to="/podcasts" last>
              <span>Podcasts</span>
            </NavLink>
          </Nav>
        </HeaderLayout>
      </Container>
    </header>
  );
}
