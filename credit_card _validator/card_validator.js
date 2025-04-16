const credit_card = require("./card_validator_functions")
const prompt = require('prompt-sync')();

console.log("hello, Enter your card number for validator")
let number = prompt()
const card = new credit_card(number)

console.log("*****************************************************************")
console.log(`** Credit card type: ${card.checkType()}`)
console.log(`** Credit card number: ${number}`)
console.log(`** Credit card digit length: ${number.length}`)
console.log(`** Credit card validity status: ${card.checkValid()}`)
console.log("*****************************************************************")