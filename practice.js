{
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
}

{
  //Q2: Check whether a number is armstrong or not
  //Input1: 371
  //Ouput: yes
  //
  //Input2: 321
  //Ouput: no

  let input = 321;
  let arm = input;
  let sum = 0;
  while (arm != 0) {
    r = arm % 10;
    sum += r * r * r;
    arm = Math.floor(arm / 10);
  }
  if (sum == input) {
    console.log(input + " is an armstrong");
  } else {
    console.log(input + " is not armstrong ");
  }
}

{
  //Q3: Count number of even and odd numbers in a given array
  let arr = [3, 6, 8, 7, 13, 98, 76];
  let e = 0,
    o = 0;
  for (var i of arr) {
    if (i % 2 == 0) e++;
    else o++;
  }

  console.log("Total Even Numbers in array are: " + e);
  console.log("Total Odd Numbers in array are: " + o);
}

{
  //Q4: Print the number of vowels and consonants in give sentence
  let input = "How many vowels in a given sentence";
  let vowel = 0,
    consonants = 0;
  for (let i of input) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      vowel++;
    } else {
      consonants++;
    }
  }
  console.log("INPUT: " + input);
  console.log("Total Vowels: " + vowel);
  console.log("Total Consonants: " + consonants);
}

{
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
}

{
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
}

{
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
}

{
  //Q8: Conactenate Array to itself
  input = [1, 2, 1];
  input = input.concat(input);
  console.log(input);
}
