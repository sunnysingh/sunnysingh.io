---
title: Let Me Introduce Myself
tagline: Announcing the release of my personal site
date: 2011-08-12 00:50
tags: general
---

Hey all, and welcome to my personal site and blog. The site itself is pretty self-explanatory: it's a place for people to go to whenever they want to know more about me and where they can easily find out how to contact me. It's also where I will be able to publish content, such as coding experiments and interesting posts on various topics. I plan to write mostly about web development, but since this is my *personal* site I might also do reviews, rants, and anything else I find worth talking about.

## Walk-through

I put a decent amount of work into the site, and so I'd like to take a second and tell you all about the design and code that went into it.

### Design

The overall design is very simple, and in fact a bit too simple for my liking. I decided to go down this route because this will mostly be a content site, and so all I really needed to do was make the site visually appealing with focus set on the content itself. This is also the first time I tried to make typography look as pleasant and readable as possible. CSS' [@font-face](http://developer.mozilla.org/en/css/@font-face "Learn about using @font-face") is utilized for custom fonts with the help of [Google Web Fonts](http://www.google.com/webfonts); I'm currently using [Open Sans](http://www.google.com/webfonts/specimen/Open+Sans) for headings, and [Muli](http://www.google.com/webfonts/specimen/Muli) for regular text. I also bumped up the font size a bit so no one has to squint while reading my posts. If any typography purists are reading this, let me know if I'm doing anything wrong here.

As far as the color scheme goes, I went with dark blue and shades of gray. I tend to use gray on almost all my projects as it's an easy way to add contrast, and I chose dark blue because it's my favorite color (I mean that in the most serious way possible).

### Features

There are quite a few features that I'd like to point out.

#### Social Links

It is really easy to find me across the Web as I have provided my profile links right below the header. I decided against using the oh-so-popular social icons because they are too much of a distraction, plus I think the links look pretty nice (and I always wanted to embed that neat [Twitter follow button](http://twitter.com/about/resources/followbutton) somewhere).

#### Comments

I decided to go with [DISQUS](http://disqus.com/) for the comments system. Main reason is because I love it when other blogs use it, as it makes commenting so much easier and faster. If you have a DISQUS account and are already logged in, then all you need to do is type your comment and hit "post". If you don't have an account, you can still as easily login with other accounts, e.g., Twitter, Yahoo!, Google. Not only that but I also enabled guest comments, so if you're used to the way WordPress handles comments then you should feel right at home.

There are also a ton of other useful features such as email notifications, comment threading, mentions, and reactions. I particularly can't wait to see how the reactions feature works out, as it will bring conversations from across other sites like Twitter back to the comment thread.

#### WordPress

If you haven't figured it out already, the site runs completely on [WordPress](http://wordpress.org/). I have only used it to set up single blogs in the past, but not as a CMS. It is more than a blog script though, thus I decided to try it out for my personal site. I don't regret the decision at all, because the many new WordPress features that were recently introduced as well as the customizable nature of the system made it perfect for small sites like mine. Not only that but I knew that I wanted to have a blog section, and having a framework that already included blogging as a core feature made it a no-brainer.

### Known Issues

This can't be a legit post if I don't talk about good old Internet Explorer, right? I actually applied almost no fixes for that browser, and the site surprisingly looks decent. IE8 and IE9 are lookin' good, and IE7 is not perfect but it should manage. By default I prompt a [Google Chrome Frame](http://code.google.com/chrome/chromeframe/) overlay for IE6 users, as I have phased out that browser a long time ago.

~~There also seems to be a bug with DISQUS and Google Web Fonts not playing nice with each other. When loading a post like this, you might notice that the fonts sort of do a "reload" when DISQUS finishes loading its stuff. I'm not sure of the exact cause, but if someone knows a solution please let me know.~~

Font reloading seems to no longer be an issue after I upgraded to Firefox 6.

### Other Stuff

I've customized the hell out of WordPress, trying to make it more secure, faster, and work the way I want it to. Short URLs that would usually be shown as `http://sunnyis.me/?p=1` are now shown as `http://sunnyis.me/p1`. Not only does that look better, but saves a few characters as well. Then there's little stuff like how the share buttons load asynchronously, some custom DISQUS styles, a plugin that improves search, and so on. Like I said before: I'm a developer, and so simply installing WordPress with a pre-built theme would not satisfy me. This theme is built from scratch, and I read through a bunch of WordPress documentation on how to change the slightest things. Nothing's perfect of course, but I'm pretty happy with how things turned out so far.

So that's it. This is my initial release and I hope to write more posts in the future (hopefully at least on a weekly basis or so) and release cool scripts, downloads, all that jazz. For now, feel free to let me know what you think so far and what I can make better.
