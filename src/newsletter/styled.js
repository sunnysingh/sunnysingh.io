import styled from 'styled-components';
import { breakpoints } from '../config';
import { swingIn } from '../utils/animation';

export const Header = styled.div`
  ${swingIn()}

  position: relative;
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.large}px) {
    padding-top: 4rem;
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
  font-size: 24rem; /* image size */

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
  font-size: 3rem;
  color: #ef7086;
  text-align: center;

  @media (min-width: ${breakpoints.large}px) {
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-align: center;

  @media (min-width: ${breakpoints.large}px) {
    text-align: left;
  }
`;

export const ActionLink = styled.a`
  padding-top: 1rem;
  padding-bottom: 5px;
  border-bottom: 1px dashed;
  font-size: 2rem;
  text-decoration: none;
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
`;

export const BioTitle = styled.h2`
  margin-right: 2rem;
  min-width: 80px;
  font-size: 2rem;
  font-weight: bold;
`;

export const BioText = styled.p`
  margin-left: 2rem;
  font-size: 1.2rem;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const BioAvatar = styled.div`
  position: relative;
  top: -4rem;
  align-self: flex-start;
  margin-right: -2rem;

  & img {
    border-radius: 50%;
    width: 200px;
    height: auto;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  margin-bottom: 8rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 37rem;
`;

export const EmailSection = styled.div`
  width: 80%;
`;

export const SubmitSection = styled.div`
  margin-left: 1rem;
`;
