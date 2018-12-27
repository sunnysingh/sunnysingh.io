import React from 'react';
import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 1em;
  background-color: transparent;
  text-decoration: none;
  color: #d1d1e4;
  transition-property: transform, color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  ${props =>
    props.size == 'large' &&
    css`
      font-size: 1.125rem;
    `}

  & svg:first-child {
    margin-left: 0.25rem;
  }

  & svg:last-child {
    margin-right: 0.25rem;
  }

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
