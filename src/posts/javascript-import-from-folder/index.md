---
title: "JavaScript Quick Tip: Import from folder"
tagline: Organize projects with the index re-export pattern
date: 2019-01-11 12:00
tags: coding, javascript
background: "linear-gradient(171.8deg, rgba(255,159,0,1) -6.3%, rgba(208,23,23,1) 86.7%)"
metaImage: "meta.png"
---

Maintaining medium to large projects is a pain. Even if you try to split things up into multiple files, you start to realize that managing imports starts getting ugly. I'd be lying if I said my files never looked like this:

```js
// Holy imports Batman! 😲
import Grid from './components/Grid';
import Title from './components/Title';
import Text from './components/Text';
import Button from './components/Button';
import Alert from './components/Alert';
```

Since we're importing these components all from the same folder, wouldn't it be nice to just do something like this?

```js
// Much better 😌
import { Grid, Title, Text, Button, Alert } from './components';
```

Unfortunately, the [import statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) does not allow importing a folder. However, I've come up with a solution that allows this anyway. Hold your money, let me know show you how first.

## The index re-export pattern

I'm not really sure if there is a proper name for this, so I'm calling it the "index re-export" pattern. This is because we are going to create an `index.js` file where all of the files in our folder will be imported and exported again.

Using the example of our `components` folder, let's create a file in `components/index.js`.

Next, we will use an uncommon feature of the [export statement](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) to be able to export from another file:

```js
export { default as Grid } from './Grid';
export { default as Title } from './Title';
export { default as Text } from './Text';
export { default as Button } from './Button';
export { default as Alert } from './Alert';
```

This not only allows you to import all of your components from the `components` folder, but it also creates what is essentially your own library of UI components.

There is also a huge benefit from this in being able to see exactly what you are able to import, especially if not all of your exports are default exports. For example, let's say that inside of `components/Button.js` you have both a default and named export:

```js
export default Button; // default export of Button component
export BigButton; // named export of a Button variant
```

So now inside of `components/index.js`, we can add `BigButton`:

```js
export { default as Button, BigButton } from './Button';
```

It's as simple as that.

## With great power comes great responsibility

There is such a thing as overarchitecting your projects, so I'd exercise caution before deciding to use this pattern for every single folder. While it's convenient for importing multiple components, it may be become annoying when importing smaller things like utility/helper functions. You'll know while coding when the pain point is so high that you'll reach for it, but otherwise I wouldn't do it prematurely.
