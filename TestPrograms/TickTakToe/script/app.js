import { checkWin, drawLine } from "./functions.js";
let turn = "X";

$("#info").html(`Player ${turn}'s turn.`);

$(".box").on("click", ".col-md-4", function () {
  $(this).html(turn);
  const [winCount, winSet] = checkWin(turn);
  if (winCount == 3) {
    let line = drawLine(winSet);
    $(`.${line}`).css("display", "block");
    $("#info").html(`Player ${turn} Won.`);
    $(".img").css("display", "block");
  } else {
    if (turn == "X") turn = "0";
    else turn = "X";
    $("#info").html(`Player ${turn}'s turn.`);
  }
});
