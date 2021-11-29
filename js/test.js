//alert("hello World");
//console.log("end me pls!");
{
    "use strict";
}

function printPassword() {
    const passwd = document.getElementById("password").value;
    console.log(passwd);
    checkPassword(passwd)
}

function checkPassword(password) {
    if (password === "") {
        alert("empty");
    } else if (password.length > 8) {
        alert("richtig");
    } else {
        alert("i dont even want to know what you did there :eyes:")
    }
}
