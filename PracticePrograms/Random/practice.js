// let obj1 = {
//   age: 23,
// };
//
// let obj2 = {
//   age: 15,
//   display: function (location, pincode) {
//     console.log(this.age, location, pincode);
//   },
// };
//
// obj2.display.call(obj2, "Jammu", "180001");
//
// let x = obj2.display.bind(obj1);
// x("Jammu", "180001");
//
//

// let obj1 = {
//   age: 23,
// };
//
// let obj2 = {
//   age: 15,
//   display: function (location, pincode) {
//     console.log(this.age, location, pincode);
//   },
// };
//
// obj2.display.apply(obj1, ["Jammu", "180001"]);

//

// obj2.display.call(obj2, "Jammu", "180001");
//
// let object = { name: "Momin", age: 23 };
//
// function display() {
//   console.log(this.age);
// }
//
// let person = display.bind(object);
//
// person();
