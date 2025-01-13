// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
function repeat(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

repeat(()=>{
    console.log('Hi There');
    
})
