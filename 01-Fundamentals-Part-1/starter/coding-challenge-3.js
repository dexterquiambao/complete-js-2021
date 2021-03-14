/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const dolphinsScoreAverage = (96 + 108 + 89) / 3;
// const koalasScoreAverage = (88 + 91 + 110) / 3;
// const koalasScoreAverage = (96 + 108 + 89) / 3; // Testing a draw condition in if/else statement - working


// console.log(Number(dolphinsScoreAverage.toFixed(2)), Number(koalasScoreAverage.toFixed(2))); // Working - rounded off to 2 decimal places

// if (dolphinsScoreAverage > koalasScoreAverage) {
//   console.log('The Dolphins win!');
// } else {
//   console.log('The Koalas win!');
// } // working

// if (dolphinsScoreAverage > koalasScoreAverage) {
//   console.log('The Dolphins win!');
// } else if (dolphinsScoreAverage === koalasScoreAverage ) {
//   console.log('It was a draw'); // Working
// } else if (dolphinsScoreAverage < 100 || koalasScoreAverage < 100){
//   console.log('Neither Team wins'); // NOT WORKING
// } else {
//   console.log('The Koalas win!');
// }

// Working Version

// if (dolphinsScoreAverage > koalasScoreAverage) {
//   console.log('Dolphins Win');
// } else if ( dolphinsScoreAverage < koalasScoreAverage) {
//   console.log('Koalas Win');
// } else if (dolphinsScoreAverage === koalasScoreAverage) {
//   console.log('It was a draw');
// }

// BONUS 1 using Data Bonus 1

// const dolphinsScoreAverage = (97 + 112 + 101) / 3;
// const koalasScoreAverage = (109 + 95 + 123) / 3;


// console.log(Number(dolphinsScoreAverage.toFixed(2)), Number(koalasScoreAverage.toFixed(2))); // Working - rounded off to 2 decimal places

// if (dolphinsScoreAverage > koalasScoreAverage && dolphinsScoreAverage >= 100) {
//   console.log('Dolphins Win');
// } else if ( koalasScoreAverage > dolphinsScoreAverage && koalasScoreAverage >= 100) {
//   console.log('Koalas Win');
// } else if (dolphinsScoreAverage === koalasScoreAverage) {
//   console.log('It was a draw');
// } else {
//   console.log('Neither Team Wins!');
// } // - Working

// BONUS 2 using Data Bonus 2

// const dolphinsScoreAverage = (97 + 112 + 101) / 3;
// const koalasScoreAverage = (109 + 95 + 106) / 3;

// // const dolphinsScoreAverage = (80 + 112 + 101) / 3;
// // const koalasScoreAverage = (80 + 95 + 106) / 3; - TESTING Draw below 100

// console.log(Number(dolphinsScoreAverage.toFixed(2)), Number(koalasScoreAverage.toFixed(2)));

// if (dolphinsScoreAverage > koalasScoreAverage && dolphinsScoreAverage >= 100) {
//   console.log('Dolphins Win');
// } else if ( koalasScoreAverage > dolphinsScoreAverage && koalasScoreAverage >= 100) {
//   console.log('Koalas Win');
// } else if (dolphinsScoreAverage === koalasScoreAverage && dolphinsScoreAverage >= 100 && koalasScoreAverage >= 100) {
//   console.log('It was a draw');
// } else {
//   console.log('Neither Team Wins!');
// } // WORKING
