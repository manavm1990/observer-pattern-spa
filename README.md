# Using the Observer Pattern to `render` a Single Page Application (SPA)

I came to have a better understanding of the [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern) as it applies to JS after reading [this](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/).

As a result, I created this simple app (not even any CSS! 😳) that incorporates [ES6 Proxies.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

This example also modularizes _state,_ albeit this app is simple enough to only have a single piece of `state` that gets updated. However, this pattern could certainly be applied for more complex apps, conceivably.

## Get Started

`npm run serve` (after `npm i`, of course).
