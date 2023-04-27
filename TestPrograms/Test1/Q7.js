//Q7: Fibannoci Series (recursion)

let a = 0,
  b = 1,
  start = 1;

function fibSeries(a, b, sum, start) {
  if (start == 7) {
    list.push(sum);
  } else {
    list.push(sum);
    a = b;
    b = sum;
    sum = a + b;
    fibSeries(a, b, sum, start + 1);
  }
}

let sum = a + b;
let list = [];
list.push(a);
list.push(b);
fibSeries(a, b, sum, start);
console.log(list);
