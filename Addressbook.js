console.log("\n **** Welcome to AddressBook **** \n");

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

let contact = new Contact()

contact.setFirstName = 'Shreyash'
contact.setLastName = 'Jadhav'
contact.setAddress = 'Dighanchi'
contact.setCity = 'Sangli'
contact.setState = 'Maharashtra'
contact.setZip = '112345'
contact.setPhoneNumber = '9876543621'
contact.setEmail = 'Shrey99@gmail.com'

console.log(contact)