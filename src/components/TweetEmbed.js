import React from 'react';

export default function TweetEmbed({ children, username, id }) {
  return (
    <blockquote
      class="twitter-tweet"
      data-theme="dark"
      data-conversation="none"
    >
      <p lang="en" dir="ltr">
        {children}
      </p>
      ―{' '}
      <a href={`https://twitter.com/${username}/status/${id}`}>
        Tweet by @{username}
      </a>
    </blockquote>
  );
}
