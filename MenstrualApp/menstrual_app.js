const Menstrual_cycle = require('./menstrual_cycle');
const prompt = require('prompt-sync')();

console.log("Welcome to the Menstrual Cycle Tracker");

let dateInput = prompt("Enter date of your last cycle (yyyy-mm-dd): ");
let parsedDate = new Date(dateInput);

while (isNaN(parsedDate.getTime())) {
    console.log("Invalid date format. Please use yyyy-mm-dd.");
    dateInput = prompt("Enter date of your last cycle (yyyy-mm-dd): ");
    parsedDate = new Date(dateInput);
}

let cycleLength = parseInt(prompt("How long is your cycle?: "), 10);
while (isNaN(cycleLength) || cycleLength < 21 || cycleLength > 35) {
    console.log("Cycle length is outside the normal range (21-35). Please consult a doctor.");
    cycleLength = parseInt(prompt("How long is your cycle?: "), 10);
}

let flowLength = parseInt(prompt("How many days do you flow?: "), 10);
while (isNaN(flowLength) || flowLength < 2 || flowLength > 7) {
    console.log("Flow duration is outside the normal range (2-7). Please consult a doctor.");
    flowLength = parseInt(prompt("How many days do you flow?: "), 10);
}

const cycle = new Menstrual_cycle(parsedDate, cycleLength, flowLength);

console.log(`\nYour next period might start on: ${cycle.nextPeriodDate()}`);
console.log(`Your day of ovulation: ${cycle.getOvulationDate()}`);
console.log(`Your fertile window: ${cycle.daysToFertility()}`);
console.log(`Your days of flow: ${cycle.daysofFlow()}`);
console.log(`Your days to save: ${cycle.saveDays()}`);
