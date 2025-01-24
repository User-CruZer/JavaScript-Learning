// how to accept user input

// 1. Easy Way = window.prompt
// 2. pro way = html textbox


// window prompt:
let player;

player = window.prompt("testing");

console.log(player);


// html textbox
let username;

document.getElementById("submitter").onclick = function(){
    username = document.getElementById("insert").value;
    console.log(username);
    document.getElementById("h1").textContent = `hello, ${username}!`
}