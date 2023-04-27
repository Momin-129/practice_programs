{
  let arr = [];
  for (var i = 1; i <= 50; i++) arr.push(i);

  const a = arr.filter(divideby2_5);

  function divideby2_5(item) {
    return item % 2 == 0 && item % 5 == 0;
  }
  console.log(a);
}

{
  let arr = ["Momin", "Ashima", "Sapna", "Muneesh", "Shivam"];
  const values = arr.filter((item) => item.length > 5);
  console.log(values);
}

{
  let arr = [1, 2, 3, 4, 5, 6];
  const value = arr.find((item) => item % 2 == 0); // find return first element only
  console.log(value);
}

{
  let arr = [1, 2, 3, 4, 5, 6];
  const a = arr.reduce(rFun);
  function rFun(total, value) {
    return total + value;
  }
  console.log(a);
}

{
  let arr = ["momin", "Momin"];
  let new_arr = arr.map((item) => item).sort();

  console.log(new_arr);
}

let arr = [1, 2, 3, 4, 5];

let primeNumbers = arr.filter(isPrime);
function isPrime(item) {
  let flag = 0;
  for (var i = 2; i <= Math.sqrt(item); i++) {
    if (item % i == 0) {
      flag = 1;
    }
  }
  if (flag == 0 && item != 1) return item;
}

console.log(primeNumbers);
