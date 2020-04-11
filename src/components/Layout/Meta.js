import React from 'react';
import { Helmet } from 'react-helmet';
import { trimTrailingSlash } from '../../utils/url';
import {
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  THEME_COLOR,
  DOMAIN,
  FACEBOOK_APP_ID,
  CACHE_BUSTER,
} from './constants';

export default function Meta({
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  baseUrl,
  currentPath,
  noSearchIndex,
}) {
  const canonicalUrl =
    currentPath === '/'
      ? `${baseUrl}/`
      : trimTrailingSlash(`${baseUrl}${currentPath}`);

  const defaultImage = `${baseUrl}/meta.jpg?v=${CACHE_BUSTER}`;
  const defaultWidth = 1200;
  const defaultHeight = 1200;

  return (
    <Helmet>
      {/* Language for screen readers */}
      <html lang="en" prefix="og: http://ogp.me/ns#" />

      {/* Title for browser and search engines */}
      <title>{title ? `${title} | ${DOMAIN}` : DEFAULT_TITLE}</title>

      {/* DNS Prefetch for retrieving resources faster */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Icons for browsers and when pinning to home screens */}
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

      {/* RSS discovery links for readers and crawlers */}
      <link
        title="Blog"
        rel="alternate"
        type="application/rss+xml"
        href="/rss.xml"
      />
      <link
        title="Newsletter"
        rel="alternate"
        type="application/rss+xml"
        href="https://buttondown.email/sunnysingh/rss"
      />

      {/* App Name for pinning to home screen */}
      <meta name="apple-mobile-web-app-title" content={DOMAIN} />
      <meta name="application-name" content={DOMAIN} />

      {/* Disable crawling for search engines if specified */}
      {noSearchIndex && <meta name="robots" content="noindex" />}

      {/* Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:app_id" content={FACEBOOK_APP_ID} />
      <meta property="twitter:card" content="summary_large_image " />

      {/* Title for social media */}
      <meta property="og:title" content={title || DEFAULT_TITLE} />
      <meta property="twitter:title" content={title || DEFAULT_TITLE} />

      {/* Theme Color for customizing browser window */}
      <meta name="msapplication-TileColor" content={THEME_COLOR} />
      <meta name="theme-color" content={THEME_COLOR} />

      {/* Description for search engines and social media */}
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta
        property="og:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta
        property="twitter:description"
        content={description || DEFAULT_DESCRIPTION}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Images */}
      <meta
        property="og:image"
        content={image ? `${baseUrl}${image}` : defaultImage}
      />
      <meta property="og:image:width" content={imageWidth || defaultWidth} />
      <meta property="og:image:height" content={imageHeight || defaultHeight} />
      <meta
        property="twitter:image"
        content={image ? `${baseUrl}${image}` : defaultImage}
      />
    </Helmet>
  );
}
