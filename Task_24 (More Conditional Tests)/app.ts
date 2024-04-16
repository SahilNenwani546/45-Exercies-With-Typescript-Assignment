/* Task No: 24. More Conditional Tests: You don’t have to limit the number of tests you 
create to 10. If you want to try more comparisons, write more tests. Have at least one 
True and one False result for each of the following:









let apple  = "apple";

// • Tests for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");


console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");



let uppercaseApple = "APPLE";

// • Tests using the lower case function

console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

/* • Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to */

let ten = 10;
let twenty = 20;

// Numerical tests
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\nIs ten is greter than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

// • Tests using "and" and "or" operators

// using && (and) operator
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);


console.log("\n twenty is not equal to 10 and twenty is less than 10");
console.log(twenty != 10 && twenty < 10);

// using || (OR) operator
console.log("\n 30 is greater than 60 OR 30 is equal to 30");
console.log( 30 > 60 || 30 == 30);

console.log("\n 30 is greater than 60 OR 30 is not equal to 30");
console.log( 30 > 60 || 30 != 30);


let fruits = ["apple", "banana", "orange"];

//• Test whether an item is in a array
console.log("\nIs orange include in my Fruits array");
console.log(fruits.includes("orange"));

//• Test whether an item is not in a array */
console.log("\nIs orange not include in my Fruits array");
console.log(!fruits.includes("orange"));

