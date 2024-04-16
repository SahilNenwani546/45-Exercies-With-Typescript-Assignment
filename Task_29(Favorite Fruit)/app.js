"use strict";
/* Task No: 29. Favorite Fruit: Make a array of your favorite fruits, and then write a
series of independent if statements that check for certain fruits in your array.*/
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favourite_fruits = ["Mango", "Orange", "Strawberry"];
/* • Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
if (favourite_fruits.includes("Mango")) {
    console.log("I Really Like Mangos");
}
if (favourite_fruits.includes("Orange")) {
    console.log("I Really Like Orange");
}
if (favourite_fruits.includes("Banana")) {
    console.log("I Really Like Bananas");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("I Really Like Strawberrys");
}
if (favourite_fruits.includes("Grapes")) {
    console.log("I Really Like Grapes");
}
