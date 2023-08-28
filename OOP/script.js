'use strict';
// Constructor function
// const Person = function (fullName, birthYear) {
//   // Instance properties
//   this.fullName = fullName;
//   this.birthYear = birthYear;
//   // Never to this
//   //   this.caclAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('jonas', 1991);
// console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linkid to prototype
// 4. function automatically return {}

// const bikash = new Person('Bikasg', 1997);
// const ram = new Person('Ram', 1998);
// console.log(ram, bikash);

// const jay = 'jay';

// console.log(jonas instanceof Person); // true
// console.log(jay instanceof Person); // false

// ////static methode // it's not inherited
// Person.hey = function () {
//   console.log('Hey there 🙋‍♂️');
//   console.log(this); // constructor function
// };

// Person.hey(); // Hey there 🙋‍♂️

// // jonas.hey(); // Uncaught TypeError: jonas.hey is not a function
// // Beacuse not tin the prototype of the jonas oject So there's noway that the Jonas object could inherit it.
// //*****  Prototype
// console.log(Person.prototype);
// Person.prototype.caclAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.caclAge(); //46
// ram.caclAge(); //39

///find and see prototype
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(jonas)); // true

// console.log(Person.prototype.isPrototypeOf(Person)); // false

// //Prototype of linked object
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, ram.species);

// console.log(jonas.hasOwnProperty('fullName')); // true
// console.log(jonas.hasOwnProperty('species')); // false

// //*****  Person.prototype.constructor; // person itself
// //*** Person.prototype // not the prototype of person
// //*** when we call a function any function with the new operator
// // 205 prototype chain

// //
// console.log(jonas.__proto__);
// // Object.prototype(top of prototype chain)
// console.log(jonas.__proto__.__proto__); /// object
// console.log(Person.prototype.constructor); //function itself

// // Any function of course is also an object and so therefore it also has a prototype

// const arr = [5, 8, 6, 8, 3, 4, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// console.dir(a => a + 1);

// V-207
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate(); //BMW is going at 130 km/h
// bmw.accelerate(); //BMW is going at 140 km/h
// bmw.break(); //BMW is going at 135 km/h
// bmw.accelerate(); //BMW is going at 145 km/h

// v-208
// ****************** JS classes
// class expression // classes are just a special type of functions

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance methods
//   /////Methods will be added to .prototype property
//   caclAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes('')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 🙋‍♂️');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('jessica Devis', 1996);
// console.log(jessica); // Object { fullName: "jessica", birthYear: 1996 }
// jessica.caclAge(); //  41
// console.log(jessica.age); // 41
// console.log(jessica.__proto__ === PersonCl.prototype); //true

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.fullName}`);
// // };

// jessica.greet();

// /////****  classes are not hoisted.
// //// Class are first-class citizes
// // classes are just a special kind of function behind the scenes.
// /// Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1965);
// Person.hey(); // Hey there 🙋‍♂️

// ////// v-209
// ////*****  Getter and setter
// // Every object in javascript can have setter and getter properties.
// /// So getters and setters are basically functions that get and set a value so just as the name says
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get Latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set Latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.Latest); //300
// account.Latest = 50;

// console.log(account.movements); // [ 200, 530, 120, 300, 50 ]

////**********  Static method
//// Array.from(document.querySelectorAll('h1))
///So Array.from here is basically  just a simple function
/// but iss a function that's attached to the Array constructor.
/// So that developers know that it is related to Arrays.

////// v-211 ***** Object.create /// no constructor functions and no new operator.Manually set the prototype of an object.

// const personProto = {
//   caclAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(personProto); // Object.create create a new object,and the prototype of that object...
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.caclAge(); //35

// console.log(steven.__proto__); // Object -> prototype
// console.log(steven.__proto__ === personProto); // true

// const sarah = Object.create(personProto);
// sarah.init('Sarah', 1979);
// sarah.caclAge(); //58

//**************Coding chalenge 2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };

//   break = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS); // 75
// ford.accelerate(); // Ford is going at 130 km/h
// ford.accelerate(); // Ford is going at 140 km/h
// ford.break(); //Ford is going at 135 km/h

// ford.speedUS = 50;
// console.log(ford);

// v-213
//***************** Inheritance Between 'Classes': Constructor Functions...

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.caclAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  // Person(firstName, birthYear); //TypeError
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// //// Linking prototype
// Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Scince');
console.log(mike);

mike.introduce();
// mike.caclAge(); //17

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // false

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log('Arjunnnnnnn');
