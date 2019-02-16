---
title: 'Sharing state in React using built-in Context API'
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

<Alert>
  A fully working example is{' '}
  <AlertLink href="https://codesandbox.io/s/kk3myozr5o">
    available on CodeSandbox
  </AlertLink>
  .
</Alert>

### Create provider and consumer components

Let's start by creating a file for your context. I'll call it `user-context.js`.

In that file, add the following:

```jsx
import React, { createContext } from 'react';

const UserContext = createContext({
  username: '',
  updateUsername: () => {},
});

export class UserProvider extends React.Component {
  updateUsername = newUsername => {
    this.setState({ username: newUsername });
  };

  state = {
    username: 'user',
    updateUsername: this.updateUsername,
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
```

Let's break this file down.

First, the user context is created using `createContext()`. The values here will be overriden by the `UserProvider`.

Next, we create a `UserProvider` component that will serve as the parent component to hold and manage the shared state. Think of this as an equivalent to the `<Dashboard>` component in our earliest example.

Finally, we export a `UserConsumer` component which will allow components to access the shared state.

### Using the provider

The `<UserProvider>` component needs to wrap around all components that share state. The simplest way is to add it in your main app component, which is usually the one that gets rendered to the DOM by React.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import UserMessage from './UserMessage';
import SettingsForm from './SettingsForm';
import { UserProvider } from './user-context';

function App() {
  return (
    <UserProvider>
      <UserMessage />
      <SettingsForm />
    </UserProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

We are also importing two other components here: `UserMessage` and `SettingsForm`. These two components will be accessing the shared user state.

### Using the consumer to read state

One use case for shared state is to display it. In this case, we'll display the current username. Create a file called `UserMessage.js` and add the following to it:

```jsx
import React from 'react';
import { UserConsumer } from './user-context';

export default function UserMessage() {
  return (
    <UserConsumer>
      {({ username }) => <h1>Welcome {username}!</h1>}
    </UserConsumer>
  );
}
```

In this file, we've created a `UserMessage` component which displays a "Welcome username" message. The username is retrieved from the `UserConsumer` component that is being exported from `user-context.js`.

Inside of `<UserConsumer>`, we pass what is called a [render prop](https://reactjs.org/docs/render-props.html). In this case, it's a function where we can grab parts our state and render something with it.

## Using the consumer to update state

Another use case for shared state is to update it. In this case, we'll provide a form for the user to update their username. Create a file called `UserSettings.js` and add the following to it:

```jsx
import React from 'react';
import { UserConsumer } from './user-context';

export default function UserSettings() {
  return (
    <UserConsumer>
      {({ updateUsername }) => (
        <div>
          <h2>Settings</h2>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            onChange={event => {
              updateUsername(event.target.value);
            }}
          />
        </div>
      )}
    </UserConsumer>
  );
}
```

This is similar to the previous example, except instead of grabbing the username we grab the `updateUsername` function to update it.

## Overview

If you're confused at this point, I highly recommend that you look at the [working CodeSandbox example](https://codesandbox.io/s/kk3myozr5o) which brings everything together.

Also, here's a quick overview of the main concepts:

- A provider component wraps the entire app to manage shared state.
- A consumer component is used to access or update shared state.
- The `user-context.js` file exports both of these components and the shared state is stored in the `<UserProvider>` component.
- The `<UserMessage>` and `<SettingsForm>` components read and update shared state by simply importing and using the `<UserConsumer>` component.
- You can read and share state from anywhere in your app assuming that `<UserProvider>` is wrapping your entire app.

That's it. Feel free to use this feature to share state for navigation, modals, or even data. The power is in your hands 💪
