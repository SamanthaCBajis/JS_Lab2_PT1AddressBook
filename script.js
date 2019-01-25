"use strict";
//add info is only parameter
//address book only has 1 class = contacts which is an Array

class AddressBook {  //class 1 name Address Book
    constructor(){     
        this.contacts = [];                //this referring to a property called contacts that equals an array
    }
    add(info){  
        this.contacts.push(info);          // Use push(); to push the parameter of this.contacts into the array        // These three methods need to be finished off
    }
    deleteAt(index){                              
        this.contacts.splice(index,1);      // To push the parameter of this.contacts into the array and set up for it to be used in the while loop
       console.log(this.contacts.splice(index,1)) //check if its working
    }
    print(){
        for(let i = 0; i < this.contacts.length; i++){      // for loop that runs by letting i equal zero and when i is less than the length of this.contacts it will increase by 1
            console.log(this.contacts[i]);                  // It will print to the console and stop when the entire address book has been printed
        }

    }

}

class Contact{                                  //class 2 name Contacts
    constructor(name, email, relation, phone){  // Constructor dictates your stucture how it looks and how it behaves called to create an object and holds the properties for that object
        this.name = name;                       // "this" refers to a single object, references the one object it is used with, used within that coding block it is placed in
        this.email = email;                     // this name is part of this constructor which is part of this class
        this.relation = relation;
        this.phone = phone;                     //properties of the class
    }
}

const book = new AddressBook()
console.log(book);
book.add(new Contact("Thomas", "tom@gmail.com", "brother", "1234567890"));
book.add(new Contact("Patricia","patty@gmail.com", "sister", "2345678901"));
book.print();

                                // while loop add remove delete or quit
while (true) {                  // Want the code to begin immediately, true is a statement to start the while loop
    const choice = prompt("Would you like to add, print, delete, or quit?");
    if (choice === "add") {                                                     // Adds the properties to make a new contact by reaching them through const that makes the property stay the same and prompts the user to enter that information
        const name = prompt("Enter name: ");            
        const email = prompt("Enter email: ");
        const relation = prompt("Enter relation: ");
        const phone = prompt("Enter phone: ");
        book.add(new Contact(name, email, relation, phone));
    } else if (choice === "print"){
        book.print();
    }else if (choice === "delete"){
        const hi = prompt("What index do you want to delete");
        book.deleteAt(hi);
    } else if (choice === "quit"){
        console.log("bye");
        break;
    }
}