---
title: Share Buttons
tagline: I discuss the issues with share button scripts and a project that solves them
date: 2015-03-01 14:06
tags: coding
---

<Alert>The project mentioned in this article is now called <AlertLink href="https://socialshar.es/">socialshares</AlertLink>.</Alert>

Sharing has become a ubiquitous function of the web. While it is arguable that we really don't need them (since browser extensions, mobile apps, and copy-and-paste exist), developers love them for the marketing aspect and as an incentive for users to share their content. This would be all be great if only sharing buttons did not slow down pages, track users, and/or inhibit a consistent design.<!--more-->

## The Issues: Page bloat, privacy, and design!

Let me elaborate. The issues with share buttons or scripts have been brought up before by [Stephen Morley](http://code.stephenmorley.org/javascript/social-sharing-that-respects-visitor-privacy/) and [Jonathan Suh](https://jonsuh.com/blog/social-share-links/), and I share the same opinion with them (no pun intended).

First, the page bloat. If you add a Tweet and Facebook Share button to your site, you end up loading two separate JavaScript files (that along with them load more resources). These resources reside on two external domains, which simply end up slowing down your page. You can argue that these domains are CDNs and load really fast (along with probably being cached), but it's still a fact that your page will be issuing multiple HTTP requests. It's extra kilobytes that most pages really don't need, and you can look at the stats or your browser's developer tools to see the impact for yourself.

The second problem is privacy. While I personally don't care, many other users simply don't want to be tracked across the web (for advertising or even analytical purposes). You also have to consider your site's own privacy policy when loading these share scripts, because the data is easily accessible by social networks. It really eases thing when you don't load third-party scripts.

Finally, adding multiple share buttons means they may not be consistent with each other, or your site's design. This can be a small or big issue, but I find it really ugly when I see a cluster of social buttons that ruin a good-looking site.

## Introducing Share Buttons

This is where I shamelessly promote my [Share Buttons](https://github.com/sunnysingh/share-buttons) project. What I've done is I made my own HTML/CSS buttons that you can simply drop-in to your project. You can add the same share popups as traditional share scripts through JS, and it's completely up to you on how you want to include the CSS and JS (both of which you are free to customize). Share Buttons solves all the issues that I've mentioned: you're not loading multiple files from external domains, your users' data stays on your own site, and the design is consistent across each button (and is easily changed via CSS if you're not happy with it).

### Share URLs

The buttons work with or without JS, thanks to share URLs. These URLs are similar to APIs in the sense that you add parameters in the share URLs depending on what you want to share. Some services provide multiple parameters, such as `via` and `related` for Twitter, but normally you just need the `url` parameter. I have all the available URL formats based on what icons Share Buttons provides in the [markup docs](https://github.com/sunnysingh/share-buttons/blob/master/README.md#markup). Go read Jonathan's article if you want all the specifics, which I'll eventually add to the docs.

### Demo

If you want to check out the demo, [here it is](http://codepen.io/sunnysingh/pen/OPxbgq):

<CodePenEmbed id="OPxbgq" caption="Share Buttons Demo" />

The icons are simply a `@font-face` icon set from [IcoMoon](https://icomoon.io/), but are also optional. The markup is really simple and I've written the CSS with Less so you can `@import` the source file in your own stylesheet.

### Downsides

Unfortunately, simply using URLs means you lose out on certain features of traditional share scripts. The main downside is you don't get share counts, which can still technically be done through APIs (although would require more work). However, the benefits of a faster page load and having the buttons look however you want (whether you customize Share Buttons or roll your own solution) outweigh these downsides.

I hope to improve this project over time, but this is a good start.

## Share Responsibly

That's it. I've neglected to provide a tutorial here because I think the docs are pretty straightforward, but I am free to answer any questions. The [project is on GitHub](https://github.com/sunnysingh/share-buttons) so that means you can help me fix bugs, add features, and submit issues. I've already noticed a display issue on Chrome for Android, so I hope to fix that sometime soon.

You should also notice that I'm [dogfooding](http://blog.codinghorror.com/the-difficulty-of-dogfooding/) right below this article, so share away!
