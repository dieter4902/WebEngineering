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
    const passwdEmpty = password === "";
    alert(passwdEmpty ? "leer" : "richtig")
}