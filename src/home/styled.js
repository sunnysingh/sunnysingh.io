import styled from 'styled-components';
import { Link } from 'gatsby';

export const Intro = styled.div`
  margin-bottom: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroColumn = styled.div`
  width: 33%;
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
`;

export const SubHeading = styled.h2`
  font-size: 1.4rem;
`;

export const SocialGrid = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;

  > a {
    margin-left: 1.5rem;
  }
`;

export const Bio = styled.div`
  display: table; /* center block while keeping the text left aligned */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  font-size: 1.4rem;

  > p {
    margin-bottom: 2rem;
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
