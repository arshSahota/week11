// name = prompt("Enter your name here: ");

// function greet(name){
//     console.log("Hello " +name+"!");
// }
// greet(name);

// 2nd method

// let greet = function(name){
//     console.log("Hello "+ name+"!");
// }
// greet(name);

// arrow method

// let greet = (name, time="day") => {
//     // console.log("Hello "+name+"!")
//     console.log("Good "+time+ " " + name+"!");
// }
// greet(name);

// circle area function

// radius = prompt("Please enter circle area here: ")
// let circleArea = (radius) =>{
//     let area = 3.14*radius*radius;
//     return area;
// }
// circleArea(radius);
// console.log(`Area of the circle is: ${circleArea(radius)}`);


const body = document.querySelector("body")
const ul = document.querySelector("body .shopping")
let array_list = ["Apples", "Butter", "Chicken", "Salad", "Flowers"];
ul.classList.replace("circleList", "sqaureList") 
let ShoppingList = array_list.forEach(item => {
    const newList = document.createElement("li")
    // newList.classList.add("sqaureList")
    // ul.classList.replace("circleList", "sqaureList")
    newList.innerHTML = item;
    body.appendChild(newList)
});


