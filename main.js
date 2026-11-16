//Convert the string "123" to a number and add 7.
let sum = Number("123") + 7;
console.log(sum);

//Check if the given variable is falsy and return "Invalid" if it is
// function check(value) {
//   let input =
//     value === 0 ||
//     value === null ||
//     value === undefined ||
//     Number.isNaN(value) ||
//     value === "";
//   if (input) {
//     return "invalid";
//   }
//   return value;
// }
// console.log(check(0));

// othet sol
function check(value) {
  if (!value) {
    return "invalid";
  }
  return value;
}
console.log(check(0));

//Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}
//Create an array of numbers and return only the even numbers using filter method
let arr = [1, 2, 3, 4, 5];
let NewArr = arr.filter((e) => {
  return e % 2 == 0 ? true : false;
});
console.log(NewArr);
//Use the spread operator to merge two arrays, then return the merged array
let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let MergeArr = arr1.map((e) => {
  return [...e];
});
console.log(MergeArr.flat());

//Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
let TheDay = 2;
switch (TheDay) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("unknown");
}

// Create an array of strings and return their lengths using map method
let arr2 = ["a", "ab", "abc"];
let NewArr2 = arr2.map((e) => {
  return e.length;
});
console.log(NewArr2);

//Write a function that checks if a number is divisible by 3 and 5
function Div(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "Divisible by both";
  } else {
    return " Not divisible by both";
  }
}
console.log(Div(10));

//Write a function using arrow syntax to return the square of a number
let square = (n) => {
  return n ** 2;
};
console.log(square(5));
// Write a function that destructures an object to extract values and returns a formatted string
const person = { name: "John", age: 25 };
const formatted = function ({ name, age }) {
  return `${name} is ${age} years old`;
};
console.log(formatted(person));
// Write a function that accepts multiple parameters (two or more) and returns their sum.
function sum1(n1, n2, n3, n4, n5) {
  return n1 + n2 + n3 + n4 + n5;
}
console.log(sum1(1, 2, 3, 4, 5));
// Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Success");
  }, 3000);
});
p.then((result) => {
  console.log(result);
});
//Write a function to find the largest number in an array.
let arr3 = [1, 3, 7, 2, 4];
let largest = arr3.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});
console.log(largest);
// Write a function that takes an object and returns an array containing only its keys
let obj = { name: "John", age: 30 };
function output(obj) {
  return Object.keys(obj);
}
console.log(output(obj));
//Write a function that splits a string into an array of words based on spaces.
function splits(s) {
  return s.split(" ");
}
console.log(splits("The quick brown fox"));
/*
forEach() is an array method that executes a callback function for every element in the array.
Doesn't wait for promises 
Not supported break and continue
for...of is a loop statement that iterates over the values of an iterable, such as an array or string
Can use await with for await of for async iterables
supported break and continue
Use forEach() When you want to execute an action for every element.
Use for...of When you need more control over the loop.
*/

/*
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code executes.
ex:
// Function hoisting works completely
sayHello(); // Output: "Hello!"
function sayHello() {
  console.log("Hello!");
}
// var hoisting initializes the variable as undefined
console.log(user); // Output: undefined
var user = "Alice";
console.log(user); // Output: "Alice"

The Temporal Dead Zone (TDZ) is the period between entering a block scope and the moment a let or const variable is declared, during which accessing the variable throws a ReferenceError
ex:
{
  // --- Start of TDZ for 'age' ---
  
  console.log(age); // Throws ReferenceError: Cannot access 'age' before initialization
  
  // --- End of TDZ for 'age' ---
  let age = 25; 
  
  console.log(age); // Output: 25
}
*/

/**
 == (loose equality) compares two values after converting them to a common type, while === (strict equality) compares both value and data type without performing any type conversion
 */
