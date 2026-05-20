// Element Selectors

// Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById()  //ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()   // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()  //NODELIST

// 1. document.getElementById()  
const heading1 = document.getElementById("h1");
heading1.style.backgroundColor = "yellow";
heading1.style.textAlign = "center";

console.log(heading1);

<h1 id="h1" style="background-color: yellow; text-align: center;">Welcome</h1>

const heading1 = document.getElementById("wrongID");

console.log(heading1);
null

// 2. document.getElementsClassName()
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "yellow";

// 1.	HTMLCollection(3)
// 1.	0: div.fruits
// 2.	1: div.fruits
// 3.	2: div.fruits
// 4.	length: 3
// HTML collection are itterable

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}


// .forEach() 
// .forEach() is used to do something for every item in an array.
// •	It goes through items one by one 
// •	Performs an action 
// •	Does NOT create a new array

let number = [1, 2, 3, 4, 5];

number.forEach(doubleNumbers);
number.forEach(displayElements);

console.log(number);
function doubleNumbers(element, index, array){
    array[index] = element * 2;
}

function displayElements(element){
    console.log(element)
}

// To get the array inside your function, all you have to do is add those extra parameters to your function definition!
// function doubleNumbers(element, index, array)

// .map() 
// .map() is used to change array values and create a new array.
// •	Loops through every item 
// •	Modifies/transforms values 
// •	Returns a new array 
// •	Original array does not change

const numbers = [1, 2, 3, 4, 5];

// .map returns a new array, so we must save it to a variable
const squares = numbers.map(squareNumbers);

console.log(squares); // Output: [1, 4, 9, 16, 25] (New Array)
console.log(numbers); // Output: [1, 2, 3, 4, 5]   (Original Array is safe)

function squareNumbers(element) {
    return Math.pow(element, 2); // Requires a 'return' keyword to build the new array
}
const squares = numbers.map(function makeSquare(element){
    return Math.pow(element, 2);
});
// HTML collection don’t have forEach() method

// Array.from() 
// Array.from() is used to create a new array from another value.
// It converts:
// •	string → array 
// •	NodeList → array 
// •	iterable objects → array
// •	HTML collection → array

// So we can use forEach(), map() like array methods

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

Array.from(fruits).forEach(makeYellow);

function makeYellow(element){
    element.style.backgroundColor = "yellow";
}


// 3. document.getElementsByTagName()
const h4Eliments = document.getElementsByTagName("h4");
const liEliments = document.getElementsByTagName("li");

// for(let h4Eliment of h4Eliments){
//     h4Eliment.style.backgroundColor = "yellow";
// }

// for(let liEliment of liEliments){
//     liEliment.style.backgroundColor = "lightgreen";
// }

Array.from(h4Eliments).forEach((element) => {
  element.style.backgroundColor = "yellow";
});

Array.from(liEliments).forEach((element) => {
  element.style.backgroundColor = "lightgreen";
});


// 4. document.querySelector()   

const firstElement = document.querySelector(".text");

firstElement.style.backgroundColor = "yellow";
// This works on first element of that className or tagName.

// 5. document.querySelectorAll()  

// querySelectorAll()  is same like className and tagName but it has built-in forEach() method so we don’t want to use Array.from() method 
// const element = document.querySelectorAll(".text");

element.forEach((item) => {
  item.style.backgroundColor = "yellow";
});
