---
title: New Design, Domain, and Year
tagline: I give my year in review and talk about the new site changes
date: 2016-01-02 12:00
tags: general
---

A new year is upon us once more, so I want to reflect on the previous year and also announce the new changes that I have prepared for 2016.

## 2015 In Review

I was part of a good number of projects last year, and here's the list:

- [Digital Bounds redesign](http://digitalbounds.com/2015/03/15/new-fresh-design-and-look/): A Ninjality client project. Gained some more experience in WordPress theme development and responsive images. Also I love seeing Digital Bounds grow and even [wrote an article](http://digitalbounds.com/2015/07/02/why-you-should-wait-before-buying-a-new-tech-product/) for them.
- [Server restructure](https://ninjality.com/blog/server-restructure-nginx-hhvm): The DigitalOcean server that I host all types of projects and sites on was getting bloated, so it was nice to clean and speed things up with nginx and HHVM.
- [socialshares](https://socialshar.es/): A rebranding of my old open source project. It's funny how small projects like this can end up taking a lot of work to manage. Lookout for a v2 this year.
- [Ninjality redesign](https://ninjality.com/blog/streamlining-our-design): Probably my favorite redesign so far. It was a good time for us to rebrand.
- [CodeBee beta release](https://codebee.io/): My biggest project to date, and my first experience with streaming code development on Livecoding.tv. The user reaction has been good, and we even got featured on [BetaList](http://betalist.com/startups/codebee) and [Launching.io](http://www.launching.io/project/codebee/).

## Rebranding Myself

"New year, new me." Well, a new design and domain anyway. The last time that I redesigned my personal site was [2 years ago](https://sunnysingh.io/blog/site-update-v2). I think the main reason that I haven't changed anything besides for lack of time is that I'm actually still a fan of the old design, but it is definitely due for a refresh. I also want to mention the domain change: I moved `sunnyis.me` to `sunnysingh.io` because I wanted a "less hacky" domain, so why not my full name with the popular "input/output" TLD?

### The Design

![Screenshot of old design compared with new one](redesign-2016-comparison.png 'Old design on left, New design on right')

As I said, the new design is reminiscent of my old one. To make it feel more modern, I flattened the header and gave more spacing to content. Also, I didn't use a UI/front-end framework again because I wanted to demonstrate my skills and have some fun with flexbox. Since grids are still fairly complex, I did use [Lost](https://github.com/corysimmons/lost) which is grid framework built on PostCSS and has flexbox support.

The logo was designed in [Sketch](https://www.sketchapp.com/) and the icons generated in [IcoMoon](https://icomoon.io/). Both are SVGs so bring on your 4K displays :grin:.

### Static Site

My old site was built on WordPress because that is what I was familiar with and I wanted to have a blog. Since I recently learned about static sites (yes, I'm late on this train) and their blogging capabilities, I decided to try it out. The big benefit is not having any reliance on a server-side language, so there is a huge performance and security boost in just serving static HTML files. CMS's still have their place but not on this site that I manage myself and where I don't mind messing with build scripts and all that.

So how does it work? I still get to use templates and whatever build steps I want in developing the theme because the final HTML is generated with [Metalsmith](http://www.metalsmith.io/). I experimented with other static site generators but I chose Metalsmith because it's written in JavaScript so all I need to have installed is Node. It also looked very simple since everything is done through plugins.

There are some "gotchyas" when working with a static site, though. Dynamic stuff like comments, forms, or search aren't possible to do server-side, but obviously can be done through JS. The comments were simple to do since I already use [Disqus](https://disqus.com/). For the contact form, I moved to a new service called [Formspree](http://formspree.io/). The search was more challenging since all the hosted solutions are paid or aren't customizable enough. I went with a library called [lunr.js](http://lunrjs.com/) which indexes your site and generates a searchable JSON.

As far as hosting goes, I originally went with [GitHub Pages](https://pages.github.com/) but I ran into an issue with the way that GitHub routes static files. Since I generate a `blog.html` page, and my articles are within a blog folder, GitHub redirects to `/blog/` expecting an index file in there. Really annoying, but thankfully when I tried serving it on [Surge](https://surge.sh/) it worked perfectly. I also really like how much easier it is to push a project with them.

### Compiling Assets

A lot of new stuff for me here as well. [PostCSS](https://github.com/postcss/postcss) has been growing in popularity recently, and I think it will continue this year. I also happen to really like the modularity of it over pre-processors. There's a good feeling of going back to just writing regular CSS, since most PostCSS plugins just add custom properties or just extra functionality to current ones. Here's the ones I currently use:

- [cssnext](http://cssnext.io/)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-nested](https://github.com/postcss/postcss-nested)
- [postcss-assets](https://github.com/assetsjs/postcss-assets)
- [Rucksack](https://simplaio.github.io/rucksack/)
- [Font Magician](https://github.com/jonathantneal/postcss-font-magician)
- [cssnano](http://cssnano.co/)

For the JavaScript side of things, I'm using [webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/). I completely dropped jQuery in favor of native JavaScript features and smaller libraries. What I learned is that the DOM API isn't so bad thanks to `querySelectorAll()`, and Babel helps in polyfilling a lot of features as well as introducing new ES2015 ones like imports.

All of this is still part of the Metalsmith pipeline by the way, so no extra Gulp or Grunt setups here.

### Ajax Everywhere

You might notice how clicking between pages doesn't actually reload the page; you get a progress loader at the top and the content section is loaded in via Ajax. This is something that a lot of sites like Medium and YouTube are doing, and I believe that it creates a really nice user experience in terms of fluid and speedy navigation. I directly used the browser history API (pushState) which was actually fairly straightforward. I also figure that static sites are the best use case for this sorta thing, and was fun to experiment with.

### Articles

There isn't a huge change here aside from me writing articles locally now, and pushing it through a Git commit and deploy (this is more fun than a nuisance for me). I'm still writing articles in Markdown, and am trying out an editor called [Caret](http://caret.io/).

As far as content goes, things will change due to CodeBee. I plan on publishing developer tutorials on there, while having updates and other topics here. I also definitely want to write more often in 2016, but I say that every year so we'll see.

## TL;DR

I worked on many projects in 2015 and rebranded my personal site with a new design and domain. I experimented with a lot of new tools in this redesign and wanted to share what I learned. Also, my source code is in the open [on GitHub](https://github.com/sunnysingh/web).

I plan on continuing to work on more projects in 2016 and to make it another good year.
