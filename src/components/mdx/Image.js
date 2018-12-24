import React from 'react';

export default function Image({ children }) {
  console.log(children);
  return (
    <figure>
      {children}
      <figcaption>Test</figcaption>
    </figure>
  );
}
