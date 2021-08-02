// declare two variables
var banglaMarks = 75;
var englishMarks = 80;
// add bangla and english marks and assign to total marks
var totalMarks = banglaMarks + englishMarks;
console.log(totalMarks);
// divided the total marks by subjecNumber and assign the result to averageMarks
var subjectNumber = 2;
var averageMarks = totalMarks / subjectNumber;
console.log("He got average value ");
console.log(averageMarks);
// do the same work using array

console.log("find average value using an array variable");
var testMarks = [85, 90];
var totalMarks = testMarks[0] + testMarks[1];
console.log(("Total Marks ="), totalMarks);
averageMarks = totalMarks / testMarks.length;
console.log(("Average marks in test = "), averageMarks);
console.log(testMarks.length)//size of array
// use shorthand of mathematical operation
var eggPrice = 40;
var eggNumber = 20;
var totalEggPrice = eggPrice * eggNumber;
console.log(("Total Cost ="), totalEggPrice);
console.log("After increase 10 tk in every egg");
// eggPrice = eggPrice +10; 
eggPrice += 10; // shorthand for 27th lines comment
// buy less egg to less cost or in tolerable
// eggNumber = eggNumber - 5;
eggNumber -= 5; // shorthand of the 30th line comment
console.log(("Egg price Now ="), eggPrice);
console.log(("Buying egg Now = "), eggNumber);
totalEggPrice = eggPrice * eggNumber;
console.log(("After increase price, the total Cost = "), totalEggPrice);

