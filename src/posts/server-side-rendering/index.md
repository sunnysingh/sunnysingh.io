---
title: 'The benefits and origins of Server Side Rendering'
tagline: What is SSR, and why should you bother learning it?
date: 2019-01-20 12:00
tags: coding, javascript
background: 'radial-gradient( circle 715px at 10.8% 89.3%,  rgba(13,65,130,1) 5.4%, rgba(3,33,71,1) 100.2% )'
metaImage: 'meta.png'
---

Server side rendering, abbreviated to SSR, is a commonly misunderstood concept. What is it, and why should you bother learning it? I hope to answer those questions with a story on the origins of server side rendering.

## The benefits

Before I get into the story and explanation of SSR, it's worth understanding the benefits first. Why should you care?

🔎 Search Engine Optimization: Content is crawlable by search engines so your site and pages will appear in Google search results.

📣 Social Media Optimization: When people post your links on Twitter, Facebook, etc. then a nice preview will show up with the page title, description, and image.

🏎 Performance: Server side rendered pages will load faster because the content is available to the browser sooner.

😊 User Experience: Similar to performance, content is available sooner so the user is not waiting around looking at blank pages or loading spinners.

I also did a [podcast episode explaining these benefits of SSR](https://sunnycommutes.fm/episodes/58-benefits-of-server-side-rendering-8WXjwz):

<YouTubeEmbed id="fP7Clzkwknc" caption="Episode 58 of Sunny Commutes Podcast" />

---

## The origin story

Server side rendering has actually been around since the existence of server programming languages such as Java, PHP, Python, and Ruby. If you've ever written dynamic code in an `index.php` file or an entire Ruby on Rails app, then you've already done server side rendering.

That makes understanding this concept a lot simpler. Let's say I have a PHP website where I am retrieving a list of games from a database. It might look like this:

```php
<?php

$game1 = getFirstGameFromDatabase();
$game2 = getSecondGameFromDatabase();

echo "<ul><li>$game1</li><li>$game2</li></ul>";
```

Data is being retrieved and formatted in an HTML list all on the server. As soon as you view this page in a browser, you don't have to wait for any JavaScript to be run. The data is already available and you'll see the list of games right away.

This is great for everyone including search engines and social media. The data is already available in the source of the page, so web crawlers such as Google or even Facebook could parse this content and display search results or link previews.

Websites were built this way for many decades, but what we didn't see coming is the revolution of websites being written all on the client side using JavaScript.

## The JavaScript revolution

Browsers are constantly becoming more powerful meaning that you can do a lot more now with JavaScript than you could 10 years ago. So what did developers start doing? Writing their entire websites and web apps with client side JavaScript.

Yes, I am mainly referring to the usage of single page application (SPA) frameworks. While there were many that came about, Angular is the primary one that popularized this approach. Imagine being able to fetch some data via Ajax, add some special attributes to your markup, and voila: you have a dynamic website without having to mess around with PHP and servers.

One big problem though. Your initial HTML no longer contains all that data that the server was so nicely fetching and returning back for us already in the page.

Now all you have is this:

```html
<!-- 😭 My beautiful content is gone! -->
<div id="app"></div>
```

I'm sure that Google isn't very happy about that, and neither are users. On a slow connection, it may take a while for the JavaScript to make this page useful.

_Note: Before you say, "but Google can crawl JavaScript now!", keep in mind that there are limitations and not all web crawlers do the same._

It'd be a pretty sad end if I said that we should stop building apps this way, especially when it's so efficient for developers. Can we have our cake and eat it too?

## Universal JavaScript

Here's where it all comes together now. What if I said that we could take the traditional approach of server side rendering and combine it with our JavaScript?

Yes, it's possible! It's all thanks to [Node.js](https://nodejs.org/) which allows for what is known as Universal JavaScript: code that can be run in both a browser and server.

Let's say that we have a simple React component like this:

```jsx
function GamesList({ game1, game2 }) {
  return (
    <ul>
      <li>{game1}</li>
      <li>{game2}</li>
    </ul>
  );
}
```

With the component being rendered to the page like so:

```jsx
const games = <GamesList game1="mario" game2="pacman" />;
ReactDOM.render(games, document.getElementById('app'));
```

This is all being done on the client side. How can we do the same on the server side? Actually, React provides a method for that:

```jsx
return ReactDOMServer.renderToString(games);
```

Now, instead of passing back an empty div, we can have a Node.js server return the full HTML of our React component! Similarly to the PHP code we had earlier.

I did leave data fetching out of this example, but note that it is definitely possible to fetch data in our components on the server side.

### Note: You're not losing out on the benefits of an SPA

A single page application (SPA) is popular not only for providing quick development time, but also for its client side routing. This provides a quick navigation experience for the end user, and is definitely something we do not want to lose when we begin server side rendering. Thankfully, you can still choose to use these frameworks on the client side to provide that experience. This means that the **initial render uses SSR**, but then **subsequent navigations are like an SPA**.

---

## Using it in the real world

I hope this story helps explain what server side rendering is and why you would want to use it. You're probably wondering _how_ to actually use it though.

While you can start from scratch and try to make your apps run on Node.js, it is _a lot_ of work. You have to figure out how to properly implement data fetching, state hydration, CSS extraction, and many other things.

Thankfully, there are frameworks for this:

- For React projects, I highly recommend [Next.js](https://nextjs.org/).
- For Vue.js projects, take a look at [Nuxt.js](https://nuxtjs.org/).

Another option for achieving the benefits of server side rendering without the hassle of a Node.js server is using a static site generator. There are of course limitations, such as not being able to have dynamic on-demand routes (e.g. user profiles), but otherwise I definitely recommend taking a look at [GatsbyJS](https://www.gatsbyjs.org/). My personal site is powered by Gatsby, which [I also wrote about](https://sunnysingh.io/blog/revamping-personal-site-gatsby).

I should also mention prerendering which is basically having your own web crawler that can parse JavaScript. The result of that markup is then served to appropriate user agents such as search engines, and the benefit here is that you don't have to change the way your app is written. [Prerender.io](https://prerender.io/) is a popular service that provides this functionality. Keep in mind though that you're still either maintaing a server or paying for a service, and you don't receive any performance benefits out of it.

There is no definitive answer on which option is best, you just have to weigh the benefits and downsides of each one and decide which is worth it for you.
