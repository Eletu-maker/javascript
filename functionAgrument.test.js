

const {calculate,addTwoNumber,subtractTwoNumber,getEvenNumber,calculateArea,convertToFahrenheit,isEven,isLeapYear,countVowels} = require("./functionAgrument.js");

test("add two numbers", ()=>{
// arrange
let firstNumber= 45;
let secondNumber = 50;
// act
const result = addTwoNumber(firstNumber,secondNumber);
// assert
let answer = 95;
expect(result).toBe(answer)
})

test("subtract two number", ()=>{
let firstNumber= 45;
let secondNumber = 50;
const result = subtractTwoNumber(firstNumber,secondNumber);
expect(result).toBe(-5);
})


test("return even number", ()=>{
let arrayOfNumber = [8,1,3,5,9,2,6,0];
let answer =[8,2,6,0];
const result = getEvenNumber(arrayOfNumber);
expect(result).toEqual(answer);

})


test("call back function",()=>{
let firstNumber= 45;
let secondNumber = 50; 
let callFunction = addTwoNumber;
const result = calculate(firstNumber,secondNumber,callFunction);
expect(result).toBe(95);
}
)

test("calculate area", ()=>{
let width=56;
let height = 34;
const result = calculateArea(width,height);
expect(result).toBe(1904);
})



test("celsius to fahrenheit", ()=>{
let degree= 50;
let answer =122;
const result = convertToFahrenheit(degree);
expect(result).toBe(answer);
})



test("check even", ()=>{
let number =6;
const result = isEven(number);
expect(result).toBeTruthy()
})


test("check leap year", ()=>{
let year = 2004;
const result = isLeapYear(year);
expect(result).toBeTruthy()
})


test("count vowel", ()=>{
let letter = "wonder";
let answer = 2;
const result = countVowels(letter);
expect(result).toBe(answer)
})

