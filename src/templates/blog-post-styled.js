import styled from 'styled-components';
import { breakpoints } from '../config';

export const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 47, 75, 0.5),
    rgba(27, 9, 93, 0.5)
  );
  background-size: cover;

  @media (min-width: ${breakpoints.medium}px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media (min-width: ${breakpoints.large}px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  text-shadow: 0 0 5px rgba(24, 51, 150, 0.5);
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.3;

  @media (min-width: ${breakpoints.medium}px) {
    font-size: 2rem;
    line-height: 1.5;
  }

  @media (min-width: ${breakpoints.large}px) {
    font-size: 3rem;
  }
`;

export const Tagline = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.125rem;
  line-height: 1.3;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-weight: 400;

  @media (min-width: ${breakpoints.large}px) {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  @media (min-width: ${breakpoints.large}px) {
    font-size: 2rem;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1;
  color: rgba(255, 255, 255, 0.8);
`;

export const Avatar = styled.img`
  margin-right: 1rem;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #fff; /* smoothen rounded border */
  width: 42px;
  height: 42px;
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
  }
`;

export const MetadataItem = styled.div`
  margin-left: 0.5rem;
  font-size: 0.9rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.8);

  @media (min-width: ${breakpoints.medium}px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &:not(:last-child) {
    padding-bottom: 2rem;

    @media (min-width: ${breakpoints.medium}px) {
      padding-bottom: 0;
    }
  }
`;

export const MetadataContent = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;
