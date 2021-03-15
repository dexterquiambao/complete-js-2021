/*
// Activating Strict Mode lecture

'use strict'; // strict mode goes first

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Introducing an error - missing 's'
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; // reserved keywords so strict will tell you in console
// const private = 534;
*/

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
