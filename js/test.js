//alert("hello World");
//console.log("end me pls!");
{
    "use strict";

    function printPassword() {
        const passwd = document.getElementById("password").value;
        console.log(passwd);
        checkPassword(passwd)
    }

    function checkPassword(password) {
        if (password === null || typeof password === "undefined") {
            alert("abgebrochen")
        } else if (password === "") {
            alert("leer");
        } else if (password.length >= 8) {
            alert("richtig");
        } else {
            alert("falsch")
        }
    }

    function lostFocus() {
        printPassword();
    }

}
