---
title: Secure Passwords with Phpass
tagline: A tutorial on implementing secure passwords with the Phpass password hashing library
date: 2011-10-11 12:55
tags: coding, security, php
---

When we create an account on a website, we are essentially trusting the service to be secure and we pray that our data will be safe. But, is it? Implementing good security in a website can sometimes seem like a daunting task, but the trick is to attack each vulnerability one by one. Passwords are one of those vulnerabilities, and users expect that your system will securely encrypt them so that prying eyes can stay shut.

A while back I decided that I wanted to learn more about proper password encryption, and so I came across [Phpass](http://www.openwall.com/phpass/ "Portable PHP password hashing framework"): a framework aimed at simplifying the process for encrypting or "hashing" passwords. Phpass has been integrated into many well-known CMS's such as WordPress, Vanilla, phpBB, and Drupal, and is a huge reason for why I trust this framework. The only downside was that I could not find an easy-to-follow tutorial on using it, so I decided to write my own.

# Current Insecure Techniques

Before we jump into Phpass, let's take a look at some of the wrong techniques of storing passwords. First would be pretty obvious: storing the raw password. Not only does this open up your website to hackers, but legal authorities will probably come after you as well. The next and probably most popular way that developers secure passwords is by the use of the `md5()` function. It's better than storing raw passwords, but is not well suited for password encryption as it can easily be broken.

The code below should **never** be used to hash a user's password.

```php
<?php

$hash = md5("the password");

?>
```

I will note that the `sha1()` and `hash()` functions are slightly more secure (especially in combination) but still don't give as much protection against hackers as Phpass.

## Using Phpass

It's actually very easy to start using Phpass, so go ahead and [download the framework at Openwall](http://www.openwall.com/phpass/). Extract and open the folder until you see the file `PasswordHash.php`. This is the only file that you will be needing so upload it to wherever your website files are stored.

You must then include the file into wherever you will be working with passwords.

```php
<?php

require("PasswordHash.php");

?>
```

Make sure that the path to `PasswordHash.php` is correct. If you receive no errors, then Phpass is ready to be used.

Next you will want to construct the class with the proper arguments. The default arguments specified should be fine for up-to-date installations of PHP. The first argument specifies the "base-2 logarithm of the iteration count used for password stretching" and the second argument specifies the use of portable hashes.

```php
<?php

$hasher = new PasswordHash(8, false);

?>
```

### Creating the Hash—Signup

For something like a signup system, you will now want to create a hash of the password. In a typical situation, the password will be coming from a form that the user filled out.

```php
<?php

// In this case, the password is retrieved from a form input
$password = $_POST["password"];

// Passwords should never be longer than 72 characters to prevent DoS attacks
if (strlen($password) > 72) { die("Password must be 72 characters or less"); }

// The $hash variable will contain the hash of the password
$hash = $hasher->HashPassword($password);

if (strlen($hash) >= 20) {

 // Store the hash somewhere such as a database
 // The code for that is up to you as this tutorial only focuses on hashing passwords

} else {

 // something went wrong

}

?>
```

The `$hash` variable now contains the hash that you will need to store somewhere such as a database. Make sure to never actually store the raw password, only the hash that Phpass generates.

Also take a note the following:

-   The password limit should be set to 72 characters to prevent certain DoS attacks. We do this here with the `strlen()` function.
-   The hash can never be less than 20 characters, so if it is then something went wrong during the encryption process. A simple if statement is done for this as well.

### Checking "Matched" Passwords—Login

For something like a login system, you will want to be able to check that the provided password matches up against your stored hash. Include the framework in if you haven't already.

```php
<?php

require("PasswordHash.php");

$hasher = new PasswordHash(8, false);

?>
```

There is no way to actually "decode" the hash (which is the point), instead we let Phpass do its magic for finding out if the password matches up against the stored hash.

```php
<?php

// Password from form input
$password = $_POST["password"];

// Passwords should never be longer than 72 characters to prevent DoS attacks
if (strlen($password) > 72) { die("Password must be 72 characters or less"); }

// Just in case the hash isn't found
$stored_hash = "*";

// Retrieve the hash that you stored earlier
$stored_hash = "this is the hash we stored earlier";

// Check that the password is correct, returns a boolean
$check = $hasher->CheckPassword($password, $stored_hash);

if ($check) {

  // passwords matched! show account dashboard or something

} else {

 // passwords didn't match, show an error

}

?>
```

The `$check` variable will return true if the passwords matched. It's a good idea to then either display some sort of account dashboard for the user, or redirect them to their profile. If the check failed, you will need to send them back to the login form or output some sort of error message.

## Extra Resources

That is all it takes to start using Phpass, so pat yourself on the back for being a security-aware developer. Of course you should also make sure that your website is safe against other vulnerabilities such as SQL Injection, which can also be easily fixed by using prepared statements or the [database framework](http://sunnyis.me/blog/database-framework/) I wrote earlier.

If you need a bit more help on getting started with Phpass, I recommend you check out this [starter project I made on GitHub](http://github.com/sunnysingh/phpass-starter). It basically follows all the steps in this post but is separated into files as well as including the Phpass framework. Also feel free to read the more lengthy [article about secure passwords on Openwall](http://www.openwall.com/articles/PHP-Users-Passwords "How to manage a PHP application's users and passwords").

**Looking for old comments?** [They are available on Disqus](https://disqus.com/home/discussion/sunnysingh/secure_passwords_with_phpass/), but I recommend you leave new comments using the new system below.
