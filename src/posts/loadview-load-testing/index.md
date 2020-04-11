---
title: Load testing with LoadView
tagline: A review of the LoadView load testing tool from Dotcom-Monitor
date: 2018-02-06 10:00
tags: performance, tools
---

<Alert type="sponsor">This article is a <strong>sponsored review</strong>. All thoughts are my own.</Alert>

![Screenshot of LoadView tool](loadview-load-testing.png 'LoadView testing tool by Dotcom-Monitor')

It is a fulfilling experience to build and release a website for many people to see. What happens though when _too many_ people see your website? Your servers become stressed under the increase of concurrent users and eventually crash, making that experience no longer so joyous. The solution is to prepare yourself for that overload by doing load testing which can easily be done with the [LoadView tool](https://www.loadview-testing.com/). It is from a company called Dotcom-Monitor which specializes in offering services for testing your website. They've been around for two decades, so they know a thing or two about performance testing. In this review, I take a look at LoadView to show you how you can use it, and what I think about it in terms of usability and features.

## Onboarding

To get started, you first need to [create an account](https://userauth.dotcom-monitor.com/Account/FreeTrialSignUp). After doing so, you're greeted with an onboarding screen to help choose the right solution. Dotcom-Monitor offers tons of different tools for testing, so it is nice that they break things down here into different categories. The two that I focused on were stress testing and monitoring.

## Creating a load test

There are three options for creating a load test: HTTP(S) Load Test, Single Page Load Test, and Web Application Load Test. The right option will depend on what you're trying to test, but I chose a simple HTTP test for my web server. This overall process is fairly straightforward; there are many different settings, but I was able to keep the defaults and enter any necessary information such as my domain, timeout, and which browser to use.

![Screenshot of creating a load test](create-load-test.png 'Create a Load Test screen')

There is also an execution plan for deciding how many users you want and at which times. This is important in simulating a real world scenario, where you initially will have a small number of users but then traffic will increase to reach maximum peak. I recently experienced this on the BrandSearch project which we [posted on Product Hunt](https://www.producthunt.com/posts/brandsearch)–thousands of visitors were coming along as exposure grew, including from links on other blogs. Thankfully we were able to handle it all due to our static site architecture, but had it been a dynamic site then we'd be better prepared with a tool like this.

![Screenshot of configuring the execution plan](load-test-execution-plan.png 'Execution Plan screen')

## Understanding the report

Of course what I care about most here is the result of my test so that I can take action to improve my server's performance if needed. There is an injector server that is used to check things like CPU load, but otherwise most of the data is what you'd expect to see such as average response time and response status. The report also provides each session that was used which includes other significant data like server location, time, duration, status, and which resources were fetched within the page.

![Screenshot of report: response time](load-test-report-response-time.png 'Average Response Time graph')

## Site uptime monitoring

Alongside load testing, I was also interested in looking at uptime monitoring. It is common to want to know whether your site is actually working, even when you don't have the time to manually check. I setup a monitor for sunnysingh.io, so if the site ever goes down I will receive an email. There is also an option to receive monthly reports, from which I learned about some issues in users trying to access my site from Beijing.

![Screenshot of uptime monitor monthly report](uptime-monitor.png 'Uptime Monitor email')

## Usability and features

LoadView and the whole Dotcom-Monitor suite is fairly easy to use thanks to the default settings they have in place, as well as the organization of each tool and sets of options. However, I did find the overall UI to be quite intimidating due to how many options are displayed on the page. It's also not a very "sexy looking" interface although I could tell where they are trying to update it to feel more modern. In terms of performance testing though, you really only care about configuring your tests once, running them multiple times, and looking at the results. LoadView is more than capable of doing that in terms of ease of use and features. Let me know if you would use a tool like this and if you found this article helpful in doing load testing.
