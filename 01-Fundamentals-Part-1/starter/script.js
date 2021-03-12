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

// const markHeight = 1.69;
// const markMass = 78;
// const markBMI = markMass / markHeight ** 2; // (height * height)
// console.log(markBMI); // answer is 27.309968138370508

// const johnHeight = 1.88;
// const johnMass = 92;
// const johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI); // answer is 26.029877772747852

// console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI); // Should equals True

// console.log(markBMI, johnBMI, markHigherBMI);

// const firstName = 'Dexter';
// const job = 'Developer';
// const birthYear = 1987;
// const year = 2021;

// const dexter = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '.';

// console.log(dexter);

// const dexterNew = `I'm ${firstName}, ${year - birthYear} year old ${job}.`;

// console.log(dexterNew);
// console.log(`String with\n\
//   multiple\n\
//   lines`);
// console.log(`String with
//   multiple
//   lines`);

// If , Else Statements lecture
// const age = 19;
// const age = 16
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//   console.log(`Paul can start driving 🤣`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sorry, Paul is not old enough yet 😤, he needs to wait ${yearsLeft} more years.`);
// }

// const birthYear = 1987;
// let century;

// if(birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// const philippinesPopulation = 15000000;
// const philippinesPopulation = 45000000;
// const country = 'Philippines';
// const averagePopulation = 33000000;

// if (philippinesPopulation > averagePopulation) {
//   console.log(`${country} population is above average.`);
// } else {
//   console.log(`${country} is ${averagePopulation - philippinesPopulation} below average`);
// }

// /*Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement*/

// // // const markHeight = 1.69;
// // const markHeight = 1.89;
// // const markMass = 78;
// // let markBMI = markMass / markHeight ** 2; // (height * height)
// // console.log(markBMI); // answer is 27.309968138370508

// // const johnHeight = 1.88;
// // const johnMass = 92;
// // let johnBMI = johnMass / (johnHeight * johnHeight);
// // console.log(johnBMI); // answer is 26.029877772747852

// // console.log(markBMI, johnBMI);

// // const markHigherBMI = markBMI > johnBMI;
// // console.log(markHigherBMI); // Should equals True

// // console.log(markBMI, johnBMI, markHigherBMI);

// // if (markBMI > johnBMI) {
// //   console.log(`Mark's BMI(${markBMI.toFixed(2)}) is higher than John's(${johnBMI.toFixed(2)}) by ${(markBMI - johnBMI).toFixed(2)}!`);
// // } else {
// //   console.log(`John's BMI(${johnBMI.toFixed(2)}) is lower than Mark's(${markBMI.toFixed(2)})!`);
// // }

// const markHeight = 1.69;
// // const markHeight = 1.89;
// const markMass = 78;
// let markBMI = (markMass / markHeight ** 2).toFixed(2); // (height * height)
// console.log(markBMI); // answer is 27.309968138370508

// const johnHeight = 1.88;
// const johnMass = 92;
// let johnBMI = (johnMass / (johnHeight * johnHeight)).toFixed(2);
// console.log(johnBMI); // answer is 26.029877772747852

// console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI); // Should equals True

// console.log(markBMI, johnBMI, markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI}) by ${(markBMI - johnBMI).toFixed(2)}!`);
// } else {
//   console.log(`John's BMI(${johnBMI}) is lower than Mark's(${markBMI})!`);
// }

// Type Conversion and Coercion Lecture

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(typeof Number(inputYear), typeof inputYear);
// console.log(Number(inputYear) + 18);


// console.log(Number('Jonas')); // gets Nan Not a Number in console
// console.log(typeof Nan);

// console.log(String(23), 23);
// console.log(typeof String(23), typeof 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log(typeof 'I am ' + typeof 23 + ' years old');
// console.log('23' - '10' - 3); // strings are coverted to numbers
// console.log('23' + '10' + 3); // strings are NOT coverted. PLUS operator does not work!
// console.log('23' / '2');
// console.log( '23' > '18');

// let n = '1' + 1; //converted to 11 NOT 2 because of the plus operator
// n = n - 1; // 11 - 1 = 10 because of the minus operator

// // Type Conversion and Coercion Challenge
// console.log('9' - '5'); // Should be 4
// console.log('19' - '13' + '17'); // Should 19 - 30 = -11. Correct Answer is 617
// console.log('19' - '13' + 17); //  Should be 6. Answer = 23. 6 plus 17
// console.log('123' < 57); // True. Answer = False
// console.log(5 + 6 + '4' + 9 - 4 - 2); // Should be 114 + 9 - 4 - 2 = 121?. Answer = 1143


// Truthy and Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
