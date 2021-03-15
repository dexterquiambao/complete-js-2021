'use strict';
/*
// Activating Strict Mode lecture

'use strict'; // strict mode goes first

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Introducing an error - missing 's'
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; // reserved keywords so strict will tell you in console
// const private = 534;

// --------FUNCTIONS LECTURE--------

function logger() {
  console.log('My name is Dexter');
}

// calling / running / invoking the function
logger();
logger();
logger();

// parameters go inside () after function name
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// Arguements passed in params
const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);
//console.log(fruitProcessor(5, 2)); // can be logged directly

const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice);

// DRY - Dont Repeat Yourself


// --------FUNCTIONS ASSIGNMENT--------

function describeCountry(country, population, capitalCity) {
  console.log(country, population, capitalCity);

  const details = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return details
}

const england = describeCountry('England', 40, 'London');
console.log(england);

// Correct syntax for above code
 function describeCountry(country, population, capitalCity) {
 return `${country} has ${population} million people and its capital city is ${capitalCity}. `;
 }

 const descPortugal = describeCountry('Portugal', 10,
 'Lisbon');
 const descGermany = describeCountry('Germany', 83,
 'Berlin');
 const descFinland = describeCountry('Finland', 6,
 'Helsinki');
 console.log(descPortugal, '\n', descGermany, '\n', descFinland);


// --------FUNCTIONS DECLARATION VS EXPRESSIONS LECTURE--------

// Function Decleration example
function calcAge1(birthYear) {
  return 2021 - birthYear; // same as const age = 2021 - birthYear
}

const age1 = calcAge1(1987); // 1987 is the arguement passed into the parameter
// console.log(age1);

//Function Expression - Expressions produce values
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

// --------FUNCTIONS DECLARATION VS EXPRESSIONS ASSIGNMENT--------

// Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}


const englandPercentage1 = percentageOfWorld1(40);
const philippinesPercentage1 = percentageOfWorld1(90);
const chinaPercentage1 = percentageOfWorld1(1441);

console.log(englandPercentage1, philippinesPercentage1, chinaPercentage1);

const englandPercentage2 = percentageOfWorld2(40);
const philippinesPercentage2 = percentageOfWorld2(90);
const chinaPercentage2 = percentageOfWorld2(1441);

console.log(Number(englandPercentage2.toFixed(2)), philippinesPercentage2, chinaPercentage2);

























