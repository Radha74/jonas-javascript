// let customerName = "Arjun barman";
// console.log(customerName);

// firstName = "Arjun";
// console.log(firstName);
//
//Math Oparator
// const currentYear = 2023;
// const ageArjun = currentYear - 1998;
// const ageRadha = currentYear - 2004;
// console.log(ageArjun); //25
// console.log(ageRadha); //19
// console.log(ageArjun * 2, ageArjun / 2, 2 ** 3); // 52 13 8

// concatinat string
// const firstName = "jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName); //jonas Schmedtmann
//
//Assignment oparetors
// let x = 10 + 5;
// x += 10; // mean x = x + 10
// console.log(x); //25

// x *= 4;
// console.log(x); //100
// x++; //mean x = x+1 incress
// x--; // mean x = x-1 dicriss
// //
//comparision oparator
// console.log(ageArjun > ageRadha); // true
// console.log(ageRadha >= 18); //true

// const isFullAge = ageRadha >= 18;

//
// *** chalenge 1 ***
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK
//// Solve data1
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;
//// solv data2
// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

//String
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm " + firstName + ",a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas); //I'm Jonas,a 46 years old teacher!
// const jonasNew = `I'm ${firstName},a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew); //I'm Jonas,a 46 years old teacher!
// console.log(`String
// multiple
// line`);
// String
// multiple
// line
//
// use if and else
// const age = 19;
// const isOldEnough = age >= 18;

// const favourite = Number(prompt("what's your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 25) {
//   //first check
//   console.log("Cool! 25 is an amazing number");
// } else if (favourite === 10) {
//   // second check
//   console.log("10 is also a cool number");
// } else {
//   console.log("Number is not 25 or 10");
// }

// if (favourite !== 23) {
//   console.log("why not 25");
// }
/////
// logical oparator
// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("Someoe else should drive..");
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);
// //
//***** chalange 2 ****
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("scoreKoalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// }
//bonus 1
// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log("scoreKoalas win the trophy");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one wins the trophy");
// }
//
//switch statement
const day = "friday";
// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case 'tuesday':
//        console.log('Prepare theory videos');
//      break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code example");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy he weekend");
//   default:
//     console.log("Not a valid day");
// }
//same as work

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code example");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

//conditional oparator
const age = 23;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);
console.log('I like to drink ${ge >= 18 ? "wine" : "water"} ');
////
//***** 3rd chelenge *****
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK
//Soluation
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip},and the total value ${bill + tip}`);
