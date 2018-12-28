---
title: Database Framework
tagline: I announce and give a short tutorial for my PHP database framework
date: 2011-08-23 20:00
topics: coding, security, php, mysql
---

**Notice**: I wrote this article 3 years ago and thus may contain outdated information. While I can not guarantee updates on this framework, it does wrap around MySQLi and thus should still be secure.

I published my first project on GitHub called [Database](http://github.com/sunnysingh/database) (super clever name, I know) which is a PHP framework for MySQL that makes interacting with databases easier. The purpose of this article is to introduce you to the MySQLi extension that it uses, and to explain why I built this framework.

## The Problem

For years I've been using the [MySQL database extension](http://www.php.net/manual/book.mysql.php "Documentation on the MySQL database extension") which you might typically know as the `mysql_*` functions in PHP. I never found a problem with it until recently when I realized that it is an outdated and insecure way to interact with MySQL databases. I am probably really late to realize that, but I still see a ton of people using these functions.

For those of you that still use the MySQL extension functions such as `mysql_connect()`, don't be alarmed. It's fairly secure and gets the job done, and is probably the simplest way to use MySQL in PHP. However, these functions are extremely old now and don't support many of MySQL's latest features. Not only that but there are better options out there that will help secure your queries and prevent vulnerabilities such as SQL injection. If you're starting a new website, doing a redesign, or simply want to add something new to your skill set, please read on.

## MySQL Improved: Pros and Cons

The "i" in MySQLi stands for improved (some say it can also stand for interface), so you can already guess that it's better. The main pros are speed, performance, security, and that it's written in an Objected Oriented Programming (OOP) style. It also has a procedural API with function aliases, but that's only to make old code easy to convert to the MySQLi extension.

The only con it has is the amount of code needed to execute and fetch results from a single query. Here's a quick example of some code written using MySQLi:

```php
<?php
$db = new mysqli("host", "username", "password", "database");
$stmt = $db->prepare("SELECT first_name, last_name FROM users WHERE id = ? AND username = ?")
if ($stmt) {
 $stmt->bind_param("is", $_GET["id"], $_GET["username"]);
 $stmt->execute();
 $stmt->bind_result($first_name, $last_name);
 while ($stmt->fetch()) {
  echo "First Name: ".$first_name; echo "Last Name: ".$last_name;
 }
 $stmt->close();
}
$db->close();
?>
```

Here's a not so quick walk-through of this mess of code, line-by-line:

1.  Sets up the database connection and creates the `$db` object that will contain all the methods we need.
2.  Similar to `mysql_query()` except that we replace all variables with question marks (a.k.a. markers or placeholders). This is a feature of MySQLi that prevents SQL injection completely.
3.  Makes sure there are no errors in the query.
4.  Bind the parameters (variables) that will replace the markers in our query. The first argument specifies that we have an integer and a string, while the rest of the arguments are your variables. You don't need to escape them because MySQLi treats our query and parameters separately, making it fine to use values from `$_GET` or `$_POST`.
5.  Execute the query we've "prepared."
6.  Finally, retrieve the result and setup the variables we'd like to retrieve them as.
7.  Loops through the result.
8.  Here I'm just echo-ing out the data, but you can do whatever you want with it.
9.  Close loop.
10. Close the statement (if you don't, you'll get errors while executing multiple queries).

As you can see, it's a very daunting task to execute a query and then fetch the results. I can definitely code this using the `mysql_*` functions and use less lines of code, but like I said before: you really want to take advantage of all the new features of MySQL and make your queries as secure as possible (unless you like getting hacked).

But you may be thinking, if the `mysql_*` functions are so bad, then why did they make using MySQLi so hard? To be honest, I don't know. All I know is that there are many benefits to using MySQLi and I hope the framework I'm about to talk about will help aid more people to stop using those outdated functions.

## Introducing the Framework

Using MySQLi shouldn't be hard at all, and so that is why I've written this framework. It is more than a class wrapper: it cleans up the syntax needed to execute a query and adds methods specifically for fetching data. If you're itching to get started with it, you can [get the full source on GitHub](http://github.com/sunnysingh/database). I really recommend that you look at the docs, test it out for yourself, and let me know what you think. If you think it's stupid, fine don't use it but at least give me your constructive opinion. If you think it's the greatest thing since the Internet, then I'd love to know your opinions as well.

### A Taste

```php
<?php

$db = new Database($name, $host, $username, $password);

$name = $_GET["name"];
$age = $_GET["age"];

$insert = $db->query("INSERT INTO people (name, age) VALUES(?, ?)", array($name, $age));

if ($insert !== false) {
 $name = $db->fetch_field("SELECT name FROM people WHERE age = '123' LIMIT 1");
 echo $name;
}

?>
```

There's a little taste of some of the code that makes use of a few great features of the database framework. What you should notice is how easy it is to setup a database connection, execute a secure insert statement, check if that insert was successful, and then retrieve some of the data we just inserted. This also looks nicer (and shorter) than the previous example, doesn't it?

## Feedback

I hope some of you find this framework useful and I'd love to get some feedback on it. I built this out of personal need, but decided to open source it and give something back to the developer community. That's all for now though, thanks for wasting your time to read this.
