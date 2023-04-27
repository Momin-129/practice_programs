//Q5: Apply Linear Search Algorithm
input = [
  "Momin",
  "Shivam",
  "Muneesh",
  "Deepanshu",
  "Ashima",
  "Sapna",
  "Diksha",
];
let ToSearch = "Deepanshu";

for (let i = 0; i < input.length; i++) {
  if (input[i] == ToSearch) {
    console.log(ToSearch + " found at index " + i);
  }
}
