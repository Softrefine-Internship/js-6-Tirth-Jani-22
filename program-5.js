// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

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

function getAllData(arr) {
  promiseArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    promiseArr.push(fetch(arr[i]).then((res) => res.json()));
  }
  Promise.all(promiseArr).then((val) => {
    for (let i = 0; i < val.length; i++) {
        const element = val[i].id;
        console.log(element);
        
        
    }
  });
}
getAllData(arr);
