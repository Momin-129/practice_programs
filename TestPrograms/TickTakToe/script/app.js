let ticTakToe = [
  { 0: "", 1: "", 2: "" }, //0
  { 0: "", 1: "", 2: "" }, //1
  { 0: "", 1: "", 2: "" }, //2
];

let piece = "O";
let win = false;

function Win(i, j, piece) {
  let count = 0;
  console.log(ticTakToe[i]);
  for (let item in ticTakToe[i]) {
    // if (item[j] === piece) count++;
    console.log();
  }

  // for (let item in ticTakToe) {
  // }

  if (count == 3) {
    win = true;
    return;
  }
}

$(".col-md-4").click((event) => {
  let row = $(event.target).parent();
  let col = $(event.target);

  let i = parseInt($(row).attr("id"));
  let j = parseInt($(col).attr("id"));

  if (ticTakToe[i][j] == "") {
    if (piece == "O") piece = "X";
    else piece = "O";
    ticTakToe[i][j] = piece;
    Win(i, j, piece);
    $(col).html("<span id='token'>" + ticTakToe[i][j] + "</span>");
  }
});
