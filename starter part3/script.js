// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 10;
if (x == 10) console.log(`It's 10 😊`);

const calcAge = (birthYear) => 2037 - birthYear;

//***  Problem solving ***
//PROBLEM 1:
// we work for a company building a smart home thermometer.Our most recent task is this:"Given an array of
//  temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// 1) Understanding the problem
// What is temperatures amplitude?
// Ans: diference betwen highest and lowest temp
// How to compute max and min temperatures?
//  What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// how to ignore errors?
// Find max value in temp array
// Find min value in temp array
// Ask question to google - how to find min and max element of an array in javasceipt?
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([3, 7, 4, 1]); // 7 1
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2
// Function should rexeive 2 arrays of temps
// 1) Understanding the problem
// -with 2 arrays, should we implemet functionality twice? No just merge two arrays.
// 2) Breaking up into sub-problems
// How to merge 2 Arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// //calcTempAmplitude([3, 7, 4, 1]); // 7 1
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// *** Bug fixing ***
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // Fix
    // value: Number(prompt("Degrees celsius")),
    value: 10,
  };
  //Find
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

//
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// Coading challenge
//Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
// s. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// Solve
//
const data1 = [17, 21, 23];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(`...` + str); // ...17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...
};
printForecast(data1);
