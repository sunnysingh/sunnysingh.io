---
title: 'JavaScript Quick Tip: Named functions for sane debugging'
tagline: Name your functions for a sane debugging experience
date: 2019-03-05 9:00
tags: coding, javascript
background: 'linear-gradient( 177.7deg,  rgba(127,7,7,1) 3.3%, rgba(216,35,35,1) 93.8% )'
metaImage: 'meta.png'
---

Debugging is not something that you think about at the time of writing your code, but doing so can drammatically save you from frustration later.

One simple way of doing this is to use named functions over anonymous functions. If you're unfamiliar, take a look at the following code block:

```js
// These two are anonymous functions
function() {}
() => {}

// These two are named functions
function doSomething() {}
const doSomething = () => {}
```

In a typical app you'll have functions calling other functions. Some functions may even be called from an event listener such as on window load. See this example.

```js
function Page() {
  window.addEventListener('load', function() {
    console.log('Page loaded!');
    Page.init();
  });
}

function App() {
  Page();
}

App();
```

Notice an error in the code? When you try to run it you will get the following in the developer tools console.

```
index.js:4 Uncaught TypeError: Page.init is not a function
    at index.js:4

(anonymous)   @ index.js:4
load (async)
Page          @ index.js:2
App           @ index.js:9
```

This is the expanded console message, and is known as a [stack trace](https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces). Do you see our named functions such as `Page` and `App`? What about the event handler function from `window.addEventListener`? Ugh oh, it's "anonymous". Imagine if there were multiple anonymous functions calling other anonymous functions. That wouldn't form a useful stack trace for debugging.

Let's fix this by adding the name `pageLoadHandler` to our function.

```js
function Page() {
  window.addEventListener('load', function pageLoadHandler() {
    console.log('Page loaded!');
    Page.init();
  });
}

function App() {
  Page();
}

App();
```

There's still an error with this code, so if I run it I now get the following.

```
Uncaught TypeError: Page.init is not a function
    at pageLoadHandler (index.js:4)

pageLoadHandler @ index.js:4
load (async)
Page            @ index.js:2
App             @ index.js:9
```

Now the error message is useful even without the expanded stack trace because we can see it's coming directly from `pageLoadHandler`. If we were to call another function from here though, the stack trace would no longer show just `(anonymous)`.

You may still want to create anonymous functions when doing simple callbacks to array methods like `.map()` or `.filter()`, and as long as the parent functions have a name I don't see an issue with that. Being aware of how anonymous functions affect the stack trace helps you make those decisions for a sane debugging experience later on.
