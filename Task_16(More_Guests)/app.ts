/*More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end 
of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest
 to the end of your list. • Print a new set of invitation messages, one for each person in your list*/

 let Guest_list = ["Ali", "Sahil", "Muzammil"];
 //let x = 0;
 //while (x < Guest_list.length){
 //    console.log(`Dear ${Guest_list[x]} : \n We are invited to you dinner tomorrow \n`);
 //    x++;
 //}
 //console.log(`"Unfortunately ${Guest_list[2]}, can't come to dinner."`);
 Guest_list[2] = "Rizwan";
 console.log("\n New List Of Invitation : \n");
 let y = 0;
 while (y < Guest_list.length) {
     console.log(`Dear ${Guest_list[y]} : \n We are invited to you dinner tomorrow \n`);
     y++;
 }
 console.log("\n found a bigger dinner table, so now more space is available so our new guest are:\n ");
 Guest_list.unshift("Adnan");
 Guest_list.splice(2, 0, "kantesh");
 Guest_list.push("Shayan");
 let z = 0;
 while (z < Guest_list.length) {
     console.log(`Dear ${Guest_list[z]} : \n we are invited to you dinner tomorrow \n`);
     z++;
 }