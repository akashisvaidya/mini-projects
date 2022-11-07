// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
const favHoliday = "Sydney";
console.log(favHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const str = "goodbye";
console.log(str.substring(4));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNUm(a, b, c, d, e) {
  let result = 100 - a - b - c - d - e;
  alert(Math.abs(result));
}
// fiveNUm(10, 10, 10, 10, 100);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highLow(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);

  console.log(`The lowest number is ${min} and the highest number is ${max}`);
  //   let nums = [a, b, c];
  //   console.log(Math.max(...nums));
  //   console.log(Math.min(...nums));
}

highLow(100, 95, 10);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// let ranNum = Math.floor(Math.random() * 2);
const headOrTails = (_) => (Math.random() < 0.5 ? "heads" : "tails");

//   console.log(ranNum);

//   if (ranNum === 0) {
//     // console.log("Heads");
//     return "Heads";
//   } else {
//     // console.log("Tails");
//     return "Tails";
//   }

//*Loops*
//Create a function that takes in a number.
// Console log the result of heads or tails using the previous function x times where x is the number passed into the function.
//  Call the function.

function num(a) {
  for (let i = 1; i <= a; i++) {
    let result = headOrTails();
    console.log(result);
  }
}

num(1);
