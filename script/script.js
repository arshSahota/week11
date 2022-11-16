// user_name = prompt("Enter your name here: ");

// function greet(name){
//     console.log("Hello " +name+"!");
// }
// greet(user_name);

// 2nd method

// let greet = function(name){
//     console.log("Hello "+ name+"!");
// }
// greet(user_name);

// arrow method

// let greet = (name, time="day") => {
//     // console.log("Hello "+name+"!")
//     console.log("Good "+time+ " " + name+"!");
//     console.log(`Good ${time} ${name}!`)
// }
// greet(user_name, " ", "morning");

// circle area function

// radius = prompt("Please enter circle area here: ")
// let circleArea = (radius) =>{
//     let area = 3.14*radius*radius;
//     return area;
// }
// result = circleArea(radius);
// document.getElementById("radius").innerHTML = radius;
// document.getElementById("result").innerHTML = result;
// ul.classList.replace("circleList", "sqaureList") 
    // newList.classList.add("sqaureList")
    // newList.classList.add("sqaureList")


const body = document.querySelector("body")
const ul = document.querySelector(".shopping")

let array_list = ["apples", "butter", "chicken", "salad", "flowers", "green-pepper"];
//function
let ShoppingList = array_list.forEach(item => {
    const newList = document.createElement("li")
    newList.textContent = item;
    body.appendChild(newList)
});

function changeListStyle(GroceryList){
    GroceryList.classList.replace("circleList", "sqaureList")
}
changeListStyle(ul);


