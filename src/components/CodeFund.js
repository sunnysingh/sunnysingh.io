import React from 'react';
import Script from 'react-load-script';

export default function CodeFund() {
  return [
    <div id="codefund" />,
    <Script url="https://codefund.app/properties/153/funder.js" />,
  ];
}
