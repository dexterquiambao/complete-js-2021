// let js = 'amazing';
// console.log(40 + 8 + 23 -10);

// let firstName = 'Dexter';
// console.log(firstName);

// Variable lecture challenge
// let country = 'Philippines';
// let continent = 'South East Asia';
// let population = '30 million';

// console.log('I am from the ' + country + ' in ' + continent + ', with a population of ' + population +  '.');

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Dexter');

// Data sets lecture challenge
// let isIsland = true
// let language
// console.log(isIsland)
// console.log(language)

// Let, const and var lecture
// let language = 'English';
// console.log(language);
// language = 'Tagalog';
// console.log(language);
// const spokenLanguage = 'English';
// spokenLanguage = 'Spanish'
// script.js:30 Uncaught TypeError: Assignment to constant variable.

// Basic Operators Lecture
// const ageDexter = 2021 - 1987;
// const ageSarah = 2021 - 1984;
// console.log(ageDexter, ageSarah);

// const now = 2021
// const ageDexter = now - 1987;
// const ageSarah = now - 1984;
// console.log(ageDexter, ageSarah);

// console.log(ageDexter * 2, ageDexter / 10, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3 = 2*2*2

// const firstName = 'Dexter';
// const lastName = 'Quiambao';
// // Basic concatenation
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// console.log(x);

// // Assignment Operators
// x += 10; // x = x + 10 = 25
// console.log(x);

// x *= 4; // x = x * 4 = 100
// console.log(x);

// x ++; // x = x + 1
// console.log(x);

// x --; // x = x - 1
// console.log(x);

// // Comparison Operators
// console.log(ageDexter > ageSarah);
// console.log(ageSarah > ageDexter);
// // > , < , >= , <=
// console.log(ageDexter >= 33);
// console.log(ageDexter <= 32);

// const isFullAge = ageDexter >= 33;
// console.log(now - 1991 > now - 2018);

//Basic Operators Lecture Challenge

// let philippinesPopulation = 15000000;
// console.log(philippinesPopulation / 2);
// philippinesPopulation ++;
// console.log(philippinesPopulation);

// let finlandPopulation = 6000000;
// console.log(philippinesPopulation > finlandPopulation);

// let averagePopulation = 33000000;
// console.log(philippinesPopulation < averagePopulation);

// const country = 'Philippines';
// const continent = 'Asia';
// const spokenLanguage = 'Tagalog';

// console.log(country + ' is in ' + continent + ', and its ' + philippinesPopulation + ' people speak ' + spokenLanguage);

// Operator Precedance - MDN Operator Precedance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// const now = 2021
// const ageDexter = now - 1987;
// const ageSarah = now - 1984;


// console.log(now - 1991 > now - 2018);

// console.log(20 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y); // Will equals 10 -> x = y = 10 -> right to left

// // const averageAge = ageDexter + ageSarah / 2;
// const averageAge = (ageDexter + ageSarah) / 2; // Using () operator precedance to calculate the correct average
// console.log(ageDexter, ageSarah);
// console.log(averageAge);

// Coding Challenge #1

/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

const markHeight = 1.69;
const markMass = 78;
const markBMI = markMass / markHeight ** 2; // (height * height)
console.log(markBMI); // answer is 27.309968138370508

const johnHeight = 1.88;
const johnMass = 92;
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI); // answer is 26.029877772747852

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); // Should equals True

console.log(markBMI, johnBMI, markHigherBMI);
