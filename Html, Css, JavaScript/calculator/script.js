var user1;
var user2;

document.getElementById("submitButton").onclick = function(){
    user1 = document.getElementById("insert").value;
    user2 = document.getElementById("insert2").value;
    var result = Number(user1) + Number(user2)
    document.getElementById("result").textContent = `your result is: ${result}`
}