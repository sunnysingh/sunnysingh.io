import styled from 'styled-components';
import { breakpoints } from '../config';

const Container = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: ${breakpoints.large}px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export default Container;
