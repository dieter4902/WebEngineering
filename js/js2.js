{
    "use strict";

    let submitButton = document.querySelector("[type=submit]");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        send();
    }, false);

    let passwordButton = document.getElementById("btn");
    passwordButton.addEventListener("click", function () {
        printPassword()
    })

    let resetButton = document.querySelector("[type=reset]");
    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        reset();
    }, false);

    function reset() {
        changeFormBackground("red");
        clearPic();
    }

    function send() {
        changeFormBackground("green")
        printPassword();
    }

    function clearPic() {
        const pwPic = document.getElementById("passwordPicture");
        pwPic.src = "";
    }

    function printPassword() {
        const passwd = document.getElementById("password").value;
        const pwMessage = document.getElementById("passwordMessage");
        const pwPic = document.getElementById("passwordPicture");
        console.log(passwd);
        /* idk vielleicht sagt sie in der Vorlesung, dass wir das aus nem Directory lesen sollen? */
        const passwdPics = ['img/porpoises.jpg', 'img/chonk_chart.png'];
        let message;
        if (passwd === null || typeof passwd === "undefined") {
            message = "abgebrochen";
            pwPic.src = "";
        } else if (passwd.length >= 8) {
            message = "richtig";
            pwPic.src = passwdPics[Math.floor(Math.random() * passwdPics.length)];
        } else {
            if (passwd === "") {
                message = "leer";
            } else {
                message = "falsch";
            }
            pwPic.src = "";
        }
        pwMessage.innerHTML = message;
        console.log(message)
    }

    function lostFocus() {
        printPassword();
    }


    function changeFormBackground(color) {
        document.getElementById("form").style.backgroundColor = color;
    }
}

