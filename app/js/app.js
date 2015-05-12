/*global ticTacToe, $*/
'use strict';

//define global variable
var ticTacToe = ticTacToe || {};

//call functions after document is ready
$(document).ready(function(){

//at first, first player=0
 //var player=0;

//to switch between players on each click:

    var player = 0;
    var playersArray = ['X', 'O'];

//endGame function!!

function checkIfEndGame(){
  if ($("#a1").text() === "O" && $("#b1").text() === "O" && $("#c1").text() === "O") {
    console.log('Winner!');
    $('#instructBox').html("<h2>Player O Wins!</h2>");
  }
}


//WRITE PLAY AGAIN BUTTON FUNC




//when user clicks on a square, the following happens:
  $('.square').click(function(){
//function to change square contents to X or 0
//if it is player O, and the square is not already full, change it to O
//also change instructions text
    if (player === 0) {
      if ($(this).text() !== "O" && $(this).text() !== "X") {
        $(this).html("<h1>" + "O" + "</h1>");
        $('#instruct').text("Player X, Go!");
        player = 1;
        checkIfEndGame();
        }
    }
  //if it is not player O, it is player X, and the square is not already full, change it to X.
//also change instructions text
    else {
      if ($(this).text() !== "O" && $(this).text() !== "X") {
        $(this).html("<h1>" + "X" + "</h1>");
        $('#instruct').text("Player O, Go!")
        player = 0;
        checkIfEndGame();
      }
    }
  }); //<-on Click
}); //<-document ready
