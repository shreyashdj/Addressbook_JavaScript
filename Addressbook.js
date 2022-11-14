console.log("\n **** Welcome to AddressBook ****");

const prompt = require("prompt-sync")();

class Contact {
    //  variables to store contact details
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //  created constructor of class Contact
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    //  getter and setter methods
    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getAddress() {
        return this.address;
    }

    get getCity() {
        return this.city;
    }

    get getState() {
        return this.state;
    }

    get getZip() {
        return this.zip;
    }

    get getPhoneNumber() {
        return this.phoneNumber;
    }

    get getEmail() {
        return this.email;
    }

    set setFirstName(firstName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw 'First name is incorrect';
        }
    }

    set setLastName(lastName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (regex.test(lastName)) {
            this.lastName = lastName;
        } else {
            throw 'Last Name is incorrect';
        }
    }

    set setAddress(address) {
        let regex = RegExp('^[[A-z]{4,}$');
        if (regex.test(address)) {
            this.address = address;
        } else {
            throw 'Address is incorrect';
        }
    }

    set setCity(city) {
        let regex = RegExp('^[[A-z]{4,}$');
        if (regex.test(city)) {
            this.city = city;
        } else {
            throw 'City is incorrect';
        }
    }

    set setState(state) {
        let regex = RegExp('^[[A-z]{4,}$');
        if (regex.test(state)) {
            this.state = state;
        } else {
            throw 'State is incorrect';
        }
    }

    set setZip(zip) {
        let regex = RegExp('^[1-9][0-9]{5}$');
        if (regex.test(zip)) {
            this.zip = zip;
        } else {
            throw 'Zip Code is incorrect';
        }
    }

    set setPhoneNumber(phoneNumber) {
        let regex = RegExp("^[1-9][0-9]{9}$");
        if (regex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw 'Phone Number is incorrect';
        }
    }

    set setEmail(email) {
        let myregex = RegExp("^[A-z\\d]+[.]?[-+A-z\\d]+@[A-z\\d]+[.]?[A-z]*[.][A-z,]{2,}$");
        if (myregex.test(email)) {
            this.email = email;
        } else {
            throw 'Email is incorrect';
        }
    }
}

let contactList = new Array();

function addContact() {

    let contact = new Contact()

    console.log()
    let name = prompt(" Enter First Name : ");
    let check;
    contactList.forEach(contact => {
        if (contact.getFirstName == name) {
            console.log(" \n Contact Already Exist");
            check = true;
        }
    })

    if (check == true) {
        return;
    }

    contact.setFirstName = name;
    contact.setLastName = prompt(" Enter Last Name : ");
    contact.setAddress = prompt(" Enter Address : ");
    contact.setCity = prompt(" Enter City : ");
    contact.setState = prompt(" Enter State : ");
    contact.setZip = prompt(" Enter Zip Code : ");
    contact.setPhoneNumber = prompt(" Enter Phone Number : ");
    contact.setEmail = prompt(" Enter Email ID : ");

    contactList.push(contact);

    console.log("\n Contact Added");
}

function printContacts() {
    console.log(contactList);
}

function searchByCity() {
    console.log()
    let name = prompt(" Enter First Name : ");
    let city = prompt(" Enter City : ");
    contactList.filter(contact => contact.getCity == city)
        .filter(contact => contact.getFirstName == name).forEach(contact => console.log(contact));
}

function searchByState() {
    console.log()
    let name = prompt(" Enter First Name : ");
    let state = prompt(" Enter State : ");
    contactList.filter(contact => contact.getState == state)
        .filter(contact => contact.getFirstName == name).forEach(contact => console.log(contact));
}

function searchByName() {
    console.log()
    let name = prompt(" Enter First Name : ");
    contactList.filter(contact => contact.getFirstName == name).forEach(contact => console.log(contact));
}

function deleteContact() {
    console.log()
    let name = prompt(" Enter First Name : ");
    contactList.filter(contact => contact.getFirstName == name)
        .forEach(contact => contactList.splice(contactList.indexOf(contact), 1));
}

function countContacts() {
    console.log("\n Total No. of Contacts :", contactList.length)
}

let option;
do {
    console.log("\n 1. Add Contact, 2. Print Contact, 3. Search By Name, 4. Search By City,");
    console.log(" 5. Search By State, 6. Delete Contact, 7. Count Contacts, 8. Exit");
    option = parseInt(prompt(" Enter Option : "));
    switch (option) {
        case 1:
            addContact();
            break;
        case 2:
            printContacts();
            break;
        case 3:
            searchByName();
            break;
        case 4:
            searchByCity();
            break;
        case 5:
            searchByState();
            break;
        case 6:
            deleteContact();
            break;
        case 7:
            countContacts();
            break;
        case 8:
            console.log("\n Exited \n")
            break;
        default:
            console.log("\n Invalid Option")
            break;
    }
} while (option != 8);