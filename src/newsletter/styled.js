import styled from 'styled-components';
import { breakpoints } from '../config';
import { swingIn } from '../utils/animation';

export const Header = styled.div`
  ${swingIn()}

  position: relative;
  margin-bottom: 4rem;
  padding-top: 4rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.large}px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    flex-direction: row;
  }
`;

export const Divider = styled.div`
  position: absolute;
  top: 3rem;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  height: calc(100% - 2rem);
  background: #111112;
  z-index: -1;
  transform: skewY(-4deg);
  transform-origin: top left;

  @media (min-width: ${breakpoints.large}px) {
    top: 6rem;
    height: calc(100% - 5rem);
  }
`;

export const HeaderArt = styled.div`
  font-size: 14rem; /* image size */

  @media (min-width: ${breakpoints.large}px) {
    font-size: 24rem; /* image size */
  }

  & svg {
    display: block;
  }
`;

export const HeaderContent = styled.div`
  @media (min-width: ${breakpoints.large}px) {
    padding-left: 4rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #ef7086;
  text-align: left;

  @media (min-width: ${breakpoints.large}px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: left;

  @media (min-width: ${breakpoints.large}px) {
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

export const ActionLink = styled.a`
  padding-top: 1rem;
  padding-bottom: 5px;
  border-bottom: 1px dashed;
  font-size: 1.8rem;
  text-decoration: none;

  @media (min-width: ${breakpoints.large}px) {
    font-size: 2rem;
  }
`;

export const Bio = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 56rem;
`;

export const BioContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.large}px) {
    flex-direction: row;
  }
`;

export const BioTitle = styled.h2`
  margin-bottom: 2rem;
  margin-left: 2rem;
  min-width: 80px;
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: ${breakpoints.large}px) {
    margin-right: 2rem;
    font-size: 2rem;
  }
`;

export const BioText = styled.p`
  margin-left: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;

  @media (min-width: ${breakpoints.large}px) {
    font-size: 1.2rem;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const BioAvatar = styled.div`
  position: relative;
  top: -2rem;
  align-self: flex-start;

  @media (min-width: ${breakpoints.large}px) {
    top: -4rem;
    margin-right: -2rem;
  }

  & img {
    border-radius: 50%;
    width: 180px;
    height: auto;
  }

  @media (min-width: ${breakpoints.large}px) {
    width: 200px;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  margin-left: 2rem;
  margin-right: 2rem;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 56rem;
  }
`;

export const EmailSection = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 25rem;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 0;
    width: 80%;
  }
`;

export const SubmitSection = styled.div`
  @media (min-width: ${breakpoints.medium}px) {
    margin-left: 1rem;
  }
`;
