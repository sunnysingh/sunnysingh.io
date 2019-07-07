---
title: 'Traditional vs modern web development ⚔️'
tagline: 'A comparison and list of things I appreciate'
date: 2019-07-02 8:00
tags: coding
metaImage: 'meta.png'
---

<Alert>
  This article was originally published to{' '}
  <AlertLink href="/news">the newsletter</AlertLink>.
</Alert>

Modern web development. We all have a love and hate relationship with it because while it revolutionized web development practices, it also greatly complicated them.

I'd like to go over a few aspects of modern web development and explain the benefits that I've been able to appreciate. I will also mention when you would still want to do things the traditional way.

## 📦 Managing packages

**The old way**: Manually downloading package files into a `vendor` folder or linking a CDN.

**The modern way**: Using package managers like [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/).

**Benefits**: Being able to manage all of your packages with `install`, `update`, and `remove` commands not only saves time, but also keeps track of things like outdated or unsecure packages. The one downside is the large number of files those packages end up depending on and so you may still consider it better to link a package from a CDN for very simple sites.

## 🎮 Building user interfaces

**The old way**: Manually manipulating the DOM using [jQuery](https://jquery.com/).

**The modern way**: Rendering entire UIs with JavaScript using [React](https://reactjs.org/) or [Vue.js](https://vuejs.org/).

**Benefits**: Breaking out your UI into components and state can be a huge productivity boost plus it also helps to reduce bugs. I talked a lot about this in my [Declarative all the things!](/blog/declarative) article. There is also a huge benefit in a static architecture like [JAMStack](https://jamstack.org/) for simplified deployment. Keep in mind that while large apps become easier to maintain, manual DOM manipulation is still great for building out something on the spot with zero external dependencies.

## 🎁 Bundling code

**The old way**: Concatenation and minification tools to manually declare how files get merged together.

**The modern way**: Using `import` statements and a bundler like [Parcel](https://parceljs.org/).

**Benefits**: While this was a huge pain point initially, bundling tools have gotten much easier to work with now. You can start writing JS and CSS using the latest features including `import` statements, and the code will automatically get transformed and bundled. This is important not only for cross-browser compatibility but also performance, so even in situations where you can depend on users having the latest browsers you probably still want to use a bundler.

**Extras**: CLI tools for frameworks abstract away bundling for you, so that you don't have to worry about it. See [Create React App](https://facebook.github.io/create-react-app/), [Next.js](https://nextjs.org/), [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html), and [Nuxt.js](https://nuxtjs.org/).

## What about the number of choices? 🤯

It's true, web development is considered complex nowadays due to the sheer number of decisions we have to make. This becomes especially overwhelming for anyone new that is trying to learn everything.

However, one skill that I believe every developer should possess is deciding what is worth learning and using. Don't immediately install that new framework you read about in a Medium article unless it solves a particular problem for you that another, more community-supported one isn't already solving.

I hope to provide more resources for helping you become smarter about those decisions. If you're still wondering which JavaScript framework to use, check out my [Why is everyone using React?](https://sunnycommutes.fm/episodes/62-why-is-everyone-using-react-K0EAQo) podcast episode.
