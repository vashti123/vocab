/*
To start a new project:

In terminal:
cd OneDrive/Programming
mkdir *newProjectName*
cd *newProjectName*
touch app.js
npm init
*/

// Variable
// A value that can change

let value = 10 // Declare variable
console.log(value);
value = 8
console.log(value);

// Constant
// A variable whose value cannot change
// Convention says constants should be ALL CAPS

const VALUE2 = 11; // Declare constant
// VALUE2 = 8; // This will give you an error
// TypeError: Assignment to constant variable.

// Arrays
// A variable with LIST of values
// Arrays use square brackets

let classmates = ['Josh', 'Noah', 'Harry']; // Seperate each value with a comma
// Access them by their index (index starts at 0)
console.log(classmates[0]);
console.log(classmates[1]);
console.log(classmates[2]);
// For loops
// Usually used to loop through lists
for(let classmate of classmates){
  console.log(classmate)
}

// Statement
// A line of code that executes

let value3 = 9;
console.log(value3);
// If you can end the line in a semicolon, it's a statement

// Conditional Statement
// A statement that only executes if the given condition is not False

// if Statement

// null, undefined, 0, and false are False
// Everything else is True
let value4 = true;
// Condition in paranthesis. If not False, do everything inside curly braces
if (value4) {
  console.log('Condition was not False');
}
// If condition WAS False, do everything in else curly braces
else {
  console.log('Condition was False');
}

// 'while' condition is not False, repeat loop
while (value4) {
  console.log('Condition was not false, so I i did the loop');
  value4 = false;
}

// Function
// A repeatable group of statements
// Can take multiple arguments (parameters)
// Can return a value as though it were a variable

// Function declaration
function newFunction(argA, argB) {
  let c = argA + argB;
  return c;
}
// Function usage
console.log(newFunction(1, 2));

// Callback functions
// A function that is called after another function has completed

function dothething(a, b , callback) {
  let c = a + b;
  callback(c);
}

dothething(3, 5, function(answer) {
  console.log('The answer is: ' + answer);
});

// Object
// A super variable
// Everything in javascript is technically an object
// We use JSON format to write them out
// Objects have properties and methods
// Properties are variables
// Methods are functions

let newObject = { //Everything in curly braces is part of the object
  name: 'Bob', // This is an object property
  sayName: function() { // This is a method
    console.log('My name is ' + this.name); // 'this' refers to this object's scope
  }
}

newObject.sayName();

// Scopes
// Global scope contains variables and objects available to the the entire program
let value5 = 8; //value5 is Global

let newObject2 = {
  objValue: value5 + 2 //objValue is in newObject2's local scope
}

//console.log(objValue); // This will give us an error
// ReferenceError: objValue is not defined
console.log(newObject2.objValue);


















//EOF
