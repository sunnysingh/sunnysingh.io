---
title: Templating repetitive code with Hygen
tagline: A quick way to automate repetitive coding tasks
date: 2020-02-19 8:00
tags: coding, javascript
background: 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)'
metaImage: 'meta.png'
---

Adding a new feature to a project typically relies on a repetitive set of steps; create new folders with layouts, components, boilerplates, etc. from existing configurations. Most developers will typically handle these repetitions by copying a previous feature and modifying it to the needs of the new one.

The process of sifting through features to figure out which one is ideal to copy, and then making sure to change all names that reference that exisiting feature and modifying multiple configuration files becomes tedious and inefficient.

Tools exist to help with this process known as scaffolding. You create a generic template that can then be reused to create new features from. Integrating them is usually not trivial, and so even though there's a long-term productivity benefit most developers choose to keep moving along with the copy-and-paste approach.

## 👊 A new challenger approaches!

I recently started researching different scaffolding tools, and was well aware of the popular [Yeoman](https://yeoman.io/) one but wanted to find something newer that focused on simplicity of integration. My priority was to immediately get going with a few templates.

This is when I came across [Hygen](http://www.hygen.io/). It met my goal of simplicity:

```bash
npx hygen init self
npx hygen generator new feature
npx hygen feature new MyFeature
```

With a few commands, we can create a generator for new features. It creates a `_templates` folder in the project, and the `npx hygen` command generates files based on those templates.

## 🗺 Co-location

I'm a fan of the design decisions made for Hygen. One of them is the co-location of templates and metadata:

- Templates are located within your project.
- Metadata for the template (e.g. where the file will be outputted) is located within the template using frontmatter.

This means that you don't have to create separate repos, config files, or fancy CLI tools. Just make a folder and run Hygen.

## 🚀 A quick start

Let's create a React component generator. This will require [Node.js](https://nodejs.org/) to be installed.

First, install Hygen as a development dependency of your project:

```bash
npm install hygen --save-dev
```

It would be weird if we didn't use Hygen to generate the templates, so we can do that now:

```bash
npx hygen init self # only run this once
npx hygen generator new component
```

Cool, this generates a file to `_templates/component/new/hello.ejs.t`. Edit this file to be the following:

```ejs
---
to: src/components/<%= name %>.js
---
import React from 'react'

export function <%= name %>({ children }) {
  return (
    <div>{children}</div>
  );
}
```

Now let's run our new generator:

```bash
npx hygen component new ProfileBox
```

✨ A new component was generated! Check out `src/components/ProfileBox.js`:

```jsx
import React from 'react';

export function ProfileBox({ children }) {
  return <div>{children}</div>;
}
```

While a very basic example, you can see how within a few minutes you could save yourself time in the long-term for repetitive code within your project.

I was speculative on whether Hygen could handle more complex use cases, but I was able to generate multiple files for an API client by reading from an OpenAPI JSON specification file. This is all thanks to Hygen's ability to run its [own helpers](http://www.hygen.io/templates#helpers-and-inflections) alongside your custom ones that can be written using Node.js. It also has support for [shell commands](http://www.hygen.io/templates#shell), [file injection](http://www.hygen.io/templates#injection), [interactive prompts](http://www.hygen.io/generators#interactive-prompt), and [self documentation](http://www.hygen.io/generators#documenting-your-generators).

The one limitation that I found was lack of asynchronous helper support, so that may limit some really advanced use cases. However at that point, you're better off creating a custom Node.js script and then passing that data off to Hygen.

## 🤖 What will you automate?

There are so many repetitive tasks in modifying codebases that can be automated with Hygen, so I would love to hear some ideas on how you might use it. I mentioned the API client generator, but I also added commands to a documentation site to generate new tutorials and pages easily. I would start off with some simpler templates, and create more as they become a part of your development workflow.
