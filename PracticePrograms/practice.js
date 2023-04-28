let obj1 = {
  age: 23,
};

let obj2 = {
  age: 15,
};

function display() {
  console.log(this.age);
}

display.call(obj2);
