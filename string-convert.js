// give numbers as string
console.log("string show")
var stringVar = "2434";
// insert the string of number into a variable and see its data type 
var intOfstringVar = parseInt(stringVar);
console.log(intOfstringVar);
console.log(stringVar);
// convert the string to integer
console.log("String to integer");
console.log(parseInt(stringVar));
// Show the string of a float number
console.log("Show the string of a float number");
var stringFloat = "45354.675647";
console.log(stringFloat);
// Now convert the float string into Integer number using parseFloat
console.log("Now convert the float string into Integer number using parseFloat");
console.log(parseFloat(stringFloat));
// use typeof to get the variable data type
console.log("use typeof to get the variable data type");
console.log(typeof (stringFloat));
console.log(typeof (intOfstringVar));
// convert a float into integer 
var floatNumber = 432.6543663;
console.log(floatNumber);
console.log("convert the number to float");
var intNumber = parseInt(floatNumber);
console.log(intNumber);
// find the date using date type data 
var today = new Date();
console.log(today);
// type of today variable is 
console.log(typeof (today)); //object type data 
// specify the place after float point in floating point number
console.log("place specification after point in a floatNumber ");
var floatPNumber = 2354.52545;
console.log(floatPNumber)
// specify the number to three place after point 
console.log("place specified below for three place");
var threePlacedFloat = floatPNumber.toFixed(3);
console.log(threePlacedFloat);
console.log("NOw find the type of that numbers");
console.log(typeof (threePlacedFloat));
// Then convert the Number type in float
console.log("Then convert the Number type in float")
console.log(parseFloat(threePlacedFloat));
console.log("now change the place of the new number point specification and convert into number to string");
var secondPlace = parseFloat(parseFloat(threePlacedFloat).toFixed(2));
console.log(secondPlace);