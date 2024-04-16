"use strict";
/*Task # 15 : Changing Guest List: You just heard that one of your guests can’t
make the dinner, so you need to send out a new set of invitations. You’ll have
to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of
 your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the
 new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list*/
let Guest_list = ["Ali", "Sahil", "Muzammil"];
let x = 0;
while (x < Guest_list.length) {
    console.log(`Dear ${Guest_list[x]} : \n We are invited to you dinner tomorrow \n`);
    x++;
}
console.log(`"Unfortunately ${Guest_list[2]}, can't come to dinner."`);
Guest_list[2] = "Rizwan";
console.log("\n New List Of Invitation : \n");
let y = 0;
while (y < Guest_list.length) {
    console.log(`Dear ${Guest_list[y]} : \n We are invited to you dinner tomorrow \n`);
    y++;
}
