let promise = new Promise((resolve, reject) => {
  const fetchData = fetch("https://dummyjson.com/products/");

  resolve(fetchData);
});

promise.then((res) => res.json()).then((res) => console.log(res));
