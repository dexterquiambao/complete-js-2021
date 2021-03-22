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



// --------ARROW FUNCTIONS LECTURE--------

const calAge2 = function(birthYear) {
  return 2021 - birthYear;
}

//Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1987, 'Dexter'));
console.log(yearsUntilRetirement(1980, 'Robert'));


// --------ARROW FUNCTIONS ASSIGNMENT--------

const percentageOfWorld3 = population => (population / 7900) * 100;

const englandPercentage3 = percentageOfWorld3(40);
const philippinesPercentage3 = percentageOfWorld3(90);
const chinaPercentage3 = percentageOfWorld3(1441);
console.log(englandPercentage3, philippinesPercentage3, chinaPercentage3);


// --------FUNCTIONS CALLING OTHER FUNCTIONS LECTURE--------

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(applePieces, orangePieces);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// --------FUNCTIONS CALLING OTHER FUNCTIONS ASSIGNMENT--------

function percentageOfWorld3(population) {
  return (population / 7900)
 * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld3(population).toFixed(2);
  const description = `${country} has ${population}, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation('England', 80);
describePopulation('China', 1440);
describePopulation('USA', 500);


// --------REVIEWING FUNCTIONS LECTURE--------

const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0){
  console.log(`${firstName} retires in ${retirement} years.`);
  return retirement;
  } else {
  console.log(`${firstName} has already retired`);
  return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Dexter'));
console.log(yearsUntilRetirement(1950, 'James'));


// --------INTRODUCTION TO ARRAYS LECTURE--------

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']; // Literal syntax
console.log(friends);

// Different way to use arrays
const someYears = new Array(1987, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // to find the last element

friends[2] = 'James'; // replacing a value in the array
console.log(friends); // values in an array even using 'const' can be mutated

const firstName = 'Dexter';
const dexter = [firstName, 'Quiambao', 2021 - 1987, friends]; // adding an array inside another array
console.log(dexter);
console.log(dexter[3][1]); // accessing an array inside another array



// Exercise

const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const years = [1990, 1950, 1987, 2002];

const age1 = calcAge(years[0]); // an expression
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]


// --------INTRODUCTION TO ARRAYS ASSIGNMENT--------

const population = [40, 20, 108, 8];

console.log(population);
console.log(population.length);
console.log(population.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900)
 * 100;
}

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentages);


// --------BASIC ARRAY OPERATIONS(METHODS) LECTURE--------

const friends = ['Michael', 'Steven', 'Peter']; // Literal syntax

// Add Elements
const newLength = friends.push('James'); // push arguement into frineds array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // unshift methods moves John to index 0 in the array
console.log(friends);

// Remove Elements
const popped = friends.pop(); // Removes Last Element
console.log(friends);
console.log(popped); // shows that James has been removed from the array

friends.shift(); // Removes first element
console.log(friends);

console.log(friends.indexOf('Steven')); // should be index 1l
console.log(friends.indexOf('Bob')); // shows -1 as it does not exist

console.log(friends.includes('Steven')); // ES6 Function like Ruby// boolean that uses strict equality
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log(`You have a friend called Peter`);
}



// --------INTRODUCTIONS TO OBJECTS LECTURE--------

const dexterArray = [
  'Dexter',
  'Quiambao',
  2021 - 1987,
  'developer',
  ['Michael', 'Peter', 'Steven']
];

// key value pairs

const dexter = { // {} = object literal syntax
  firstName: 'Dexter',
  lastName: 'Quiambao',
  age: 2021 - 1987,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}; // contains 5 key value pairs
*/



// --------DOT VS. BRACKET NOTATION LECTURE--------

const dexter = { // {} = object literal syntax
  firstName: 'Dexter',
  lastName: 'Quiambao',
  age: 2021 - 1987,
  job: 'coder',
  friends: ['Michael', 'Peter', 'Steven']
}; // contains 5 key value pairs

console.log(dexter);
console.log(dexter.firstName);
console.log(dexter['lastName']);

const nameKey = 'Name';
console.log(dexter['first' + nameKey]); // everything with name in object
console.log(dexter['last' + nameKey]);

const interesedIn = prompt('What do you want to know about Dexter? Choose between firstName, lastName, age, job and friends');
console.log(interesedIn);

console.log(dexter.interesedIn); // result is undefined because it is not a property inside the 'dexter' object
console.log(dexter[interesedIn]);

if(dexter[interesedIn]) {
  console.log(dexter[interesedIn]);
} else {
  console.log('Wrong selections. Choose between firstName, lastName, age, job and friends');
}


dexter.location = 'London';
dexter['twitter'] = '@dexterrr';
console.log(dexter); // adds property to 'dexter' value


















