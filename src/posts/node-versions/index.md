---
title: 'Quick tip: Manage Node versions for your projects'
tagline: 'How to simplify version management for your projects'
date: 2020-11-05 12:00
tags: coding, javascript
background: 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)'
metaImage: 'meta.png'
---

When I start a new project, I am likely going to run [`npm init`](https://docs.npmjs.com/cli/init/). It can be a backend API, a frontend application, or a simple static site.

This means that [Node.js](https://nodejs.org/) is powering all of my projects and it's unlikely that I am able to keep all of them working with the same Node version. For example, I may have a legacy project that uses Node v8 while a newer project uses Node v14.

A tool to help with this problem exists and you may already be aware of it: [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm). It allows you to install and use different versions:

```sh
# Install and use Node v14
nvm install 14
nvm use 14
```

However, this manual process can be tedious when switching between projects. Imagine opening a project and instinctly trying to run `npm start`. Uh oh, you see some errors. You begin debugging until realizing that you're on a wrong Node.js version! You then have to remember the right version or look at the readme.

## 💡 Solution: the `.nvmrc` file

Did you know that [NVM](https://github.com/nvm-sh/nvm) can automatically detect which version to use in a project? You can enable this by adding a [`.nvmrc` file](https://github.com/nvm-sh/nvm#nvmrc) which should contain a Node version:

```
14.15.0
```

Now run `nvm use` in the project and NVM will figure out to install and use `14.15.0`.

<Alert>

**Bonus**: You can even have your shell automatically run `nvm use` when it detects an `.nvmrc` file! [Read the NVM docs](https://github.com/nvm-sh/nvm#deeper-shell-integration) to learn how to set it up.

</Alert>

## 🏎 Honorable mention: the `engines` field

NVM obviously uses the `.nvmrc` file, but some other tools and services may as well. Notably, [Netlify uses nvmrc](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript) to detect which Node.js version to build your site with.

However, other services [such as Heroku](https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version) use the [engines field in package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#engines):

```json
{
  "name": "my-package",
  "engines": {
    "node": ">=14.15.0",
    "npm": ">=6.14.8"
  }
}
```

This field actually matters significantly when it comes to publishing packages to NPM with version requirements, and also has the added benefit of being able to specify the version of the package manager (NPM or Yarn) as well.

---

Maintaining different Node.js versions is now a problem of the past. Did you like this quick tip? Maybe you have one to suggest? Send me [an email](/contact) or [a tweet](https://twitter.com/sunnysinghio).
