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
  const a = arr.filter((item) => item.length > 5);
  console.log(a);
}
