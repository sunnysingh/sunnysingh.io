import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Container from '../Container';
import { AccessibleText } from '../ScreenReader';
import Logo from '../Logo';
import { HeaderLayout, Nav, NavLink } from './styled';

export default function Header({ currentPath }) {
  return (
    <header role="banner">
      <Container>
        <HeaderLayout>
          <Nav>
            <NavLink to="/">
              <span>About</span>
            </NavLink>
            <NavLink to="/projects">
              <span>Projects</span>
            </NavLink>
          </Nav>
          {currentPath === '/' ? (
            <Fragment>
              <Logo size={100} />
              <AccessibleText>Sunny Singh logo</AccessibleText>
            </Fragment>
          ) : (
            <Link to="/" title="Go to home page">
              <Logo size={100} />
              <AccessibleText>Sunny Singh logo</AccessibleText>
            </Link>
          )}
          <Nav secondary>
            <NavLink to="/blog">
              <span>Articles</span>
            </NavLink>
            <NavLink as="a" href="https://sunnycommutes.fm/">
              Podcast
            </NavLink>
          </Nav>
        </HeaderLayout>
      </Container>
    </header>
  );
}
