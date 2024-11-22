---
title: Farewell to Railway
layout: post
categories: Hosting Python Typescript
author: Tom Fishwick
---

Recently Railway.app announced a change to their pricing structure, so I took the opportunity to revamp my flask app that ran on there to chart the stock market. It now uses Chart JS instead of MatPlotLib as the most visible difference from before.

![Chart the Stock Market](/assets/images/ChartTheStockMarket.jpg)

I also moved the front end code's reference to sockets.io into the node modules, minified the CSS and made a few other amendments which massively boosted the performance of the site (running locally this gets it a score of 97 for performance on lighthouse).

The site now lives on Render.com, but its URL of [stocks.link477.com](https://stocks.link477.com) stays the same.

## Knowledge Graphs

On a separate note another project I finished was on Knowledge Graphs. This was part of Semantic Web Technologies and Knowledge Graphs, an optional module at City University which I regretted not having chosen, the specifications of the coursework were available on the internet (and I did go to a few of the lectures and heard about it). So once university was over I had a go at it and my repo is [here](https://github.com/SL477/Pizza_KG).

![Class Relationships](/assets/images/SWTKGClassRelationships.jpg)

The best technology from Knowledge Graphs is SPARQL, it is a lot like SQL but the joins are in the where clause. I do like the fact that you can have the entire database in one file which you can read (unlike any SQL variant I've used) and I prefer it over NOSQL, but unless it takes off in popularity I cannot see it overtaking SQL or NOSQL.

The modules I chose over SWTKG were Computer Vision and Deep Reinforcement Learning.

### Deep Reinforcement Learning

Deep Reinforcement Learning I would have regretted not taking (though the amount of stress made me regret taking it), it involved making a mini computer game that first a simple bot could try to play and then building various AI agents using Torch that could play a more complicated version of the game implementing various algorithms effectively from the literature (some day I may make a version that is playable by humans).

The game I also implemented more of less from scratch, using only Numpy and MatPlotLib to store the data about the level and display it. Displaying it was important just for debugging purposes, though it can sort of be played though an IPython notebook as that was how I checked the movement, visibility, animations and collision checking.

For checking what an earth the AI was doing I was able to dump the generated images from MatPlotLib into an MP4 file. This was rather helpful as there was only so much you could tell from the blow by blow stats from the game.

I'm not too sure that the AI models I built from scratch were completely correct as the ones from the library were much better (though only once did any model ever win the game).

Finally we had to build a much more complicated AI, but this time we could use a ready made game (I used Space Invaders). The AI basically sat in one place and shot upwards until it died, which I would say was unsporting.

### Computer Vision

This one was quite enjoyable, apart from only having about a week to do it as DRL's coursework had taken over my life. It involved training an AI model to recognise emotions on images, getting a face detector to find faces in the video of our choice (I chose Fantastic Beasts Secrets of Dumbledore's trailer), send the pictures of those faces to the face detector model in the format required and finally stitch the video back together annotating the faces to show the bounding boxes and the AI's interpretation of their emotions.
