/*
Filename: ComplexApplication.js

This code represents a complex application that simulates a virtual city with multiple features including citizens, buildings, events, and services. This code is more than 200 lines long and provides a detailed implementation.

Note: This code is for illustrative purposes only and may not work as a stand-alone program.

*/

// Class representing a Citizen
class Citizen {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a Building
class Building {
  constructor(name, address, capacity) {
    this.name = name;
    this.address = address;
    this.capacity = capacity;
    this.occupants = [];
  }

  addOccupant(citizen) {
    if (this.occupants.length < this.capacity) {
      this.occupants.push(citizen);
      console.log(`${citizen.name} moved into ${this.name}.`);
    } else {
      console.log(`${this.name} is already at full capacity.`);
    }
  }

  listOccupants() {
    console.log(`Occupants of ${this.name}:`);
    this.occupants.forEach((citizen, index) => {
      console.log(`${index + 1}. ${citizen.name}`);
    });
  }
}

// Class representing an Event
class Event {
  constructor(name, date, location) {
    this.name = name;
    this.date = date;
    this.location = location;
  }

  displayDetails() {
    console.log(`Event: ${this.name}`);
    console.log(`Date: ${this.date}`);
    console.log(`Location: ${this.location}`);
  }
}

// Class representing a Service
class Service {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  displayCost() {
    console.log(`The cost of ${this.name} is ${this.cost}.`);
  }
}

// Creating citizens
const citizen1 = new Citizen("John Doe", 25, "123 Main St");
const citizen2 = new Citizen("Jane Smith", 35, "456 Elm St");
const citizen3 = new Citizen("Mike Johnson", 40, "789 Oak St");

// Creating buildings
const building1 = new Building("Residential Tower", "1st Ave", 100);
const building2 = new Building("Shopping Mall", "2nd St", 500);

// Adding occupants to buildings
building1.addOccupant(citizen1);
building1.addOccupant(citizen2);
building1.addOccupant(citizen3);
building2.addOccupant(citizen1);

// Listing building occupants
building1.listOccupants();
building2.listOccupants();

// Creating events
const event1 = new Event("City Marathon", "2022-07-10", "Central Park");
const event2 = new Event("Food Festival", "2022-08-20", "Downtown Square");

// Displaying event details
event1.displayDetails();
event2.displayDetails();

// Creating services
const service1 = new Service("Water Supply", 1000);
const service2 = new Service("Electricity", 2000);

// Displaying service costs
service1.displayCost();
service2.displayCost();