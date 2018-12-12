import styled from 'styled-components';
import { Link } from 'gatsby';
import { breakpoints } from '../config';

export const Intro = styled.div`
  margin-bottom: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.large}px) {
    flex-direction: row;
  }
`;

export const IntroColumn = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (min-width: ${breakpoints.large}px) {
    width: 33%;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const AvatarContainer = styled.div`
  height: 180px;
  text-align: center;

  img {
    width: 180px;
    height: 180px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #fff; /* smoothen rounded border */
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.8rem;
  color: #fff;
  text-align: center;

  @media (min-width: ${breakpoints.large}px) {
    text-align: left;
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.4rem;

  text-align: center;

  @media (min-width: ${breakpoints.large}px) {
    text-align: left;
  }
`;

export const SocialGrid = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${breakpoints.large}px) {
    margin-top: 1.5rem;
  }

  > a {
    &:not(:first-child) {
      margin-left: 1.5rem;
    }

    @media (min-width: ${breakpoints.large}px) {
      margin-left: 1.5rem;
    }
  }
`;

export const Bio = styled.div`
  display: table; /* center block while keeping the text left aligned */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

export const BioText = styled.p`
  margin-bottom: 2rem;
  margin-left: 36px;
  padding-left: 1rem;
  line-height: 1.5;
  text-indent: -36px;
`;

export const CurrentWork = styled.p`
  margin-top: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  line-height: 1.5;
  background-color: #15151c;

  @media (min-width: ${breakpoints.medium}px) {
    border-radius: 10px;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    margin-right: 1rem;
  }
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 1rem;
  text-decoration: none;
`;
