---
title: Box Model Reset
tagline: A discussion and tutorial on using border-box as the default box model
date: 2014-07-22 21:45
tags: coding, css
---

You may or may not know what a box model is, but if you've coded HTML and CSS then you are already familiar. In layman's terms, every element on a page is a "box" and a box model includes all the margins, padding, borders, and content of that element. The default box model in CSS uses `content-box` which calculates dimensions of an element by adding up the total width/height, padding, and borders. We're all used to it, but there's a better box model that you should consider using.

## content-box, and why it sucks

Let's talk about the default box model, `content-box`. This property can be changed with the `box-sizing` property, but I'll get to that in a bit. When you're working on a project, you decide to set some common properties on an element:

```css
element {
  width: 200px;
  height: 200px;
  padding: 10px; /* shorthand for 10px of padding on each side */
}
```

With this CSS, you expect the width of the element to be 200 pixels, right? While this would make sense, remember that the default box models adds padding and borders when it calculates the dimensions of an element. So in this case, the actual width is 220 pixels because of the 10 pixels of padding on each side.

This might not sound like a big deal, after all this is simple math. But the real annoyances arise when you're creating columns and using percentage widths. Something like this would not work:

```css
.column-left {
  width: 50%;
  float: left;
  padding: 10px;
}

.column-right {
  width: 50%;
  float: right;
  padding: 10px;
}
```

It would make sense for each column to be half a page, but the padding makes the width be `50% + 20px`. This means each column will be more than half a page, and thus unable to be floated next to each other. You _could_ use pixels and then factor in padding into the column width, but then it becomes a lot harder to make responsive layouts. Plus, imagine changing the padding on an element in another CSS file and potentially screwing something up without knowing it. This results in hours of bug hunting, and we've all been there.

## border-box, and why it's awesome

The alternative box model that I want to talk about is `border-box`. Unlike `content-box`, it obediently displays elements at their declared widths. You can reset the box model to use `box-sizing` on every element with the following CSS:

```
/**
 * Changes the default box model from content-box to border-box.
 */

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
```

This reset will make every element use the `border-box` property. I've also added inheritance so that you are still able to use `content-box` on a specific element (and every element inside it) like so:

```css
.use-default-box-model {
  box-sizing: content-box;
}
```

Chances are that you won't have to ever again use `content-box`, but it's something that's good to know in case you have outdated code or third-party CSS (i.e. plugins) in your project.

To see why this alternative box model is awesome, let's go back to our original example and assume that the above reset is included in the same page:

```css
element {
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 5px solid black;
}
```

With `box-sizing` set to `border-box`, this element's width would be 200 pixels. The element still has 10 pixels of padding, and I've also added a 5 pixel black border for flair, but the overall width is still whatever you declare in the `width` property. Same goes for `height`.

To see the difference of the two box models in action, check out the [demo](http://codepen.io/sunnysingh/pen/IpdEG):

<CodePenEmbed id="IpdEG" caption="Box Models" />

## Use it!

I've seen a lot of people switching over to `border-box`, even the popular [Bootstrap framework](https://github.com/twbs/bootstrap/blob/master/less/scaffolding.less#L6). This doesn't mean that you have to transition every one of your sites to it, but new projects are great opportunities for trying out new stuff. I was against it at first although I loved the idea, but I am now fully for it.
