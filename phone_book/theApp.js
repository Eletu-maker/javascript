const phoneBook = require("./phoneBook")
const prompt = require('prompt-sync')();
const contact = new  phoneBook()
console.log("Phone Book App")
repeat = true
while(repeat){
console.log(`
 1. Add contact
 2. Remove contact
 3. Find contact by phone number
 4. Find contact by full name
 5. Find contact by name
 6. Edit contact
 7. Exist
    `)

 let option = prompt("Enter your choice: ")
 while(option !== '1' && option !== '2' && option !== '3' && option !== '4' && option !== '5' && option !== '6'&& option !== '7' ){
    console.log("Enter the right option")
    option = prompt("Enter your choice: ")
 }

 switch (option){
    case "1":
    let firstName = prompt("Enter the first name: ")
    let lastName = prompt("Enter the last name: ")
    let phoneNumber = prompt("Enter phone number: ")
    while(!phoneNumber.match(/^080\d{8}$/) && !phoneNumber.match(/^081\d{8}$/) && !phoneNumber.match(/^090\d{8}$/) && !phoneNumber.match(/^091\d{8}$/) && !phoneNumber.match(/^070\d{8}$/)){
        console.log("Enter a phone number")
        phoneNumber = prompt("Enter phone number: ")
    }

    let added = contact.addToPhoneBook(firstName,lastName,phoneNumber)
    console.log(added)
    if (added === "this contact aleady exist" || added === "number aleady exist"){
        console.log("try again")
    }else{
        console.log("contact successfully saved") 
    }
    
   

    break;
  case "2":
     let removefirstName = prompt("Enter the first name: ")
     let removelastName = prompt("Enter the last name: ")
    
    let remove = contact.removeContact(removefirstName,removelastName)
    console.log(remove)
    if (remove === "this contact aleady exist"){
        console.log("try again")
    }else{
        console.log("contact successfully delete") 
    }
    break;
   case "3":
    let findphoneNumber = prompt("Enter phone number: ")
    
    while(!phoneNumber.match(/^080\d{8}$/) && !phoneNumber.match(/^081\d{8}$/) && !phoneNumber.match(/^090\d{8}$/) && !phoneNumber.match(/^091\d{8}$/) && !phoneNumber.match(/^070\d{8}$/)){
        console.log("Enter a phone number")
        findphoneNumber = prompt("Enter phone number: ")
    }

    let findByNumber = contact.getContactByNumber(findphoneNumber)
    console.log(findByNumber)
    if (findByNumber === "such contact do not exist"){
        console.log("try again")
    }else{
        console.log("found it")
    }

        break;
    case "4":
        let findfirstName = prompt("Enter the first name: ")
        let findlastName = prompt("Enter the last name: ")

        let findBYFullname = contact.getContactByFullName(findfirstName,findlastName)
        console.log(findBYFullname)
        if (findBYFullname === "such contact do not exist"){
            console.log("try again")
        }else{
            console.log("found it")
        }

       
        break;
    case "5":
        let Name = prompt("Enter name: ")
        let findByname = contact.getContactByName(Name)
        console.log(findByname)
        if (findByname === "such contact do not exist"){
            console.log("try again")
        }else{
            console.log("found it")
        }
        break;
    case "6":
        let oldfirstName = prompt("Enter the first name: ")
        let oldlastName = prompt("Enter the last name: ")
        let newfirstName = prompt("Enter the new  first name: ")
        let newlastName = prompt("Enter the new last name: ")

        let editContact = contact.editContact(oldfirstName,oldlastName,newfirstName,newlastName)
        console.log(editContact)
        if (editContact === "such contact do not exist"){
            console.log("try again")
        }else{
            console.log("Done")
        }

        break;
    case "7":
        console.log("GoodBye")
        repeat = false
        break
  default:
    
 }
}