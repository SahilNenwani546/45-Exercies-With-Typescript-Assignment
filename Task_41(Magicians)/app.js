/* Task No: 41. Magicians: Make a array of magician’s names. Pass the array to a
function called show_magicians(), which prints the name of each magician in the
array.*/
// Define a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name
var magician_names = ["Harry poter", "Sahil", "Khalid"];
// Call the function to print each magician_name
show_magicians(magician_names);
