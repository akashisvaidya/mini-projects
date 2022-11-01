// conditional statements
// let age = 18;
// if (age > 18) {
//   console.log("you are welcome");
// } else {
//   console.log("sorry");
// }

// const para = document.querySelector("p");
// para.addEventListener("click", updateName);
// function updateName() {
//   const name = prompt("enter a new name");
//   para.textContent = `Player 1: ${name}`; // using template literal
// }

// const para = document.querySelector("p");

// function updateName() {
//   const newName = prompt("What is your name? ");

//   para.textContent = `Player 1: ${newName}`;
// }
// para.addEventListener = ("click", updateName());
// sky

// document.addEventListener("DOMContentLoaded", () => {
//   function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }

//   const buttons = document.querySelectorAll("button");

//   for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
//   }
// });

// const myInt = 5;
// const myFloat = 6.667;
// let no = 0.1;
// for (let i = 1; i < 32; i++) {
//   no *= 2;
//   console.log(no, "day-", i);
// }

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 4));

// function showMessage(from, text = anotherFunction()) {
//   console.log(from, "says", text);
// }

// function anotherFunction() {
//   const msg = prompt("what do  you wanna say?");
//   return msg;
// }

// showMessage("Akash", "hi");
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }
// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }

//   alert("Showing you the movie"); // (*)
//   // ...
// }
// showMovie(18);

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm("Did parents allow you?");
//   }
// }

// //Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm("Did parents allow you?");
// }

// //   return a < b ? a : b;
// // }
// // console.log(min(2, 4));

//loop

// debugger;
// let number = 1;
// while (number <= 5) {
//   console.log(number);
//   number++;
// }

// console.log(number);
// debugger;
// let n;
// for (n = 1; n <= 5; n++) {
//   console.log(n);
// }

// let letter = "";
// while (letter !== "X") {
//   letter = prompt("type a letter or x to exit");
// }

// print from 1 to 100
// if divisible by 3 as in if the number when divided by 3 = 0
//then print fizz and when divided by 5 and the remainder is 0 then print buzz

// debugger;
// for (let n = 1; n < 101; n++) {
//   let three = n % 3;
//   let five = n % 5;

//   if (three === 0 && five === 0) {
//     console.log("fizzbuzz");
//   } else if (three === 0) {
//     console.log("fizz");
//   } else if (five === 0) {
//     console.log("buzz");
//   } else {
//     console.log(n);
//   }
// }

// function vat() {
//   let retailPrice = Number(prompt("Enter the price"));
//   retailPrice += (retailPrice * 20.6) / 100;
//   //   let vatAmt = (retailPrice * 20.6) / 100;
//   //   let afterVat = vatAmt + retailPrice;
//   alert(`The final price is ${retailPrice}`);
// }
// vat();

/// switch num1 = 3 num = 5 final num1 = 5 num2= 3

// let num1 = 3;
// let num2 = 5;
// let num3 = num1;
// num1 = num2;
// num2 = num3;

// console.log(num1, num2);

//  Following day

// Write a program that accepts a day name from the user,
//  then shows the name of the following day.
//  Incorrect inputs must be taken into account.

/*debugger;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// inputt promt

function followingDay() {
  const day = prompt("Please enter the day: ");
  const dayLower = day.toLowerCase();
  const newDays = days.map((x) => x.toLowerCase());
  //   console.log(newDays);
  //   console.log(day);
  const length = newDays.length;
  console.log(length);
  let i = newDays.indexOf(dayLower);
  let resultIndex = i + 1;
  let result = days[resultIndex];

  if (resultIndex === length) {
    alert(" This is the last day of the week.");
  } else if (newDays.includes(dayLower)) {
    alert(`The next day is ${result}`);

    // let result = days[i + 1];
  } else alert("Please enter a day or check the spelling");
  //   if ((indexOf(days.day) = days[length])) {
  //     alert("This is the last day of the week.");
  //   }
  console.log(result);
}
//if the  value includes int he array then index of the value +1
// console.log(days[2]);
followingDay();
// find the length of the array and if the day is the last value in the array then return array[0]
*/

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);

//Create a function that takes in a number.
// The function should return an array that contains every number //
// from 1 to that number as seperate elements

// function takeInput() {
//   const val = prompt("Please enter the number: ");
//   let arr = [];
//   for (let i = 1; i <= val; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// }

// takeInput();
/*
 Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"



 */

// function repeatStr(n, s) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += s;
//   }
//   console.log(str);
// }

// repeatStr(5, "hi");

// let repeatStr = (n, s) => s.repeat(n);

// console.log(repeatStr(5, "Hi "));

/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
Fundamentals
Arrays
Lists*/
// debugger;
let nums = [];
let result = [];
let newPos = [];
let posLength;
let newNeg = 0;

// nums.forEach((x, i) => {
//   if (x < 0) {
//     return (newNeg = newNeg + x);
//   }

//   if (x > 0) {
//     return (newPos = i + 1);
//   }
// });
// result.push(newPos, newNeg);
//
// // console.log(newNeg);

// function newArray() {
//   nums.forEach(x, i);
//   neg(x);
//   pos(x, i);
//   result.push(newPos, newNeg);
//   console.log(result);
// }
// function neg(x) {
//   if (x < 0) {
//     return (newNeg += x);
//   } else {
//     newNeg = null;
//   }
// }
// function pos(x, i) {
//   if (x > 0) {
//     return (newPos = i + 1);
//   } else newPos = null;
// }
// newArray();

nums.forEach((x) => {
  if (x > 0) {
    newPos.push(x);
    posLength = newPos.length;
  } else {
    posLength;
  }
});

const sum = nums.forEach((x) => {
  if (x < 0) {
    return (newNeg += x);
  } else newNeg;
});

const finalPush = () => {
  if (newPos && newNeg) {
    result.push(posLength, newNeg);
  } else {
    result;
  }
};

console.log(newNeg);
console.log(posLength);
console.log(result);

//Create a function that takes in an array of numbers.
// Return a new array containing every even number
// from the original array (do not use map or filter)

function arrayEven(arr) {
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(arrayEven([1, 2, 3, 4, 5, 6, 7, 8]));

let arr = [1, 2, 3, 4, 5, 6];

function mutli(x) {
  let product = 1; // multiplying everything to the product
  //   arr.forEach((num) => (product *= num));
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  alert(product);
}

mutli();
// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "momo";
alert(`I would love to eat ${food} right now`);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let word = "Hello"; // string in js also work as array.
// alert(word[1]);
alert(word.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function multiply(a, b, c) {
  let result = (a / b) * c;
  alert(result);
}

multiply(4, 2, 2);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cube(a) {
  console.log(Math.cbrt(a).toFixed(2));
}
cube(9);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
//

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFives(n) {
  for (let i = 1; i <= n; i++) {
    s;
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
skipFives(11);
