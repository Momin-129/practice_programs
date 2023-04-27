//Q6 Fibannoci Series (iterative)
let a = 0,
  b = 1,
  range = 8;
let sum = a + b;
let list = [];
list.push(a);
list.push(b);
for (let i = 2; i <= range; i++) {
  list.push(sum);
  a = b;
  b = sum;
  sum = a + b;
}
console.log(list);
