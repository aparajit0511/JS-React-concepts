// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
// Closure
// When a function has access to its parent's scope

function x() {
  var a = 8;
  return function y() {
    console.log(a);
  };
}

const b = x();
b();

// Higher order function
// A function that takes a function as an argument or returns a function

function x() {
  console.log("Namaste");
}

function y(x) {
  x();
}

y(x);
