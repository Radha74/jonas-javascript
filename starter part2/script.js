"use strict";
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");
// ////

// JS function
// function logger() {
//   console.log("my name is Jonas");
// }

// logger(); // calling/running/invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges. `;
//   return juice;
// }

//fruitProcessor(5, 0);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice); // juice with 5 apples and 0 oranges.

// const appleOrangesJuice = fruitProcessor(2, 4);
// console.log(appleOrangesJuice);

// //Function declaration
// const person1Age = calcAge1(2000);
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// console.log(person1Age); // 37

//Function ex pression//anonimus function

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const parson2Age = calcAge2(1991);

// console.log(person1Age, parson2Age);

//**** Arrow function *****
//birthYear => 2037 - birthYear;
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const person3Age = calcAge3(1991);
// console.log(person3Age);
// //
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   //return retirment;
//   return `${firstName} retires in ${retirment} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas")); //19
// console.log(yearsUntilRetirement(1990, "Bikash"));
// //
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges. `;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Reviewing Function
// const calcAge = function (year) {
//   return 2037 - year;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirment = 65 - age;
//   if (retirment > 0) {
//     console.log(`${firstName} retires in ${retirment} years`);
//     return retirment;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

//   //   return `${firstName} retires in ${retirment} years`;
// };

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1970, "Bikash"));

//***** Chalage 1 *****
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5)); //4

//Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log(`No team win`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
//checkWinner(100, 200);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

// // *** JS Array ***
// const friend1 = "Bikash";
// const friend2 = "Akash";
// const friend3 = "Rakesh";
// // instade of
// const friends = ["Bikash", "Akash", "Rakesh"];
// console.log(friends[0]); // Bikash
// console.log(friends.length); // 3
// friends[2] = "jay";
// console.log(friends); //[ 'Bikash', 'Akash', 'jay' ]
// //
// const firstName = "Jonas";
// const Jonas = [firstName, "Schmedtmann", 2037 - 1991, "teachar", friends];
// console.log(Jonas);

//
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [2015, 2010, 1998, 2004, 2001];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages); //[ 22, 27, 36 ]

// ***** Array methods *****
// Add element
// const friends = ["Bikash", "Akash", "Rakesh"];
// const newLengh = friends.push("Jay");
// console.log(friends); //[ 'Bikash', 'Akash', 'Rakesh', 'Jay' ]
// console.log(newLengh); // 4
// friends.unshift("Arjun");
// console.log(friends); //[ 'Arjun', 'Bikash', 'Akash', 'Rakesh', 'Jay' ]

// // Remove element
// friends.pop(); // remove the last element
// const popped = friends.pop();
// console.log(popped); // Rakesh
// console.log(friends); // [ 'Arjun', 'Bikash', 'Akash' ]

// friends.shift();
// console.log(friends); // ['Bikash', 'Akash' ]

// console.log(friends.indexOf("Akash")); // 1
// console.log(friends.indexOf("Bob")); // -1

// console.log(friends.includes("Akash")); // true
// console.log(friends.includes("Bob")); // false

// if (friends.includes("Akash")) {
//   console.log(`You have a friend calles Akash`);
// }

// Codding chalange 2

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // Another way
// // const calcTip = (bill) => (50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// const bills = [125, 155, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// calcTip(bills[2]);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// //***** JS object *****
// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   Job: "teachar",
//   friends: ["Michael", "Peter", "Stecen"],
// };

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]); //jonas
// console.log(jonas["last" + nameKey]); //Schmedtmann
// // console.log(jonas.'last' + nameKey); // error
// const interestedIn = prompt("Whate do you know about Jonas? choose between firstName,lastName,age, job,and friends");

// console.log(jonas[interestedIn]); // jonas
// //console.log(jonas.interestedIn); // undefind //not work

// if (jonas[interestedIn]) {
//   console.log("jonas[interestedIn]");
// } else {
//   console.log("Wrong requat! choose between firstName,lastName,age, job,and friends ");
// }

// //Add data in object
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasscjdkfdfh";

// console.log(jonas); //
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`
// );

// ***** Object methods *****
// const jonas = {
//   firstName: "jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   Job: "teachar",
//   friends: ["Michael", "Peter", "Stecen"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // },
//   // calcAge: function () {
//   //   return 2037 - this.birthYeah;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah; // mean jonas.age
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${jonas.Job} , and he has ${
//       this.hasDriversLicense ? "a" : "no"
//     } drivers licence.`;
//   },
// };

// console.log(jonas.calcAge()); // 46
// console.log(jonas["calcAge"](1991)); // 46

// console.log(jonas.getSummary()); //jonas is a 46 year old teachar , and he has a drivers licence.

// ///// challenge 3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK

//soluation

//

//***** JS loop *****
// 1.for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// const jonasArray = ["jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Michael", "Peter", "steven"], true];

// const types = []; // create a blank array
// // for (let i = 0; i < 5; i++) {
// //   console.log(jonasArray[i]);
// // }

// for (let i = 0; i < jonasArray.length; i++) {
//   //Reading from jonas array
//   console.log(jonasArray[i]);

//   // Filling types array
//   //types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages); // [ 46, 30, 68, 17 ]

// // continue and break
// console.log("--- only string ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("---break with number----");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

/////
// loops in loops
// const jonas = ["jonas", "Schmedtmann", 2037 - 1991, "teacher", ["Michael", "Peter", "Steven"]];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// } // revers

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weiht repetition ${rep}`);
//   }
// }

// *** While loop

let rep = 1;
while (rep <= 5) {
  console.log(`Lifting weiht repetition ${rep}`);
  rep++;
}

// let dice = Math.random() * 6;
// console.log(dice); // 4.0313 // return rendomly a decimal number

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // this loop will end when dice's value will be 6
  if (dice == 8) console.log(`loop is about to end`);
}

// *** Coding Challenge #4 ***
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK

//soluation

const calcTip = function (bill) {
  return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([1, 2, 3, 6])); //3

console.log(calcAverage(totals));
console.log(calcAverage(tips));
