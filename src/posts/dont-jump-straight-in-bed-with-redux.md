---
title: "Don't jump straight in bed with Redux"
description: Understand how Redux works, and why you are using it in your app.
date: 2023-07-05
published: true
---

Understand how Redux works, and why you are using it in your app.

Are you using it just to avoid prop drilling because your app requires many components to access the same pieces of state? Since version 16.3, [React has created a new Context API](https://legacy.reactjs.org/blog/2018/03/29/react-v-16-3.html#official-context-api) to address this exact situation. [Learn how to use it](https://react.dev/learn/passing-data-deeply-with-context) to pass data deeply.

Is Redux used in your app to help with caching state from the server and nothing else? Check out Vercel's [SWR library](https://swr.vercel.app/) or [TanStack Query](https://tanstack.com/query/latest) (formerly react-query). These libraries are designed for just this use case, which means you probably don't need Redux at this point in your app.

### Why?

Redux is a full-featured, opinionated state management tool. It can do many things, but maybe isn't the best at all of them (Mark Erkson, maintainer of Redux, said so himself in [this episode on the JS Party podcast](https://changelog.com/jsparty/146) right around the hour-and-2-minute mark). Understanding what Redux does and the specific needs of your application allow you to decide the best tools to integrate with your application, instead of running `npm install react-redux` right after you create your React app and introduce indirection and unnecessary cluttering in your code.

If after you evaluate your needs and find a match in Redux's capabilities, then by all means, use Redux. It can do some things really well, like:

- Preserving a single source of truth
- Managing large amounts of application state that constantly change
- Handling complex logic to update state
- Maintaining a history of how the application state has changed over time
- Caching state from a server

Oh, and before you get started, you might want to know, [Redux Toolkit](https://redux-toolkit.js.org/) is now the [officially-recommended](https://redux.js.org/introduction/why-rtk-is-redux-today) way to use Redux.
