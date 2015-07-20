# TIC TAC TOE

A simple browser tic-tac-toe game using Javascript, jQuery, HTML, and CSS; deployed through Firebase.

##About

This was my first Javascript app. The project was to create a tic-tac-toe game to play in the browser using HTML/CSS/Javascript.

##To Play:
Go to the [Firebase App](https://toomanyadverbs-ttt.firebaseapp.com/)

##User Stories

1. User on the page can see the tic-tac-toe board.
  a. At the bottom of the board, it says 'Player One, go!'
2. User can click on the grid where they want to place their piece, and the 'O' piece appears there.
  a. The bottom of the board now says 'Player X, go!'
3. User can click on the board again, anywhere except where an O piece already is, and the X piece appears there.
  a. 'Player O, Go'
4. Steps 2 and 3 repeat until three Xs or three Os are in a row, OR until there are no more empty squares. Then the board is no longer clickable.
  a. If someone has placed three in a row, the banner displays, 'Player O (or X) wins!'. An image appears behind the gameboard as a reward to the winner. A button appears that says 'Play again?'
  b. If there are no more empty squares, the banner displays, 'Nobody Wins.' The 'Play again?' button appears.
5. User can click 'Play again' and the page refreshes, bringing them back to an empty board.

##Known Issues

Although functional, the code for this app could be more DRY. Several functions could be consolidated or refactored. In addition, the game-state is stored in the HTML instead of in a Javascript array. This would not be good practice for a larger app.

In addition, the 'win' image loads with the 'win' function, and so there is a lag time in its loading.

If I were to keep working on this app, these are the first things I would change.

# AUTHORS
Lindsey Grimes
General Assembly Web Development Immersive
5/15/15
