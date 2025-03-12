const obj1 = {
	title : 'The Great Gatsby',
	author : 'F.Scott Fitzerald',
	yearPublished: 1925
};



console.log(obj1.title+" by "+obj1.author)



const car = {
make: 'Toyota',
model: 'Camry',
year : 2001
}



const theFunction = (data) =>{
for(let result in data){
	console.log(result +':'+ data[result]);
}

}

theFunction(car);


let firstName = 'Usman'
let lastName = 'Eletu'


function fullName(firstName,lastName){
	return `${firstName} ${lastName}`
}

console.log(fullName(firstName,lastName))



const person ={
firstName: 'Usman',
lastName: 'eletu',
age: 23
}



function getPerson(human){
	return `First Name: ${human['firstName']}, Last Name: ${human['lastName']}, Age: ${human.age}`
}


console.log(getPerson(person))



