import { checkWin, drawLine } from "./functions.js";
let turn = "✘";
let moves = 0;
$("#info").html(`Player ${turn}'s turn.`);

$(".box").on("click", ".col-md-4", function () {
  moves++;
  $(this).html(turn);
  const [winCount, winSet] = checkWin(turn);
  if (moves == 9 && winCount != 3) {
    $("#info").html("Draw");
    $(".btnRestart").css("display", "block");
  } else {
    if (winCount == 3) {
      let line = drawLine(winSet);
      $(`.${line}`).css("display", "block");
      $("#info").html(`Player ${turn} Won.`);
      $(".img").css("display", "block");
      $(".btnRestart").css("display", "block");
    } else {
      if (turn == "✘") turn = "🔴";
      else turn = "✘";
      $("#info").html(`Player ${turn}'s turn.`);
    }
  }
});
