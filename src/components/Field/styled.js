import styled, { css } from 'styled-components';

export const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid;
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.1);
  color: #d1d1e4;
  font-size: 1.125rem;
  text-decoration: none;
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  ${props =>
    props.as === 'textarea' &&
    css`
      min-height: 100px;
      resize: vertical;
    `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.5);
    outline: none;
  }

  &::placeholder {
    color: #d1d1e4;
    font-size: 1.125rem;
  }

  &:focus::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
