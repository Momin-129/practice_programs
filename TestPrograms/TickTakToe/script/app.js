let ticTakToe = [
  { 0: "", 1: "", 2: "" }, //0
  { 0: "", 1: "", 2: "" }, //1
  { 0: "", 1: "", 2: "" }, //2
];

let piece = "X";
let win = false;
let winner = [];
let rCount = 0,
  cCount = 0,
  d1Count = 0,
  d2Count = 0;

function rowWise(i, j, piece, parentId) {
  for (let item in ticTakToe[i]) {
    if (ticTakToe[i][item] === piece) {
      rCount++;
      let div = $("#" + parentId).children("#" + item);
      winner.push(div);
    }
  }
  return rCount;
}

function colWise(i, j, piece) {
  let row = 0;
  for (let item of ticTakToe) {
    if (item[j] === piece) {
      cCount++;
      let div = $("#r" + row).children("#" + j);
      winner.push(div);
    }
    row++;
  }
  return cCount;
}

function diag1(piece) {
  let row = 0;
  ticTakToe.map((a, i) => {
    if (a[i] == piece) {
      d1Count++;
      let div = $("#r" + row).children("#" + i);
      winner.push(div);
    }
    row++;
  });
  return d1Count;
}

function diag2(piece) {
  let row = 0;
  ticTakToe.map((a, i) => {
    if (a[i] == piece) {
      d2Count++;
      let div = $("#r" + row).children("#" + i);
      winner.push(div);
    }
    row++;
  });
  return d2Count;
}

function Win(i, j, piece, parentId) {
  let ret = rowWise(i, j, piece, parentId);

  if (ret != 3) {
    rCount = 0;
    winner = [];
    let ret = colWise(i, j, piece);
    if (ret != 3) {
      cCount = 0;
      winner = [];
      let ret = diag1(piece);
      if (ret != 3) {
        d1Count = 0;
        winner = [];
        let ret = diag2(piece);
        if (ret != 3) {
          d2Count = 0;
          winner = [];
        }
      }
    }
    console.log(d1Count, d2Count);
  }
  if (rCount == 3 || cCount == 3 || d1Count == 3 || d2Count == 3) win = true;
  // console.log(ret, win);
}

$(".col-md-4").click((event) => {
  let row = $(event.target).parent();
  let col = $(event.target);

  let i = parseInt($(row).attr("value"));
  let j = parseInt($(col).attr("id"));
  let parentId = $(row).attr("id");

  if (ticTakToe[i][j] == "") {
    if (piece == "O") piece = "X";
    else piece = "O";
    ticTakToe[i][j] = piece;
    $(col).html("<span id='token'>" + ticTakToe[i][j] + "</span>");
    Win(i, j, piece, parentId);
    if (win) {
      console.log("player ", piece, " wins");
      console.log(winner);
      winner.forEach((item) => $(item).css("border", "4px solid red"));
    }
  }
});
