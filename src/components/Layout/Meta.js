import React from 'react';
import Helmet from 'react-helmet';
import {
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  THEME_COLOR,
  DOMAIN,
  CACHE_BUSTER,
} from './constants';

export default function Meta({ title, description, image, baseUrl }) {
  const defaultImage = `${baseUrl}/meta.jpg?v=${CACHE_BUSTER}`;
  return (
    <Helmet>
      <html lang="en" />
      <title>{title ? `${title} | Sunny Singh` : DEFAULT_TITLE}</title>
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/apple-touch-icon.png?v=${CACHE_BUSTER}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-32x32.png?v=${CACHE_BUSTER}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-16x16.png?v=${CACHE_BUSTER}`}
      />
      <link rel="manifest" href={`/site.webmanifest?v=${CACHE_BUSTER}`} />
      <link
        rel="mask-icon"
        href={`/safari-pinned-tab.svg?v=${CACHE_BUSTER}`}
        color={THEME_COLOR}
      />
      <link rel="shortcut icon" href={`/favicon.ico?v=${CACHE_BUSTER}`} />
      <meta name="apple-mobile-web-app-title" content={DOMAIN} />
      <meta name="application-name" content={DOMAIN} />
      <meta name="msapplication-TileColor" content={THEME_COLOR} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta property="og:type" content="website " />
      <meta
        property="og:image"
        content={image ? `${baseUrl}${image}` : defaultImage}
      />
      <meta property="twitter:card" content="summary_large_image " />
      <meta
        property="twitter:image"
        content={image ? `${baseUrl}${image}` : defaultImage}
      />
    </Helmet>
  );
}
