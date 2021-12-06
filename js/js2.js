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
        const pwMessage = document.getElementById("passwordMessage");
        const pwPic = document.getElementById("passwordPicture");
        console.log(passwd);
        /* idk vielleicht sagt sie in der Vorlesung, dass wir das aus nem Directory lesen sollen? */
        var passwdPics = ['img/porpoises.jpg', 'img/chonk_chart.png'];
        let message;
        if (passwd === null || typeof passwd === "undefined") {
            message = "abgebrochen";
        } else if (passwd === "") {
            message = "leer";
        } else if (passwd.length >= 8) {
            message = "richtig";
            pwPic.src = passwdPics[Math.floor(Math.random()*passwdPics.length)];
        } else {
            message = "falsch";
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

