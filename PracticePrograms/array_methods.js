{
  //To Sort Array Numerically
  let numbers = [45, 4, 9, 16, 25];
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers);
}

{
  //To Sort Array Alphabatically
  let numbers = [45, 4, 9, 16, 25];
  numbers = numbers.sort();
  console.log(numbers);
}

{
  // forEach() method
  let numbers = [45, 4, 9, 16, 25];
  numbers.forEach((item) => {
    console.log(item);
  });
  //numbers.forEach(forFunction);

  //  function forFunction(value, index) {
  //  console.log("Index: " + index + " Value: " + value);
  //}
}

{
  // map() method
  let numbers = [45, 4, 9, 16, 25];
  let a = numbers.map(forFunction);

  console.log(a);

  function forFunction(value) {
    return value * 2;
  }
}

{
  // filter() method
  let numbers = [45, 4, 9, 16, 25];
  let a = numbers.filter(forFunction);

  console.log(a);

  function forFunction(value) {
    return value > 15;
  }
}

{
  // reduce() method
  let numbers = [45, 4, 9, 16, 25];
  let a = numbers.reduce(forFunction);

  console.log(a);

  function forFunction(total, value) {
    return total + value;
  }
}

{
  //indexOf() method
  let fruits = ["Apple", "Mango", "Orange", "Banana", "Kiwi"];
  console.log("Orange is found at location: " + (fruits.indexOf("Orange") + 1));
}

{
  //lastIndexOf() method
  let fruits = ["Apple", "Mango", "Orange", "Apple", "Kiwi"];
  console.log("Found at location: " + (fruits.lastIndexOf("Apple") + 1));
}

{
  // Array.from() method
  let arr = Array.from("ABCDEFG");
  console.log(arr);
}

{
  // keys() and entries()
  let fruits = ["Apple", "Mango", "Orange", "Banana", "Kiwi"];
  for (var i of fruits.keys()) {
    console.log(i + " " + fruits[i]);
  }
  for (var j of fruits.entries()) {
    console.log(j);
  }
}

{
  // includes() method
  let fruits = ["Apple", "Mango", "Orange", "Banana", "Kiwi"];
  console.log(fruits.includes("Cherry"));
}

{
  // spread operator (...) : quikcly copy elements of array or object to another array or object
  const numbers = [1, 2, 3, 4, 5, 6];
  const [one, two, ...rest] = numbers;
  console.log(one);
  console.log(two);
  console.log(rest);
}

{
  // using spread operator to copy two objects into one
  const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
  };

  const updateMyVehicle = {
    type: "car",
    year: 2021,
    color: "yellow",
  };

  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
  console.log(myUpdatedVehicle);
}
