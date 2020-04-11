---
title: Common Metadata
tagline: A list of common meta and link tags and their usage
date: 2015-04-10 12:15
tags: coding, html
---

For every new project, you have to consider the metadata that will go inside of your `<head>` tag. The main ones that you normally care about are the title and app icon (typically known as the favicon), but there are also some obscure ones that you need to consider for security and/or SEO purposes. For these reasons, I wanted to post this as a resource to myself and others.

## Charset

```html
<meta charset="UTF-8" />
```

This declares the character set of the page, and should be put early in the `<head>`. UTF-8 is a good default.

## X-UA-Compatible

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1" />
```

This is an interesting tag that is specific to IE users. Basically, it tells IE to render the page in the highest mode (meaning no compatibility mode). The `chrome=1` part also enables Google Chrome Frame for those that use it. Chrome Frame is unfortunately [retired now](http://blog.chromium.org/2013/06/retiring-chrome-frame.html) but is still a good idea to enable in case some users still have it installed.

Declare this tag early as well, probably right after the charset.

## Title

```html
<title>My Web App - Sign In</title>
```

This is what appears in the browser tab, search engine results, etc.

## Application Name

```html
<meta name="application-name" content="My Web App" />
```

Similar to `<title>`, but is specific to the actual name of the website or web app (versus the page name). This info is typically used when pinning the site or adding to the homescreen.

## Application URL

```html
<meta name="application-url" content="/" />
```

Speaking of pinning and adding to homescreens, you'll want to set the application URL to the "homepage" or root.

## Caronical URL

```html
<link rel="canonical" href="http://mywebapp.com/this-is-the-permalink/" />
```

This tag is important in preventing [duplicate content](https://support.google.com/webmasters/answer/66359?hl=en) issues in search engines. Put simply, it is the permanent link (permalink) for the current page, even if it being served under a different URL.

## Description

```html
<meta
  name="description"
  content="My Web App is the coolest app that lets you do cool things."
/>
```

The description tag is mainly for SEO purposes, but social media sites use this as the link preview text when users share the page.

## Robots

```html
<meta name="robots" content="noodp" />
```

This is a very obscure tag, especially when you try to make sense of the "noodp" part. Put simply, this tells search engines to _not_ retrieve webpage info from [DMOZ](http://www.dmoz.org/), which is the Open Directory Project. It takes DMOZ a couple days to re-crawl your page, and sometimes the info isn't as accurate as you want it to be.

You might be aware of another variant of this tag that has "noodp,noydir". The "noydir" part disables listings from Yahoo! Directory, but it has been shut down so I see no reason to keep including it.

## Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

If you want to make your website responsive, this is the standard tag to use. It will render your page at the device's width and set the zoom level to 100%. Be aware of code snippets that have `user-scalable=no` because even if your page is responsive, you still want to allow users to zoom in if they can't read certain text or want to see an image closer.

## Icon

```html
<link rel="icon" sizes="192x192" href="/icon-192.png" />
<link rel="icon" sizes="128x128" href="/icon-128.png" />
<link rel="apple-touch-icon" sizes="128x128" href="/icon-128.png" />
<link rel="apple-touch-icon-precomposed" sizes="128x128" href="/icon-128.png" />
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
```

A simple 16x16 favicon is no longer enough due to all the different platforms and mobile OS's. The code above is the most basic if you want to provide a nice high-resolution icon for desktop browsers and Android/iOS. However, you should try this [Favicon Generator](http://realfavicongenerator.net/) to create icon files and the proper tags for desktop browsers, Windows 8 tiles, Windows taskbar, Android, and iOS.

Make sure that edit as necessary the `/icon-*` and `/favicon.ico` paths depending on where you are storing the icon files.

## Image Source

```html
<link rel="image_src" href="image.png" />
```

Similar to icon, except the scenario here is that you want to provide a specific image for the current page. This is useful for blogs, video sites, etc. and most social media sites will use this when displaying shared web pages.

Make sure that you edit as necessary the `image.png` path depending on where you are storing the image.

## Theme Color

```html
<meta name="theme-color" content="black" />
```

Supporting browsers (e.g. Chrome for Android) can match their toolbars to a valid CSS color that you set.

## Extras

I left some metadata out of this post because they are big enough on their own to be separate articles. I don't believe that they are any less important, but do require some extra reading into.

### Search Engines

- [Schema.org](http://schema.org/) - Also used by Google+
- [Structured Data Markup](https://developers.google.com/structured-data/) - Provide more functional search results, Google Now cards, etc.

### Social Media

- [The Open Graph protocol](http://ogp.me/) - Used by Facebook and Google+
- [Twitter Cards](https://dev.twitter.com/cards/overview)

### Other

- [OpenSearch](http://www.hanselman.com/blog/OnTheImportanceOfOpenSearch.aspx) - Explanation and tutorial by Scott Hanselman
- [humans.txt](http://humanstxt.org/) - Provide info about site's team, contributors, tech, etc.
- [Rel-Payment](http://relpayment.com/) - Provide payment info

I did a lot of research to put this post together, but if I missed anything or made a mistake, let me know! On that note, you are also free to shame me for not including some of the metadata from this post on my own projects.
