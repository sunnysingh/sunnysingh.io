import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { breakpoints } from '../../config';

// Prevent invalid HTML attributes getting set from props.
const Link = ({ isFirst, isLast, ...props }) => <GatsbyLink {...props} />;

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Logo = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: ${breakpoints.large}px) {
    order: 2;
    width: auto;
  }

  & svg {
    width: 75px;
    height: 75px;

    @media (min-width: ${breakpoints.large}px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  order: 2;

  @media (min-width: ${breakpoints.large}px) {
    margin-left: 0;
    order: 1;
  }

  /* Second nav */
  ${p =>
    p.isSecondary &&
    css`
      @media (min-width: ${breakpoints.large}px) {
        margin-left: auto;
        margin-right: 0;
      }

      @media (min-width: ${breakpoints.large}px) {
        order: 3;
      }
    `};
`;

export const NavLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.315rem;
  text-decoration: none;

  &:hover,
  &:focus {
    outline-width: 0;

    & span {
      padding-bottom: 5px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    }
  }

  @media (min-width: ${breakpoints.large}px) {
    margin-bottom: 0;
    padding-left: 4rem;
    padding-right: 4rem;
    font-size: 1.5rem;
  }

  ${p =>
    p.isFirst &&
    css`
      @media (min-width: ${breakpoints.large}px) {
        padding-left: 0;
      }
    `}

  ${p =>
    p.isLast &&
    css`
      @media (min-width: ${breakpoints.large}px) {
        padding-right: 0;
      }
    `}

  /* Take advantage of ARIA attribute that is added automatically by Gatsby. */
  &[aria-current='page'] {
    color: #fff;
    pointer-events: none;

    &:focus {
      outline-width: 3px;
    }

    & span {
      padding-bottom: 5px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.35);
    }
  }
`;
