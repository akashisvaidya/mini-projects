let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 27;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18) {
  console.log("You will run at 9:30 am and you race number is " + raceNumber);
} else if (!registeredEarly && runnerAge > 18) {
  console.log("You will run at 11:00 am and you race number is " + raceNumber);
} else if (runnerAge < 18) {
  console.log("You will run at 12:30 pm and you race number is " + raceNumber);
} else {
  console.log("Check at the registration desk");
}
