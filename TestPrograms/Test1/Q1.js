//Q1: Sum of digits of a number
//Input : 12345
//Output: 15

let input = 12345;
let sum = 0;

while (input != 0) {
  remainder = input % 10;
  sum += remainder;
  input = Math.floor(input / 10);
}

console.log(sum);
