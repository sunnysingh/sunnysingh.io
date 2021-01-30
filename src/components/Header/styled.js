import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { breakpoints } from '../../config';

// Prevent invalid HTML attributes getting set from props.
const Link = ({ isFirst, isLast, swapToSecondPositionOnSmall, ...props }) => (
  <GatsbyLink {...props} />
);

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media (min-width: ${breakpoints.medium}px) {
    margin-left: 0;
    margin-right: 0;
    flex-shrink: 0;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;

  @media (min-width: ${breakpoints.medium}px) {
    margin-top: 0;
    margin-bottom: 1rem;
    order: 2;
    width: 33%;
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
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
    margin-left: 0;
    width: 33%;
  }

  /* Second nav */
  ${(props) =>
    props.isSecondary &&
    css`
      text-align: right;

      @media (min-width: ${breakpoints.medium}px) {
        margin-left: auto;
        margin-right: 0;
        order: 3;
      }
    `};
`;

export const NavLink = styled(Link)`
  display: inline-block;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.125rem;
  text-decoration: none;

  ${(props) =>
    props.swapToSecondPositionOnSmall &&
    css`
      order: 2;
    `}

  &:hover,
  &:focus {
    outline-width: 0;

    & span {
      padding-bottom: 5px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    }
  }

  @media (min-width: ${breakpoints.medium}px) {
    order: 1;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    font-size: 1.3125rem;
  }

  @media (min-width: ${breakpoints.large}px) {
    padding-left: 4rem;
    padding-right: 4rem;
    font-size: 1.5rem;
  }

  ${(p) =>
    p.isFirst &&
    css`
      @media (min-width: ${breakpoints.large}px) {
        padding-left: 0;
      }
    `}

  ${(p) =>
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
