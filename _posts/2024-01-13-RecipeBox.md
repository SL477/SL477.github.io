---
title: Recipe Box Move
layout: post
tags: Hosting Typescript
edited: Changed links
author: Tom Fishwick
---

The time finally came when this site got too big and I started moving things.

The recipe box used to sit within this website's repository. But now lives on its own [repo](https://github.com/SL477/RecipeBox) (since moved to [here](https://github.com/SL477/Link477-React)).

To enable it to look like it is still a part of this site, I converted my NavBar to a web-component. It has been raw HTML, a React Component and a Jekyll component in its life time. I do like the idea of web-components and will hopefully use more of them (hopefully one less complicated than the NavBar, which is sort of a jekyll component so that the blog section is automatically updated).

The recipe box is my first Vite react app. As a user of Create-React-App its nice to see NPM Audit bring back no errors. I'm not sure I noticed any differences in performance, but it is only a one-page app (which I'm sure could be done with pure JavaScript like the NavBar).

Previously the recipe box was a JavaScript class based component (I learnt React from FreeCodeCamp which loved the class based version), before I turned it into a functional component and now it is a TypeScript functional component.

<iframe src="https://link477.com/Link477-React/#/recipeBox/" title="Recipe Box" width="80%" height="500px">
