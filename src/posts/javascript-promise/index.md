---
title: 'Simplify JavaScript Promises'
tagline: Techniques to simplify writing promises in JavaScript
date: 2019-11-09 12:00
tags: coding, javascript
background: 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)'
metaImage: 'meta.png'
---

> I love promises. Not from people, but from JavaScript.

I love promises. Not from people, but from JavaScript. [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) make your code concise and simple, resulting in easier to understand codebases.

You may also be familiar with the [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) syntax, but unfortunately it causes some headaches. I'll walk through some techniques that solve common scenarios.

## Combining `async/await` with `Promise.then`

The first problem that I encountered is the verbosity of using `fetch`:

```js
const response = await fetch('/api');
const data = response.json();
```

If you're relying solely on just using `await`, then you will end up using multiple variables and lines for very simple use cases.

Instead, we can take advantage of the "traditional" `Promise.then` syntax:

```js
const data = await fetch('/api').then(res => res.json());
```

A one-liner that is still readable and functions the same way.

## Combining `async/await` with `Promise.catch`

The second problem that I encountered is the scope created with `try { }` blocks:

```js
try {
  const data = await fetchData();
} catch (error) {
  console.error(error);
}

// Oh no, `data` is undefined 😱
console.log(data);
```

Hmm... we can't read `data` outside of the `try { }` block. If you're new to the `const` variable I suggest you read my [demystifying const variables](/blog/javascript-const) article, but essentially this variable is scoped to only be used inside of its curly braces `{ }`.

One thing we could do is to lift the variable up:

```js
let data;

try {
  data = await fetchData();
} catch (error) {
  console.error(error);
}

// Now we can use `data` 😎
console.log(data);
```

But... we are no longer within the safe bounds of using `const` variables. Anywhere later on in the code, `data` could get reassigned and we'd be spending hours debugging. Is there a way to get the same result while still using `const`?

Why yes, there is:

```js
const data = await fetchData()
  .catch(error => {
    console.error(error);
    return null;
  });

// We can still use `data` 👍
console.log(data);
```

We're again taking advantage of two syntaxes for a Promise: `async/await` and `Promise.catch`. If `fetchData` resolves successfully, then that value is set to the `data` variable as usual. Otherwise, the `data` variable gets set to `null` which is what gets returned inside of `.catch()`.

## Refactor wisely

When a new language feature comes out, developers rush to make their codebase follow that new syntax. As you saw in this article, this is not always wise. Combining older syntax with the new can be a powerful way to keep your codebase simple and easy to understand for anyone new to it.