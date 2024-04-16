/* Task No: 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// Define variable
var alien_Color = "green";
// Using If and Else-If statements
if (alien_Color === "green") {
    console.log("\t(Version 1)\nyou shot down green alien you have earned 5 points");
}
else if (alien_Color === "yellow") {
    console.log("\t(Version 1)\nyou shot down yellow alien you have earned 10 points");
}
else if (alien_Color === "red") {
    console.log("\t(Version 1)\nyou shot down red alien you have earned 15 points");
}
// Version 2
var alien_Color2 = "yellow";
if (alien_Color2 === "green") {
    console.log("\t(Version 2)\nyou shot down green alien you have earned 5 points");
}
else if (alien_Color2 === "yellow") {
    console.log("\t(Version 2)\nyou shot down yellow alien you have earned 10 points");
}
else if (alien_Color2 === "red") {
    console.log("\t(Version 2)\nyou shot down red alien you have earned 15 points");
}
// Version 3
var alien_Color3 = "red";
if (alien_Color3 === "green") {
    console.log("\t(Version 3)\nyou shot down green alien you have earned 5 points");
}
else if (alien_Color3 === "yellow") {
    console.log("\t(Version 3)\nyou shot down yellow alien you have earned 10 points");
}
else if (alien_Color3 === "red") {
    console.log("\t(Version 3)\nyou shot down red alien you have earned 15 points");
}
