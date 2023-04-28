let obj1 = {
  age: 23,
};

let obj2 = {
  age: 15,
  display: function (location) {
    console.log(this.age, location);
  },
};

let x = obj2.display.bind(obj1);
x("Jammu");
