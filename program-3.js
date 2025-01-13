//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const arr = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
];
for (let i = 0; i < arr.length; i++) {
  fetch(arr[i]).then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  });
}
