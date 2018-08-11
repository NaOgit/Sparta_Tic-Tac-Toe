$(function() {

var playerTurn = true;
console.log(document.body);

var index = $('[index]');

$('[index]').click(function() {
  if ($(this).hasClass("X") || $(this).hasClass("O")) {
    alert("Position has been taken! Try again.")
  }
    if (playerTurn == true) {
    $(this).addClass("X").html("X");
    $("#message").html("It's Player 2's turn");
    playerTurn = false;

    checkWin($('#box0'),('#box1'),('#box2'),"Player 1");
    checkWin($('#box3'),('#box4'),('#box5'),"Player 1");
    checkWin($('#box6'),('#box7'),('#box8'),"Player 1");

  } else if (playerTurn == false) {
    $(this).addClass("O").html("O");
    $("#message").html("It's Player 1's turn");
    playerTurn = true;

    checkWin($('#box0'),('#box1'),('#box2'),"Player 2");
  }
});

function checkWin(box1, box2, box3, player) {
  if (player == "Player 1") {
    if ($(box1).hasClass("X")==true && $(box2).hasClass("X")==true && $(box3).hasClass("X")==true) {
      alert(player +" has won!");
    }
  }
  if (player == "Player 2") {
    if ($(box1).hasClass("O")==true && $(box2).hasClass("O")==true && $(box3).hasClass("O")==true) {
      alert(player +" has won!");
    }
  }
}








$('#restart').click(function() {
  $('td').removeClass("O X").html("");
});


});
