---
title: KISS Typescript
layout: post
tags: Programming
author: Tom Fishwick
last_modified_at: 2026-08-15
image:
  path: /assets/images/KissTypescript.jpg
  height: 278
  width: 215
  alt: PostCSS Path traversal in previous source map.
---

I had a fun day the other day updating the Vue JS part of my website.
DependaBot's 30 minute adventure, easy in easy out. 

> PostCSS Path traversal in previous source map...

"Easy," I thought, let's run NCU, test the output and then push it.
Did all that and then "Build failed" appeared back from GitHub.

It turns out that NCU upgraded Typescript to version 7 and Vue-TSC doesn't work with that.
And helpfully unless you build the code, not just run dev, then there is no indication that it failed.

I took the more permanent solution of ripping out Typescript.
Certainly for simple projects Typescript often adds nothing but complexity.
For more complicated projects it too often likes to argue about the types for dependencies (another project that DependaBot wishes me to update has this, where it told me off about what a load of the code in node_modules was doing.
Which is certainly nothing to do with me!).

The alternative to Typescript is JSDoc, a fully optional type system in JavaScript and it also lets you document your code as you go along[^1].
You put the types of variables your function expects and returns in (or the type of an individual variable).
Then VSCodium (or VSCode) will give you IntelliSence, which was my main usage of Typescript.
No extra build step, dependency or anything (unless you want to strip out comments/minify JavaScript).
No installing something from NPM and then having to install a separate type file.

```js
/** Test function
 * {number} x
 * {number} y
 * @returns {number}
 */
function test(x, y){
	return x + y;
}
```

I removed all of the Typescript off of my main website.
The React part I'm going to keep as Typescript, for now at least[^2].
Most of my programming experience is VB.Net and C#, so I am more than fine with typed languages.
When I did a load of stuff at University in Python, mostly I was using its optional type system and frankly I think that should have been how Typescript should have been, the types are straight in the language but there's no extra tooling or transpilation.

```python3
a: number = 2
```

My other project of the Cat v Dog image analyser.
I ended up ripping out Typescript, Babae and Jest.
Jest was being used for automated testing, as the project predated Node having a proper test system.
Babel was needed for Jest and for some more transpiling of JavaScript[^3].
Docker was something that I left in, it's used as part of the deployment and keeps everything predictable on deployment[^4].

[^1]: I don't believe in the myth of self-documented code. Especially on projects that I come back to infrequently.

[^2]: Part of me wants to move that onto the main site and not even have React.

[^3]: I'm not sure why past me wanted to over engineer this so much!

[^4]: it is very satisfying deleting code
