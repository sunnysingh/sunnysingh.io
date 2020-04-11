---
title: 'Demystifying "const" variables in JavaScript'
tagline: When to use const instead of let to declare variables?
date: 2019-06-04 9:00
tags: coding, javascript
background: 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)'
metaImage: 'meta.png'
---

By now, ES6 (ES2015) is widespread enough that many developers are writing their JavaScript with this modern syntax. However, I commonly see room for improvement with variable declarations. Specifically, when I see a `let` to declare an object that is updated, but never reassigned a new value.

Here is the offending example:

```js
let cache = {};

cache.id = 'hello';

// We never reassign cache to a different value.
// It's a reference to the same object.
```

Yes, that can actually be a `const` because the `cache` variable is never reassigned.

## Immutability vs Reassignment

Many refer to `const` declarations as creating "immutable" variables. Immutable meaning that the value (including properties of objects) can never be updated.

If that is the case, then let's try our initial example using a `const`:

```js
const cache = {};

cache.id = 'hello';

console.log(cache.id); // will output "hello"
```

If `cache` is now an immutable, non-changeable constant, then attempting to add an `id` property to it will not work or even throw an error.

However, if you try running that example, it will work perfectly fine. The string "hello" will be logged, which is retrieved from the updated object.

Okay, so if `const` does not declare something as immutable, what does it do? Well, a **`const` prevents a variable from being reassigned a new value**.

Here are a few examples of reassigning variables:

```js
let cache = {};

cache = { id: 'hello' }; // reassigning variable to a new object

let isSuccess = false;

isSuccess = true; // reassigning variable to false boolean
```

Changing any of the above `let` statements to `const` instead will throw a type error: "Uncaught TypeError: Assignment to constant variable."

Setting a property on an object, or updating an existing property, is **not** reassignment. The value of the variable is still the same object, and you are updating the properties of that object.

## Benefit of using `const`

Hopefully you understand how `const` and `let` differ now, but that probably still begs one major question: why should I care enough to use `const`?

It mainly comes down to the quality of your code, and how much information you or another developer can infer from it. For example, as I'm looking through one file in a codebase, I see this:

```js
let isSuccess = true;
```

Okay, so it's a variable that declares whether some operation succeeded or not, in this case it has since the value is `true`. However, the `let` also tells me that this variable can be reassigned to `false` anywhere later on in that file.

To double check, I search for all instances of `isSuccess` in the file. Hmm, it's not reassigned anywhere, so I know that this variable's value will remain `true`.

Sounds like a constant to me, and if this variable was actually declared as a `const` then I wouldn't have to search anywhere else in the file for it.

Now imagine you revisit this code a few months later. Way down in the file, you add this:

```js
isSuccess = false;
```

Uh oh, you potentially caused a bug just now because when you initially wrote this code for `isSuccess` to be `true`, you weren't expecting anyone to change it later on. Even [your future self](/blog/readable-code).

This is an extremely common scenario, especially in large codebases with multiple developers. The great part is that this is easily solved by using `const` and `let` appropriately.

## Default to `const`, but use `let` when necessary

As a common rule, I suggest using `const` to declare all new variables, and when you come across a point where you need to reassign one of those variables, then change it to a `let`.

Here's a much bigger example of how you might use both properly:

```js
const cache = {};
let user = {};
let isSuccess = false;

// The `cache` variable is never reassigned a new value.
cache.greeting = `Hello`;

// The `user` variable is not reassigned a new value right now.
user.id = 1;

// Here, we assign `user` and `isSuccess` new values.
user = {};
isSuccess = true;
```

It's definitely a paradigm shift to declare variables with `const` instead of `var` and `let`, but it can add more confidence to your code. Try it out and let me know what you think.

Want to learn how to improve your code even further? You might like my [Writing code for your future self](/blog/readable-code) article.
