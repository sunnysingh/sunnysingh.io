import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Nav = styled.nav`
  margin-right: auto;

  ${p =>
    p.secondary &&
    css`
      margin-left: auto;
      margin-right: 0;
    `};
`;

export const NavLink = styled(Link)`
  padding-left: 4rem;
  padding-right: 4rem;
  font-size: 1.5rem;
  text-decoration: none;

  ${p =>
    p.first &&
    css`
      padding-left: 0;
    `}

  ${p =>
    p.last &&
    css`
      padding-right: 0;
    `}

  /* Take advantage of ARIA attribute that is added automatically by Gatsby. */
  &[aria-current='page'] {
    color: #fff;
    pointer-events: none;

    & span {
      padding-bottom: 5px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.35);
    }
  }
`;
