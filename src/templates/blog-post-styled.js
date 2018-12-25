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
  font-family: 'PT Sans', sans-serif;
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
  font-family: 'PT Sans', sans-serif;
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
  line-height: 1;
  color: rgba(255, 255, 255, 0.65);

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

export const ArticleContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 990px; /* optimize for 75 character line length */
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.03em;

  @media (min-width: ${breakpoints.medium}px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    font-size: 1.4rem;
    line-height: 1.8;
  }

  & > div > p:not(:last-child),
  & > div > ul:not(:last-child),
  & > div > ol:not(:last-child),
  & > div > blockquote:not(:last-child),
  & > div > hr:not(:last-child),
  & > div > pre:not(:last-child),
  & .mediaEmbed:not(:last-child) {
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.medium}px) {
      margin-bottom: 2rem;
    }
  }

  & twitter-widget:not(:last-child) {
    margin-bottom: 1rem !important; /* override twitter styles */

    @media (min-width: ${breakpoints.medium}px) {
      margin-bottom: 2rem !important; /* override twitter styles */
    }
  }

  & twitter-widget {
    margin-top: 0 !important; /* override twitter styles */
  }

  & > div > p,
  & > div > ul,
  & > div > ol {
    font-family: 'PT Sans', sans-serif;
  }

  & > div > blockquote p {
    font-family: 'Georgia', serif;
  }

  & > div > blockquote cite {
    display: block;
  }

  & > div > hr {
    display: block;
    text-align: center;
    overflow: visible;
    border: none;

    &::before {
      content: '...';
      display: inline-block;
      position: relative;
      top: -0.375rem;
      font-size: 1.5rem;
      letter-spacing: 1rem;
    }
  }

  & > div > h2,
  & > div > h3,
  & > div > h4,
  & > div > h5,
  & > div > h6 {
    margin-bottom: 1rem;
    padding-top: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    line-height: 1.5;

    @media (min-width: ${breakpoints.medium}px) {
      margin-bottom: 2rem;
      padding-top: 1rem;
      line-height: 1.8;
    }
  }

  /* Dropcap */
  & > div > p:first-child::first-letter {
    float: left;
    padding-right: 0.25rem;
    margin-right: 0.25rem;
    font-family: monospace;
    font-size: 5.5rem;
    line-height: 0.85;

    @media (min-width: ${breakpoints.medium}px) {
      font-size: 6.7rem;
    }
  }

  & ul,
  & ol {
    margin-left: 1rem;
    list-style: initial;

    @media (min-width: ${breakpoints.medium}px) {
      margin-left: 1.5rem;
    }
  }

  & li {
    padding-left: 1rem;
  }

  & li:not(:last-child) {
    margin-bottom: 1rem;
  }

  /* Media extends past width of text on large screens */
  & figure,
  & pre,
  & .mediaEmbed {
    @media (min-width: ${breakpoints.large}px) {
      width: 110% !important; /* Override inline style */
      margin-left: -5%;
    }
  }

  & .youtubeEmbed {
    border-radius: 10px;
    overflow: hidden;
  }

  & figure {
    img {
      border-radius: 10px;
    }
  }

  & figcaption {
    padding-top: 0.5rem;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.375;
    color: rgba(255, 255, 255, 0.75);
  }

  & pre {
    border-radius: 10px;
  }

  & h2 {
    font-size: 1.5rem;

    @media (min-width: ${breakpoints.medium}px) {
      font-size: 2rem;
    }
  }

  & h3 {
    font-size: 1.4rem;

    @media (min-width: ${breakpoints.medium}px) {
      font-size: 1.75rem;
    }
  }

  & h4 {
    font-size: 1.2rem;

    @media (min-width: ${breakpoints.medium}px) {
      font-size: 1.5rem;
    }
  }

  & h5 {
    font-size: 1.2rem;

    @media (min-width: ${breakpoints.medium}px) {
      font-size: 1.4rem;
    }
  }

  & h6 {
    font-size: 1.2rem;

    @media (min-width: ${breakpoints.medium}px) {
      font-size: 1.4rem;
    }
  }
`;

export const ArticleFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Comments = styled.div`
  margin-bottom: 8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
`;

export const ShowCommentsButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 1rem;
  background-color: transparent;
  text-decoration: none;
  font-size: 1.125rem;
  color: #d1d1e4;
  transition-property: transform, color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;
