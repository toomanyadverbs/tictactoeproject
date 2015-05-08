/*global ticTacToe, $*/
'use strict';

var ticTacToe = ticTacToe || {};

$(document).ready(function(){

  var player=0;


  $('.square').click(function(){

    var sq = this;
    player = 0;

    var player = ['X', 'O'];

    player=(1 - player);


    // function changePlayer(arg1){
    //   if (player===0)
    //   {return player===1}
    //   else {return player===0}
    //   };


    if (player === 0) {
      if (sq !== "X" || "O") {
        $(sq).html("<h1>" + "O" + "</h1>");
        }
      $('#instruct').text("Player X, Go!");
      changePlayer(player);
    }
    else {
      if (sq !== "X" || "O") {
        $(sq).html("<h1>" + "X" + "</h1>");
        }
      $('#instruct').text("Player O, Go!")
      changePlayer(player);
    };
  });

});
