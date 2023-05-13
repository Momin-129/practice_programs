let promise = new Promise((resolve, reject) => {
  const fetchData = fetch("https://jsonplaceholder.typicode.com/todos/1");

  resolve(fetchData);
});

promise.then((res) => console.log(res)).catch((rej) => console.log(rej));
