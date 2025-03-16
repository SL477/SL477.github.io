---
title: Ruby Chess
layout: post
tags: Ruby
author: Tom Fishwick
image: /assets/images/rubyChess.jpg
image_width: 273
image_height: 277
photo_alt: Chess Game
last_modified_at: 2025-03-16
---

I created a chess game as part of the [Odin Project](https://www.theodinproject.com/).

At the moment it is played through the terminal using:

```ps1
ruby .\ruby\chess.rb
```

It is entirely text based, the chess pieces are emojis (♚) and the cells are spaces with the background set to either white or black (if you preview moves you will get a lot more colours).

The AI uses the min-max algorithm, based upon the one in the tic-tac-toe game I made, but a bit more complicated.
If the algorithm breaks due to too many potential moves, then it will pick a move at random.

The Chess class contains the code for the UI (apart from the extensions to the string class for changing the background), the AI and interactions.

The Chess Piece class contains the code for testing for Check/Check Mate and extendable methods for checking moves (each piece extends this class with its own particular logic).

![Check Mate](/assets/images/rubyChessCheckmate.jpg)

The AI is not exactly smart, it can only see 3 moves ahead and takes its time to think about each move.

In Chess Spec I have various tests, mostly for move checking.

At some point I intend to add this to the website.
