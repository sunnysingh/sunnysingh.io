import React, { Fragment } from 'react';
import Script from 'react-load-script';

export default function CodeFund() {
  return (
    <Fragment>
      <div id="codefund" style={{ minHeight: 130 }} />
      <Script url="https://codefund.app/properties/153/funder.js" />
    </Fragment>
  );
}
