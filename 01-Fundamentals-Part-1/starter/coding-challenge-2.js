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
