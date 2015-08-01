/*global ticTacToe, $*/
"use strict";

//define global variable
var ticTacToe = ticTacToe || {};

//call functions after document is ready
$(document).ready(function() {

  var player = 0;

  function togglePlayer() {
    player = Math.abs(player - 1);
    return player;
  }

  function playerOWins() {
    console.log("Winner!");
    $("#instruct").html("<h2>Player O Wins!</h2>");
    $("#playAgain").toggleClass("hidden");
    $(".square").html("<h1>" + "O" + "</h1>");
    $(".square").addClass("win");
    $(".window").addClass("oWinBoard")
  }

  function playerXWins() {
    console.log("Winner!");
    $("#instruct").html("<h2>Player X Wins!</h2>");
    $("#playAgain").toggleClass("hidden");
    $(".square").html("<h1>" + "X" + "</h1>")
    $(".square").addClass("win");
    $(".window").addClass("xWinBoard")
  }

  function nobodyWins() {
    console.log("Nope");
    $("#instruct").html("<h2>Nobody Wins</h2>");
    $("#playAgain").toggleClass("hidden");
    $(".square").html("<h1>" + ":(" + "</h1>");
    $(".window").removeClass("xWinBoard");
    $(".window").removeClass("oWinBoard");
  }

  function playerMap() {
    if (player === 0) {
      return "O";
    } else if (player === 1) {
      return "X";
    }
  }

  function newGame() {
    $(".square").text(" ");
    $("#instruct").html("<h2>Player " + playerMap() + ", Go!</h2>");
    $("#playAgain").toggleClass("hidden");
    $(".square").removeClass("win");
    $(".window").removeClass("oWinBoard");
    $(".window").removeClass("xWinBoard");
  }

  //when user clicks on a square, the following happens:
  $(".square").click(function() {
    //function to change square contents to X or 0
    //if it is player O, and the square is not already full, change it to O
    //also change instructions text
    if (player === 0) {
      if ($(this).text() !== "O" && $(this).text() !== "X") {
        $(this).html("<h1>" + "O" + "</h1>");
        $('#instruct').html("<h2>Player X, Go!</h2>");
        checkIfEndGame();
        togglePlayer();
      }
    }
    //if it is not player O, it is player X, and the square is not already full, change it to X.
    //also change instructions text
    else {
      //debugger;
      if ($(this).text() !== "O" && $(this).text() !== "X") {
        $(this).html("<h1>" + "X" + "</h1>");
        $("#instruct").html("<h2>Player O, Go!</h2>")
        checkIfEndGame();
        togglePlayer();
      }
    }
  }); //<-on Click

  $('#playAgain').click(function() {
    console.log("button works");
    newGame();
  }); //<-button click


  function checkIfEndGame() {
    var x;

    function nobodyWinsFunc(x) {
      if (x === "O" || x === "X") {
        return true;
      }
    }
    if ($("#a1").text() === "O" && $("#b1").text() === "O" && $("#c1").text() === "O") {
      playerOWins();
    } else if ($("#a2").text() === "O" && $("#b2").text() === "O" && $("#c2").text() === "O") {
      playerOWins();
    } else if ($("#a3").text() === "O" && $("#b3").text() === "O" && $("#c3").text() === "O") {
      playerOWins();
    } else if ($("#a1").text() === "O" && $("#a2").text() === "O" && $("#a3").text() === "O") {
      playerOWins();
    } else if ($("#b1").text() === "O" && $("#b2").text() === "O" && $("#b3").text() === "O") {
      playerOWins();
    } else if ($("#c1").text() === "O" && $("#c2").text() === "O" && $("#c3").text() === "O") {
      playerOWins();
    } else if ($("#a1").text() === "O" && $("#b2").text() === "O" && $("#c3").text() === "O") {
      playerOWins();
    } else if ($("#c1").text() === "O" && $("#b2").text() === "O" && $("#a3").text() === "O") {
      playerOWins();
    }
    //now Xs
    else if ($("#a1").text() === "X" && $("#b1").text() === "X" && $("#c1").text() === "X") {
      playerXWins();
    } else if ($("#a2").text() === "X" && $("#b2").text() === "X" && $("#c2").text() === "X") {
      playerXWins();
    } else if ($("#a3").text() === "X" && $("#b3").text() === "X" && $("#c3").text() === "X") {
      playerXWins();
    } else if ($("#a1").text() === "X" && $("#a2").text() === "X" && $("#a3").text() === "X") {
      playerXWins();
    } else if ($("#b1").text() === "X" && $("#b2").text() === "X" && $("#b3").text() === "X") {
      playerXWins();
    } else if ($("#c1").text() === "X" && $("#c2").text() === "X" && $("#c3").text() === "X") {
      playerXWins();
    } else if ($("#a1").text() === "X" && $("#b2").text() === "X" && $("#c3").text() === "X") {
      playerXWins();
    } else if ($("#c1").text() === "X" && $("#b2").text() === "X" && $("#a3").text() === "X") {
      playerXWins();
    } else if (nobodyWinsFunc($("#a1").text()) === true && nobodyWinsFunc($("#b1").text()) == true && nobodyWinsFunc($("#c1").text()) === true && nobodyWinsFunc($("#a2").text()) === true && nobodyWinsFunc($("#b2").text()) === true && nobodyWinsFunc($("#c2").text()) === true && nobodyWinsFunc($("#a3").text()) === true && nobodyWinsFunc($("#b3").text()) === true && nobodyWinsFunc($("#c3").text()) === true) {
      nobodyWins();
    }
  } //<- if checkIfEndGame
}); //<-document ready
