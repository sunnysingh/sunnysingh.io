import styled from 'styled-components';
import { breakpoints } from '../../config';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  padding-top: 4rem;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
  }
`;

export const Text = styled.p`
  margin-left: 25px;
  text-indent: -32px;
  font-size: 1.5rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Avatar = styled.img`
  margin-bottom: 2rem;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #fff; /* smoothen rounded border */

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;
