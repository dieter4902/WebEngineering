{
    "use strict";

    let formDiv = document.getElementById("formDiv");
    let loginDiv = document.getElementById("page");
    let loginButton = document.getElementById("login");

    loginButton.style.margin = "14.5px";

    let registerButton = document.getElementById("register");
    let navTag = document.getElementById("nav");
    let search = document.getElementById("search");


    loginButton.addEventListener("click", function () {
        toggle();
        loginButton.textContent = "Login";
    });

    registerButton.addEventListener("click", function () {
        toggle();
        loginButton.textContent = "Back";
    });

    function toggle() {
        registerButton.hidden = !registerButton.hidden;
        loginDiv.hidden = !loginDiv.hidden;
        formDiv.hidden = !formDiv.hidden;
        search.hidden = !search.hidden;
        navTag.hidden = !navTag.hidden;
    }

    let allElements = document.querySelectorAll("input,textarea,select");

    let submitButton = document.querySelector("[type=submit]");
    submitButton.addEventListener("click", function (event) {
        console.clear();
        if (printValidValueElements() === false) {
            createDOM("Falsch");
        } else {
            createDOM("Richtig");
            clearForm();
        }
        console.log(form.lastChild);
        event.preventDefault();
    }, false);


}