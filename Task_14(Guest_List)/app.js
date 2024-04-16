/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people
you’d like to invite to dinner. Then use your list to print a message
to each person, inviting them to dinner.*/
var Guest_list = ["Ali", "Sahil", "Muzammil"];
var x = 0;
while (x < Guest_list.length) {
    console.log("Dear ".concat(Guest_list[x], " : \n We are invited to you dinner tomorrow \n"));
    x++;
}
