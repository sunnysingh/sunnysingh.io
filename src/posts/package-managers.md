---
title: Package Managers, and Why They're Awesome
tagline: An explanation on package managers and how to setup a common one
date: 2015-06-02 19:54
tags: coding
---

This article is meant to cater towards beginners, but really this goes for anyone who still doesn't use any sort of package manager or understand the usefulness of one. Before I explain what package managers are, let me create a scenario for you.

So you're building a website for yourself or a client. You want to make prototyping and designing the UI easier, so you decide to use the [Bootstrap framework](http://getbootstrap.com/). You visit the site, click download, extract the folder, and pull in the files into your project. Easy enough. Next, you realize you want some interactions, so you decide to use [jQuery](http://jquery.com/). Again, you head to the site, click download, and transfer the files to your project folder. Not too bad. Oh, there's another fancy framework/library/magicpotion that makes another task easier, so you repeat the steps for that. As you can see, this can start getting tedious if you have to repeat this for every single framework or library that you decide to use. You can easily have numerous "vendor packages" that you are using in your project, especially if you are adding small CSS or JS libraries that handle specific tasks.

Let's look at that same project a couple weeks or months laters. Bootstrap, jQuery, and probably most of your other libraries (let's refer to these as packages from now on) have been updated. Perhaps you don't necessarily care about the new features, but those new versions may bring along bug fixes. This is a big deal if your website doesn't fully work in a recent browser version or on a new device that came out. The great part about packages is that you don't have to worry about fixing the tedious bugs, you can let the "experts" handle that for you while you focus on building a beautiful site. So, how do you go about updating? First, you have to know if there's a new version at all. You might be following that project on Twitter and hear about it that way, but otherwise you'll have to manually check the websites of each package. If there is an update, you repeat the steps that you went through when adding it the first time. For. Each. Package. Talk about a waste of time...

## Okay, so the solution is Package Managers?

It would be a twist if I said no... but yes you are absolutely correct. Package managers exist to solve this exact problem; installing external (a.k.a. "vendor") packages, and keeping them updated. Think of package managers as app stores: Simple, one-click install of apps (or packages, in our case) that you can easily keep updated. There's different managers for different languages, but in the case of the front-end there's a popular one that I personally use called Bower.

### Bower

[Bower](http://bower.io/) markets itself as "a package manager for the web." This is exactly what it is, and probably is self-explainable now that you know what a package manager is. You can use it to install different packages across the web with a single command, and keep them updated likewise. Yes, this does mean that you'll have to learn some basics of using a command line, but this will greatly improve your workflow and the maintainability of your project. If you truly want to stay away from the command line, there's [CodeKit](https://incident57.com/codekit/) for Mac, and I'm not currently aware of other tools that integrate Bower.

To elaborate a little on how Bower works, I should explain where these packages that you install live. For most, these packages are on GitHub and contain a `bower.json` file. This file allows package developers to publish their project on Bower, so that other developers can easily use it in their own projects. While you may be scared that a package that you use won't be available on Bower, don't be. I have yet to come across one that does not because Bower is extremely popular. In the case that the package does not exist, Bower is still able to install Git repositories, SVN repositories, or direct URLs to files (e.g. .css, .js, .zip). Oh and to avoid confusion, Bower downloads these packages into a special folder within your project, so there is no dependency on GitHub or anything like that (aside from installing or updating).

You can easily install Bower with a single command, but you have to make sure that you have [Node.js](https://nodejs.org/) installed. The scope of doing that is outside of this article, but Node provides installers and Bower can be installed with a single command. Once you have all that setup, you can now run commands like so:

```
bower install bootstrap
```

Boom. You have the latest version of Bootstrap in your project. By default, this is located in a `bower_components` folder in your project, but this can be changed. You can reference the files within the `bower_components/bootstrap` folder as you normally would with Bootstrap. Since this folder is managed by Bower, you can now do this:

```
bower update
```

You just updated Bootstrap and all your other packages. That's it. See how the issues that I talked about earlier seem to fly away?

### Other Managers

Of course, package managers exist for other languages and have for a long time. Bower is fairly new, and us web developers are probably not used to this concept. This is also new to a lot of PHP developers, for which I highly recommend you check out [Composer](https://getcomposer.org/). If you're using [Laravel](http://laravel.com/), then you're already using Composer. And keep in mind that you don't have to use Bower, there's [Duo](http://duojs.org/), [Jam](http://jamjs.org/), or Node's pre-installed [npm](https://www.npmjs.com/). There is no right or wrong answer, just use whatever makes you more efficient. If you still prefer the old-fashioned method, that's fine too (but I'll probably look at you differently).

## Looking Ahead

This sort of stuff gets me excited about building websites and web apps. I'm constantly looking for ways to improve my workflow, and package managers greatly help in the building and maintenance of my projects. Other topics that you might want to look into are CSS preprocessors (Less and Sass are extremely popular, but have you heard of [PostCSS](https://github.com/postcss/postcss)?), dependency management ([Browserify](http://browserify.org/) or [webpack](http://webpack.github.io/)), and task runners ([gulp.js](http://gulpjs.com/) or [Grunt](http://gruntjs.com/)). I will hopefully write about these in the future.
