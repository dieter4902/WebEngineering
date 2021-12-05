{
    "use strict";

    let submitButton = document.querySelector("[type=submit]");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        send();
    }, false);

    let resetButton = document.querySelector("[type=reset]");
    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        reset();
    }, false);

    function reset() {
        changeFormBackground("red");
    }

    function send() {
        changeFormBackground("green")
        printPassword();
    }


    function printPassword() {
        const passwd = document.getElementById("password").value;
        console.log(passwd);
        let message;
        if (passwd === null || typeof passwd === "undefined") {
            message = "abgebrochen";
        } else if (password === "") {
            message = "leer";
        } else if (password.length >= 8) {
            message = "richtig";
        } else {
            message = "falsch";
        }
        console.log(message)
    }

    function lostFocus() {
        printPassword();
    }


    function changeFormBackground(color) {
        document.getElementById("form").style.backgroundColor = color;
    }
}

