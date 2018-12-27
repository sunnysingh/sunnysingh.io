---
title: Running WordPress on Laravel Forge (with CloudFlare)
tagline: A tutorial on setting up WordPress on a Laravel Forge server, with insights on some gotchyas
date: 2015-04-27 13:54
tags: coding, devops, wordpress
---

[Laravel Forge](https://forge.laravel.com/) is a fairly new service that enables PHP developers to easily host their applications on popular cloud-hosting platforms. The decision to switch to Forge was pretty easy, because I wanted easy server creation/management and the speed of [NGINX](http://nginx.com/) plus [HHVM](http://hhvm.com/). While getting WordPress initially setup on Forge was painless, I did run through some "gotchas" that made me waste hours while finding a solution. To help other developers who are trying to setup WordPress on Laravel Forge, and may also be using [CloudFlare](https://www.cloudflare.com/), here's how you setup WordPress and fix certain errors.

## Getting your site on Forge

While you technically have access to your Forge server through FTP, I would highly recommend that you take the approach of developing your site locally, setting it up as a Git repository (use [Bitbucket](https://bitbucket.org/) if you want private repos), and then using the deploy script provided by Forge. There are many tools for developing locally such as [MAMP](https://www.mamp.info/), but I would recommend using [Vagrant](https://www.vagrantup.com/). The easiest way to get setup with Vagrant is through [Laravel Homestead](http://laravel.com/docs/5.0/homestead) (which is not just for Laravel applications). This article is not about Git or Vagrant, but there are numerous resources on these two tools that you can find.

Once you got your site's code on GitHub, Bitbucket, or elsewhere, you can add a new site on Forge and enter your repository's name. **Important**: Uncheck the "Install Composer dependencies" option. You can leave it checked if you are actually using Composer in your WordPress project.

After the site is setup, edit your deploy script. Make sure to remove or comment out the following lines from it:

```bash
composer install --no-interaction --no-dev --prefer-dist
php artisan migrate --force
```

At this point, you can enable the "Quick Deploy" option which automatically uploads your files every time you make a Git push.

## NGINX Configuration

Unlike Apache, NGINX does not have an `.htaccess` or `httpd.conf` file to configure virtual hosts, redirects, etc. Instead, you have to edit the NGINX Configuration (`nginx.conf`) file which is provided in the Forge dashboard in a dropdown menu at the bottom of your site's details page.

In your NGINX configuration, you have to change the lines that contain `location / { ...` to this:

```
# Send all requests to WordPress
location / {
    try_files $uri $uri/ /index.php?q=$uri&$args;
}
```

This mimics WordPress' "pretty permalinks" functionality that would normally be done through htaccess.

## No errors? Good!

If you go to your site's domain and everything is working, you're good to go. However, this is where I realized that I couldn't access the WordPress admin dashboard. It seems like putting CloudFlare into the mix along with its Flexible SSL option makes either the whole site or just the admin go into an infinite loop of redirects. In Google Chrome, it says: "There were too many redirects."

## Fixing "Too Many Redirects" Error

There are many things you can try to fix this error. First, try renaming your plugins folder to disable them, or see if you're doing something weird within your `wp-config.php` or theme's `functions.php` files. Both of these were fine for me, so I moved on with the following solutions.

### HTTP_X_FORWARDED_PROTO

Because CloudFlare acts as a reverse proxy, you have to add the following to your `wp-config.php`:

```php
<?php

if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')
	    $_SERVER['HTTPS'] = 'on';
```

This tells WordPress when the user is accessing the site through HTTPS.

### Add a CloudFlare Page Rule

In your CloudFlare websites dashboard, click the settings icon and go to "Page rules." Then, add a new rule for `yoursite.com/wp-admin/`. Under this rule, disable "Always use https" and disable SSL.

### Modify NGINX Configuration

I also had to modify my NGINX configuration with the following:

```
# Add this below the "location / " block that we added earlier:
rewrite ^/wp-admin/?$ /wp-admin/index.php permanent;

# Change the "fastcgi_param SCRIPT_FILENAME $document_root;" part within the "location ~ \.php$" block with this:
fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
```

### Force SSL

This isn't necessarily a solution, but I want to point out that I am using the [Force SSL](https://wordpress.org/plugins/force-ssl/) WordPress plugin for redirecting all non-http requests to https. Make sure that when you have this plugin installed, that the plugin itself is not causing any redirect loops. This plugin did not cause any issues for me, and I wanted something that did not rely on editing configuration files. You can also do this through CloudFlare's page rules or NGINX configurations.

If all goes well, your site should be fully working now, and running fast with Laravel Forge's server setup.

## Conclusions

I hope that this article helps someone out, because I don't want someone else to waste their time like I did. If I missed something or was unclear, please let me know!
