class phoneBook{
     
    constructor(){
        this.contactList=[]
        

    }

    createContact(firstName,lastName,phoneNumber){
        const contact = {
            first_Name : firstName ,
            last_Name : lastName,
            phone_number : phoneNumber
        }
        
        return contact
    }

    addToPhoneBook(firstName,lastName,phoneNumber){
        let id =0
        const contact = this.createContact(firstName,lastName,phoneNumber)
        const list = this.contactList
        for(let index of list){
            if(index.first_Name === firstName && index.last_Name === lastName && index.phone_number === phoneNumber){
                id++
                return "this contact aleady exist"
                
            }else if(index.phone_number === phoneNumber){
                id++
                return "number aleady exist"
                
            }
        }
        if (id ===0){
            list.push(contact)
        
        return list
        }
    }

    removeContact(firstName,lastName){
        let num =0
        const list = this.contactList
        for(let count =0; count <list.length;count++){
            if(list[count].first_Name === firstName && list[count].last_Name === lastName){
                num ++
                list.splice(count,1)
            }
        }
        if(num ===0){
            return "such contact do not exist"
        }else{
            return list}
    }

    getContactByNumber(number){
        let cont;
        let num =0;
        const list = this.contactList
        for(let index of list){
            if( index.phone_number === number){
                num++
                cont = index
            }
        }
        if(num ===0){
            return "such contact do not exist"
        }else{
            return cont
        }
    
    }


    getContactByFullName(firstName,lastName){
        let cont;
        let num =0;
        const list = this.contactList
        for(let index of list){
            if( index.first_Name === firstName && index.last_Name === lastName){
                num++
                cont = index
            }
        }
        if(num ===0){
            return "such contact do not exist"
        }else{
            return cont
        }
    
    }




    getContactByName(Name){
        let cont = []; 
        let num =0
        const list = this.contactList
        for(let index of list){
            if( index.first_Name === Name || index.last_Name === Name){
                num++
                cont.push(index)
            }
        }

        if (num ===0){
            return "such contact do not exist"
        }else{
            return cont
        }
    }

    editContact(firstName,lastName,newFirstname,newLastName){
        let cont  
        let num =0
        const list = this.contactList
        for(let index of list){
            if( index.first_Name === firstName && index.last_Name === lastName){
                num++
                index.first_Name = newFirstname
                index.last_Name = newLastName
                cont = index
            }
        }
        if (num ===0){
            return "such contact do not exist"
        }else{
            return cont
        }
    }
}
module.exports = phoneBook