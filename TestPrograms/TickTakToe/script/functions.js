// 0 1 2
// 3 4 5
// 6 7 8
let winArray = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let winCount = 0;
let winSet = [];

export function checkWin(turn) {
  for (let arr of winArray) {
    for (let item of arr) {
      let value = $(`#${item}`).text();
      if (value === turn) {
        winCount++;
        winSet.push(item);
      }
    }
    if (winCount == 3) break;
    else {
      winCount = 0;
      winSet = [];
    }
  }
  return [winCount, winSet];
}

export function drawLine(winSet) {
  let line = "";
  let winArray = winSet.toString();
  if (winArray === [0, 1, 2].toString()) line = "top";
  else if (winArray === [0, 3, 6].toString()) line = "left";
  else if (winArray === [0, 4, 8].toString()) line = "leftToright";
  else if (winArray === [1, 4, 7].toString()) line = "centerV";
  else if (winArray === [2, 5, 8].toString()) line = "right";
  else if (winArray === [2, 4, 6].toString()) line = "rightToleft";
  else if (winArray === [3, 4, 5].toString()) line = "centerH";
  else if (winArray === [6, 7, 8].toString()) line = "bottom";

  return line;
}
