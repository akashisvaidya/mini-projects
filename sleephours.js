function getSleepHours(day) {
  if (day === "monday") {
    return 8;
  } else if (day == "tuesday") {
    return 8;
  } else if (day == "wednesday") {
    return 7;
  } else if (day == "thursday") {
    return 6;
  } else if (day == "friday") {
    return 7;
  } else if (day == "saturday") {
    return 8;
  } else if (day == "sunday") {
    return 7;
  } else {
    return "check the day";
  }
}

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
    console.log(
      `You slept for ${actualSleepHours}, which is equal to your ideal sleep hours i.e. ${idealSleepHours}`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep amount than needed");
    console.log(
      `You slept for ${actualSleepHours}, which is greater than your ideal sleep hours i.e. ${idealSleepHours}. So you wasted  ${
        actualSleepHours - idealSleepHours
      } hours sleeping`
    );
  } else {
    console.log("You need some rest");
    console.log(
      `You slept for ${actualSleepHours}, which is less than your ideal sleep hours i.e. ${idealSleepHours}. So you need to sleep another ${
        idealSleepHours - actualSleepHours
      } hours `
    );
  }
};

calculateSleepDebt();
