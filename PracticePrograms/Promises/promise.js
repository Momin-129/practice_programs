let promise = new Promise((resolve, reject) => {
  const fetchData = fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (fetchData) resolve(fetchData);
  else reject("Error Fetching Record");
});

promise.then((res) => console.log(res)).catch((rej) => console.log(rej));
