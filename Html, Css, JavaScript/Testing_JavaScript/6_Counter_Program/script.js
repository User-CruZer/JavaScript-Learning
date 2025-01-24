// Counter Program

const decreaseBTN = document.getElementById("decreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const increaseBTN = document.getElementById("increaseBTN");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBTN.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBTN.onclick = function(){
    count--;
    countlabel.textContent = count
}
resetBTN.onclick = function(){
    count = 0;
    countlabel.textContent = count
}