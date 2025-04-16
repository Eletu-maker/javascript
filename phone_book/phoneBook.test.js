const phoneBook = require("./phoneBook")
test("test that it can create contact", ()=>{
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    const contact = new  phoneBook([])
    const result = {first_Name : "usman",
        last_Name : "eletu",
        phone_number : "09134969393"
     }
     expect(result).toStrictEqual(contact.createContact(firstName,lastName,number));
})




test("test that contact is in the contact list",()=>{
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    const contact = new  phoneBook()
    contact.createContact(firstName,lastName,number)
    const result = {first_Name : "usman",
        last_Name : "eletu",
        phone_number : "09134969393"
     }
     let list =[result]
     expect(list).toEqual(contact.addToPhoneBook(firstName,lastName,number))

})
test("test if contact already exist in the phone book",()=>{
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    let firstName1 ="usan"
    let lastName1 ="letu"
    let number1 ="09134969293"
    const contact = new  phoneBook()
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    contact.createContact(firstName1,lastName1,number1)
    const result = {first_Name : "usman",
        last_Name : "eletu",
        phone_number : "09134969393"
     }
     const result1 = {first_Name : firstName1,
        last_Name : lastName1,
        phone_number : number1
     }
     let list =[result,result1]
     expect(list).toEqual(contact.addToPhoneBook(firstName1,lastName1,number1))
})
test("test if contact already exist in the phone book",()=>{
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    const contact = new  phoneBook()
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    contact.createContact(firstName,lastName,number)
     expect("this contact aleady exist").toBe(contact.addToPhoneBook(firstName,lastName,number))
})
 

test("test if contact already exist in the phone book",()=>{
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    const contact = new  phoneBook()
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="usmn"
     lastName ="eleu"
    contact.createContact(firstName,lastName,number)
     expect("number aleady exist").toBe(contact.addToPhoneBook(firstName,lastName,number))
})
test("test that u can delete contact in the phonebook",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName1 ="suya"
    lastName1 ="eric"
    number1 ="09134969323"
    contact.createContact(firstName1,lastName1,number1)
    contact.addToPhoneBook(firstName1,lastName1,number1)
    let result ={
        "first_Name": "usman",
         "last_Name": "eletu", 
         "phone_number": "09134969393"}
    
    const list =[result]


     expect(list).toEqual(contact.removeContact(firstName1,lastName1))
})
     
test("test that u can delete contact in the phonebookII",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName1 ="suya"
    lastName1 ="eric"
    number1 ="09134969323"
    expect("such contact do not exist").toBe(contact.removeContact(firstName1,lastName1))
})

test("test that can find contact with number",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="sam"
    lastName ="chic"
   number ="09121129343"
   contact.createContact(firstName,lastName,number)
   contact.addToPhoneBook(firstName,lastName,number)

   let list ={
    first_Name : "koko",
        last_Name : "yusuf",
        phone_number : "09123129343"

   }
   dNumber = "09123129343";

   expect(list).toEqual(contact.getContactByNumber(dNumber))
})

test("test that can find contact with numberII",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="sam"
    lastName ="chic"
   number ="09121129343"
   contact.createContact(firstName,lastName,number)
   contact.addToPhoneBook(firstName,lastName,number)

   let list ={
    first_Name : "koko",
        last_Name : "yusuf",
        phone_number : "09123129343"

   }
   dNumber = "09123129347";

   expect("such contact do not exist").toBe(contact.getContactByNumber(dNumber))
})

test("test that can find contact with full name",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="sam"
    lastName ="chic"
   number ="09121129343"
   contact.createContact(firstName,lastName,number)
   contact.addToPhoneBook(firstName,lastName,number)

   let list ={
    first_Name : "koko",
        last_Name : "yusuf",
        phone_number : "09123129343"

   }
   Dfirst_Name = "koko"
        Dlast_Name = "yusuf"

   expect(list).toEqual(contact.getContactByFullName(Dfirst_Name,Dlast_Name))

})



test("test that can find contact with full nameII",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="sam"
    lastName ="chic"
   number ="09121129343"
   contact.createContact(firstName,lastName,number)
   contact.addToPhoneBook(firstName,lastName,number)

   let list ={
    first_Name : "koko",
        last_Name : "yusuf",
        phone_number : "09123129343"

   }
   Dfirst_Name = "yelini"
        Dlast_Name = "yusuf"

   expect("such contact do not exist").toBe(contact.getContactByFullName(Dfirst_Name,Dlast_Name))

})



test("test that can find contact with  name",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="sam"
    lastName ="chic"
   number ="09121129343"
   contact.createContact(firstName,lastName,number)
   contact.addToPhoneBook(firstName,lastName,number)
   firstName ="wasiu"
     lastName ="koko"
    number ="09033470203"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)

   let list =[{
    first_Name : "koko",
        last_Name : "yusuf",
        phone_number : "09123129343"

   },{
    first_Name :"wasiu",
        last_Name :"koko",
        phone_number : "09033470203"

   }]

   Name = "koko"
        

   expect(list).toEqual(contact.getContactByName(Name))

})





test("test that can find contact with  name",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="sam"
    lastName ="chic"
   number ="09121129343"
   contact.createContact(firstName,lastName,number)
   contact.addToPhoneBook(firstName,lastName,number)
   firstName ="wasiu"
     lastName ="koko"
    number ="09033470203"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)

   let list =[{
    first_Name : "koko",
        last_Name : "yusuf",
        phone_number : "09123129343"

   },{
    first_Name :"wasiu",
        last_Name :"koko",
        phone_number : "09033470203"

   }]

   Name = "lekan"
        

   expect("such contact do not exist").toBe(contact.getContactByName(Name))

})

test ("test for edit name",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    let list ={
        first_Name : "dami",
        last_Name : "korede",
        phone_number : "09123129343"

    }

    newFirstname = "dami"
    newLastName= "korede"

    
   expect(list).toEqual(contact.editContact(firstName,lastName,newFirstname,newLastName))
})


test ("test for edit nameII",()=>{
    const contact = new  phoneBook()
    let firstName ="usman"
    let lastName ="eletu"
    let number ="09134969393"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="suya"
     lastName ="eric"
    number ="09134969343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="koko"
     lastName ="yusuf"
    number ="09123129343"
    contact.createContact(firstName,lastName,number)
    contact.addToPhoneBook(firstName,lastName,number)
    firstName ="sukuna"
     lastName ="gojo"

    newFirstname = "dami"
    newLastName= "korede"

    
   expect("such contact do not exist").toBe(contact.editContact(firstName,lastName,newFirstname,newLastName))
})