$(function() {
//Declaring a variable to allowed turns
var playerTurn = true;
//Gameplay
var turns = 0;

$('[index]').on("click", function() {
  //Prevent overlapping gameplay
  if ($(this).hasClass("X") || $(this).hasClass("O")) {
    alert("Position has been taken! Try again.")
  }if (turns < 8) {
    //X will appear when it's Player 1's turn
    if (playerTurn == true) {
      $(this).addClass("X").html("X");
      $("#message").html("It's Player 2's turn");
      //Player 1's turn has ended
      playerTurn = false;
      //Counting turns
      turns++;
      //Check for winning combination inputs
      checkWin($('#box0'),('#box1'),('#box2'),"Player 1");
      checkWin($('#box3'),('#box4'),('#box5'),"Player 1");
      checkWin($('#box6'),('#box7'),('#box8'),"Player 1");
      checkWin($('#box0'),('#box4'),('#box8'),"Player 1");
      checkWin($('#box2'),('#box4'),('#box6'),"Player 1");
      checkWin($('#box0'),('#box3'),('#box6'),"Player 1");
      checkWin($('#box1'),('#box4'),('#box7'),"Player 1");
      checkWin($('#box2'),('#box5'),('#box8'),"Player 1");

    //O will appear when it's Player 2's turn
  } else if (playerTurn == false) {
      $(this).addClass("O").html("O");
      $("#message").html("It's Player 1's turn");
      //Player 2's turn has ended
      playerTurn = true;
      //Counting turns
      turns++;
      //Check for winning combination inputs
      checkWin($('#box0'),('#box1'),('#box2'),"Player 2");
      checkWin($('#box3'),('#box4'),('#box5'),"Player 2");
      checkWin($('#box6'),('#box7'),('#box8'),"Player 2");
      checkWin($('#box0'),('#box4'),('#box8'),"Player 2");
      checkWin($('#box2'),('#box4'),('#box6'),"Player 2");
      checkWin($('#box0'),('#box3'),('#box6'),"Player 2");
      checkWin($('#box1'),('#box4'),('#box7'),"Player 2");
      checkWin($('#box2'),('#box5'),('#box8'),"Player 2");
    }
    //If turns > 8
  } else {
      //Display a draw message
      $("#message").html("It's a draw!")
  }

});


//Function for chechking winning patterns is declared
function checkWin(box1, box2, box3, player) {
  if (player == "Player 1") {
    //Conditions to win for by Player 1
    //A combination of three positions must all be true
    if ($(box1).hasClass("X")==true && $(box2).hasClass("X")==true && $(box3).hasClass("X")==true) {
      //Message is sent to declare the winner
      $("#message").html(player +" has won!");
    }
  }
  //Conditions to win for by Player 2
  //A combination of three positions must all be true
  if (player == "Player 2") {
    if ($(box1).hasClass("O")==true && $(box2).hasClass("O")==true && $(box3).hasClass("O")==true) {
//Message is send to declare the winner
      $("#message").html(player +" has won!");
    }
  }
}

//Clear the grid after a winner is declared
$('#restart').click(function() {
  //All Xs and Os are removed
  $('td').removeClass("O X").html("");
  //Reset turns count back to 0
  turns = 0;
  //The winner from the last round will start
  $("#message").html("Let's play!")
});

});
