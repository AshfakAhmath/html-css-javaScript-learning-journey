document.getElementById("myButton").onclick = function(){
    let name = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Hello ${name}!`;
}

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("myButton1").onclick = function(){
    radius = document.getElementById("myInput1").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `${circumference}cm`;
}