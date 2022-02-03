{
    "use strict";

    let formDiv = document.getElementById("formDiv");
    let loginDiv = document.getElementById("page");
    let loginButton = document.getElementById("login");
    let registerButton = document.getElementById("register");
    let navTag = document.getElementById("nav");
    let search = document.getElementById("search");

    loginButton.addEventListener("click", function () {
        loginButton.textContent = "Login";
    });

    registerButton.addEventListener("click", function () {
        toggle();
        loginButton.textContent = "Back";
    });

    function toggle() {
        loginButton.hidden = !registerButton.hidden;
        loginDiv.hidden = !loginDiv.hidden;
        formDiv.hidden = !formDiv.hidden;
        search.hidden = !search.hidden;
        navTag.hidden = !navTag.hidden;
    }

    let allElements = document.querySelectorAll("fieldset > input, fieldset > select");
    console.log(allElements);
    let passwordButton = document.getElementById("btn");
    passwordButton.addEventListener("click", function () {
        console.clear();
        const passwd = document.getElementById("password");
        if (passwd.validity.valid) {
            console.log(passwd.value);
        } else {
            console.log("bad password");
        }
    });

    let printValidValueElements = () => {
        let check = true;
        allElements.forEach(i => {
            if (i.value !== undefined && i.value !== "" && i.value != null) {
                if (i.validity.valid) {
                    console.log(i.id + ": " + i.value);
                } else if (i.validity.valueMissing) {
                    console.log(i.id + ": " + "Bitte Feld ausfüllen!");
                } else if (i.validity.tooShort) {
                    console.log(i.id + ": " + "Mehr zeichen erforderlich!");
                } else if (i.validity.rangeUnderflow) {
                    console.log(i.id + ": " + "Du bist zu jung!");
                }
            } else {
                console.log(i.id + ": " + "Falsche Eingabe!");
                check = false;
            }
        });
        return check;
    };

    let submitButton = document.querySelector("[type=submit]");
    submitButton.addEventListener("click", function (event) {
        console.clear();
        if (printValidValueElements() === false) {
            event.preventDefault();
        }
    }, false);


}