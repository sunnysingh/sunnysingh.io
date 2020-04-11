import React from 'react';
import styled from 'styled-components';
import { Twitter } from 'react-feather';
import truncate from 'lodash/truncate';
import { breakpoints } from '../../config';
import { parseChildrenStrings } from '../../utils/component';

const TWITTER_USERNAME = 'sunnysinghio';
const NEWLINES_REGEXP = /(?:\r\n|\r|\n)/g;

const Blockquote = styled.blockquote`
  position: relative;
  padding-top: 5rem;
  padding-bottom: 2rem;

  @media (min-width: ${breakpoints.medium}px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  &::before {
    content: open-quote;
    quotes: '\\201c''\\201d';
    position: absolute;
    top: 0;
    left: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.25);

    @media (min-width: ${breakpoints.medium}px) {
      top: 0.5rem;
      left: 2rem;
    }
  }
`;

const TweetButton = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  text-decoration: none;
  text-indent: 0;
  font-size: 1.125rem;
  color: #1da1f2;
  transition-property: transform, color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

const TweetButtonText = styled.span`
  padding-left: 0.5rem;
`;

export default function MdxBlockquote({ children }) {
  const handleTweetButtonClick = (event) => {
    const windowOptions =
      'scrollbars=yes,resizable=yes,toolbar=no,location=yes,';
    const width = 550;
    const height = 420;
    const top =
      screen.height > height ? Math.round(screen.height / 2 - height / 2) : 0;
    const left = Math.round(screen.width / 2 - width / 2);

    const rawQuote = parseChildrenStrings(children);
    const quote = truncate(rawQuote.replace(NEWLINES_REGEXP, ' '), {
      length: 217,
    });
    const shareText = encodeURIComponent(
      `"${quote}"\n\n${window.location.href}\n\ncc @${TWITTER_USERNAME}`
    );

    const url = `https://twitter.com/intent/tweet?text=${shareText}&related=${TWITTER_USERNAME}`;

    event.preventDefault();

    window.open(
      url,
      'twitterIntent',
      `${windowOptions},width=${width},height=${height},top=${top},left=${left}`
    );
  };

  return (
    <Blockquote>
      {children}
      <TweetButton href="#0" onClick={handleTweetButtonClick}>
        <Twitter size={18} />
        <TweetButtonText>Share</TweetButtonText>
      </TweetButton>
    </Blockquote>
  );
}
