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
        this.firstName = firstName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }

    set setAddress(address) {
        this.address = address;
    }

    set setCity(city) {
        this.city = city;
    }

    set setState(state) {
        this.state = state;
    }

    set setZip(zip) {
        this.zip = zip;
    }

    set setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    set setEmail(email) {
        this.email = email;
    }
}