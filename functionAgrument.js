
function calculate(fristValue,secondValue,callBackFunction){
	return callBackFunction(fristValue,secondValue);

}

function addTwoNumber(numberOne, numberTwo){
	return numberOne + numberTwo
}
function subtractTwoNumber(numberOne, numberTwo){
	return numberOne - numberTwo
}

function getEvenNumber(array){
	return array.filter((value)=>{
	if (value %2 ===0){
	return true;
}
}
)
}

function calculateArea(width,height){
	return width*height;
}

function convertToFahrenheit(celsius){
	return (celsius *(9/5))+32
}

function isEven(number){
  if(number %2 ===0){
	return true;
}
	return false;
}



function isLeapYear(year){
	if (year %4 ===0){
	return true;
}else if (year % 100 ===0){
	return false;
}else if (year % 400 ===0){
	return true;
}
	return false;

}


function countVowels(string){
let number =0;
for(let count=0; count <string.length;count++){
	if(string.charAt(count) == 'a'||string.charAt(count) == 'e'||string.charAt(count) == 'i'||string.charAt(count) == 'o'||string.charAt(count) == 'u'){
number++;
}

}
return number;
}







module.exports = {calculate,addTwoNumber,subtractTwoNumber,getEvenNumber,calculateArea,convertToFahrenheit,isEven,isLeapYear,countVowels}