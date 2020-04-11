import styled, { css } from 'styled-components';
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
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(0, 102, 161, 1) 0%,
    rgba(0, 68, 108, 1) 90.1%
  );

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}

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
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 2rem;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-shadow: 0 0 2px rgba(24, 51, 150, 0.5);
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  text-transform: uppercase;
  color: white;

  @media (min-width: ${breakpoints.large}px) {
    font-size: 3rem;
  }
`;

export const Tagline = styled.h2`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'PT Sans', sans-serif;
  font-size: 1.3rem;
  line-height: 1.5;
  text-shadow: 0 0 2px rgba(24, 51, 150, 0.5);
  text-align: center;
  font-weight: 400;

  @media (min-width: ${breakpoints.large}px) {
    margin-bottom: 3rem;
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
  border: 2px solid rgba(255, 255, 255, 0.65);
  width: 32px;
  height: 32px;

  @media (min-width: ${breakpoints.medium}px) {
    width: 42px;
    height: 42px;
  }
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 2rem;
  }
`;

export const MetadataItem = styled.div`
  margin-left: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.8);

  & {
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
  & > div .gatsby-highlight:not(:last-child) pre,
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

  /* Media extends past width of text */
  & figure,
  & pre,
  & .mediaEmbed {
    width: calc(100% + 6rem) !important; /* Override inline style */
    margin-left: -3rem;

    @media (min-width: ${breakpoints.large}px) {
      width: 110% !important; /* Override inline style */
      margin-left: -5%;
    }
  }

  & .youtubeEmbed {
    @media (min-width: ${breakpoints.medium}px) {
      border-radius: 10px;
      overflow: hidden;
    }
  }

  & figure {
    img {
      @media (min-width: ${breakpoints.medium}px) {
        border-radius: 10px;
      }
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
    @media (min-width: ${breakpoints.medium}px) {
      border-radius: 10px;
    }
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

export const CommentsContainer = styled.div`
  margin-bottom: 8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
`;
