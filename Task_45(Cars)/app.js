"use strict";
/* Task No: 45. Cars: Write a function that stores information about a car in a
Object. The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments. Call the
function with the required information and two other name-value pairs, such as a
color or an optional feature. Print the Object that’s returned to make sure all
the information was stored correctly.*/
function create_car(manufacturer, model, ...properties) {
    let car = {
        manufacturer,
        model,
    };
    for (let [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
let my_car = create_car("Toyota", "Corrolla", ["color", "White"], ["Sunroof", "True"], ["Speed", "280 KM/hour"], ["Year", "2024"]);
console.log(my_car);
