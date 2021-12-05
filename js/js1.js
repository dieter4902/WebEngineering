//alert("hello World");
//console.log("end me pls!");
{
    "use strict";

    let submitButton = document.querySelector("[type=submit]");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        send();
    }, false);

    function send() {
        getAllElements();
        printPassword();
    }

    function printPassword() {
        const passwd = document.getElementById("password").value;
        console.log(passwd);
        checkPassword(passwd);
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


    function getAllElements() {
        const elements = document.querySelectorAll("input,textarea,select,datalist");
        elements.forEach(i => console.log(i.value));
    }

}

