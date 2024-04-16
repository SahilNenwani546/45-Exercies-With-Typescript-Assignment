/* Task No: 44. Sandwiches: Write a function that accepts a array of items a person 
wants on a sandwich. The function should have one parameter that collects as many 
items as the function call provides, and it should print a summary of the 
sandwich that is being ordered. Call the function three times, using a different 
number of arguments each time.*/

// Define a function with a rest parameterthat accept item arugment representing our sandwich
function makeSandwich(... item: string[]) {
    console.log("\nMaking a sandwich with the following items: \n");
    item.forEach(singleitem => console.log(singleitem));
    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");


makeSandwich("Bread", "Butter",);


makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken","Tomato");
