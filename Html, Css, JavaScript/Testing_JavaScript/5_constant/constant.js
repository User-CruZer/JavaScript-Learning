// const = a variable that can't be changed

const PI = 3.14; // just works for number for the capital letter, and not for strings
let radius;
let circumrefrence;

// radius = window.prompt("enter the radius of a circle");


document.getElementById("submit_button").onclick = function(){
    radius = document.getElementById("input_text").value
    radius = Number(radius);
    circumrefrence = 2 * PI * radius;
    console.log(circumrefrence);
    document.getElementById("hasil").textContent = `result: ${circumrefrence}` + "cm"
}