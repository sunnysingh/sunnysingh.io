---
title: "Sharing state in React using built-in Context API"
tagline: A simple way of adding global state to a React app
date: 2019-02-05 8:00
tags: coding
---

Global state in React is synonymous with libraries like [Redux](https://redux.js.org/). If you ever needed to share state like the current route or data from an API with multiple components, then you may have reached for Redux yourself.

Newer versions of React (16.3+) include a built-in way to share state, which means not having to pull in an external library. This is known as the [React Context API](https://reactjs.org/docs/context.html) and it can be a bit tricky to learn. I hope to provide a simplified explanation and tutorial so that you can quickly add global state to any of your React apps.

## The problem we're trying to solve

Before I dive into the Context API, let me describe a problem scenario first.

Let's say that we have a dashboard where a user can update their username. The username is displayed throughout the dashboard so that means the username will be stored in component state and then passed to other components via props.

Without the Context API, we'd have do something like this:

```jsx
class Dashboard extends React.Component {
  state = { username: '' };

  render() {
    return (
      <div>
        <WelcomeMessage username={this.state.username} />
        <SettingsForm
          username={this.state.username}
          updateUsername={newUsername => {
            this.setState({ username: newUsername });
          }}
        />
      </div>
    );
  }
}
```

The username is stored in the state of the `Dashboard` component, and then passed via a `username` prop to both of the `<WelcomeMessage>` and `<SettingsForm>` components. An additional prop is passed to the form to update the state, which will then re-render the dashboard with the new username.

It's hard to see any problems with this right now. Consider what might happen though when we add more components to the dashboard that are deeply nested.

```jsx
<Dashboard>
  <WelcomeMessage>
    <MessageList>
      <UserMessage>
        <p>Need to show username here...</p>
```

In this example I'm attempting to show that `<UserMessage>` is 3 component levels deep inside the dashboard. To pass the username down to it, we need to do what is known as "prop drilling":

```jsx
<Dashboard>
  <WelcomeMessage username={this.state.username} />
    <MessageList username={this.props.username} />
      <UserMessage>
        <p>Hello {this.props.username}!</p>
```

This can get extremely tedious as we add more state and nested components. Plus, there's a chance that we need to access the username outside of the dashboard.

## How to use the Context API

A solution to this problem is to use the built-in [React Context API](https://reactjs.org/docs/context.html).

It allows you to avoid prop drilling, which means in our earlier example the `<UserMessage>` component will have direct access to the username state that was initially stored in the `<Dashboard>` component.

Let's start by creating a file for your context. I'll call it `user-context.js`.

In that file, add the following:

```jsx
import React, { createContext } from 'react';

export const UserContext = createContext({
  username: '',
  updateUsername: () => {},
});

export class UserProvider extends React.Component {
  state = {
    username: '',
    updateUsername: this.updateUsername,
  };

  updateUsername = newUsername => {
    this.setState({ username: newUsername });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserContextConsumer = UserContext.Consumer;
```

Let's break this file down.

First, the user context is created using `createContext()`. We have the default username and a function that we will create later for updating the username.

Next, we create a `UserProvider` component that will serve as the parent component to hold and manage the shared state. Think of this as an equivalent to the `<Dashboard>` component in our earliest example.
