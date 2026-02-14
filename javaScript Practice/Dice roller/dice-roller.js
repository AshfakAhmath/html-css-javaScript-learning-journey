const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const btn = document.getElementById("btn");

const min = 1;
const max = 6;

let randomNum;
let randomNum1;
let randomNum2;

btn.onclick= function(){
    randomNum = Math.floor(Math.random() * max) + min;
    p1.textContent = randomNum;

    randomNum1 = Math.floor(Math.random() * max) + min;
    p2.textContent = randomNum1;

    randomNum2 = Math.floor(Math.random() * max) + min;
    p3.textContent = randomNum2;
}
