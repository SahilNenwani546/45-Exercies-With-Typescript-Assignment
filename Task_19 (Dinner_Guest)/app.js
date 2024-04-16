/*Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.*/
var Guest_list = ["Ali", "Sahil", "Muzammil"];
// let x = 0;
// while (x < Guest_list.length){
//     console.log(`Dear ${Guest_list[x]} : \n We are invited to you dinner tomorrow \n`);
//     x++
// }
var lengthGuests = Guest_list.length;
console.log("We are inviting Total ".concat(lengthGuests, " guests"));
