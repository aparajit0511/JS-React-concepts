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

//----------------------------------------------------------------------------------

// Higher order function
// A function that takes a function as an argument or returns a function

function x() {
  console.log("Namaste");
}

function y(x) {
  x();
}

y(x);

//----------------------------------------------------------------------------------

// call . apply , bind
// call
var obj1 = {
  firstName: "Aparajit",
  lastName: "Chatterjee",
};

var obj2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

function display(hometown, state) {
  console.log(this.firstName, this.lastName, hometown, state);
}

display.call(obj1, "lucknow", "UP");
display.apply(obj2, ["Mumbai", "MH"]);
const b = display.bind(obj2, "Mumbai", "MH");
console.log(b);

//----------------------------------------------------------------------------------

// Hosting
// Declaring a variable or function before initializing

console.log(a);
getName();

var a = 7;
console.log(a);
function getName() {
  console.log("Namaste");
}

getName();
