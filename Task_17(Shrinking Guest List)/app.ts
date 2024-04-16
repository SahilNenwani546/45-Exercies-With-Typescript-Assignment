/*Task # 17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
 for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still 
invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure 
you actually have an empty list at the end of your program*/

let Guest_list = ["Ali", "Sahil", "Rizwan"];


console.log("\n found a bigger dinner table, so now more space is available so our new guest are:\n ");
Guest_list.unshift("Adnan");
Guest_list.splice(2, 0, "kantesh");
Guest_list.push("Shayan");
let z = 0;
while (z < Guest_list.length) {
    console.log(`Dear ${Guest_list[z]} : \n we are invited to you dinner tomorrow \n`);
    z++;
}

console.log("\nUnfortunately, the new dinner table won't arrrive in time,so we can only two people invite for dinner.\n")

while (Guest_list.length>2){
let notinvited = Guest_list.pop()
console.log(`sorry,Mr.${notinvited} Due to limitet space we can't invite to dinner\n`);
}



for (let a = 0; a < Guest_list.length; a++) {
    console.log(`Dear ${Guest_list[a]} : \n we are still invited to you dinner tomorrow \n`);
}


Guest_list.pop()
Guest_list.pop()
console.log(Guest_list);