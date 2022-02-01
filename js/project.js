{
    "use strict";

    let formDiv = document.getElementById("formDiv");
    let loginDiv = document.getElementById("page");
    toggle();


    let loginButton = document.querySelector("[id=login]");
    loginButton.addEventListener("click", function () {
        toggle();
    });

    let registerButton = document.querySelector("[id=register]");
    registerButton.addEventListener("click", function () {
        toggle();
    });

    function toggle() {
        formDiv.hidden = !formDiv.hidden;
        loginDiv.hidden = !formDiv.hidden;
    }

    let allElements = document.querySelectorAll("input,textarea,select");
    //printet alle Elemente
    const printAllElements = () => {
        console.log("All values:");
        allElements.forEach(i => console.log(i.id + i + ": " + i.value));
    }

    //printet alle Elemente, welche einen value haben
    const printValueElements = () => {
        console.log("Filled values:");
        allElements.forEach(i => {
            if (i.value !== undefined && i.value !== "" && i.value != null) {
                console.log(i.id + ": " + i.value);
            }
        });
    };

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
                if (i.type === "submit" || i.type === "reset") {
                } else {
                    console.log(i.id + ": " + "Falsche Eingabe!");
                    check = false;
                }
            }
        });
        return check;
    };
    printAllElements();
    printValueElements();


    //guckt, ob das Passwort valid ist und printet es auf die Konsole, wenn ja
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

    let form = document.querySelector("form");

    let createDOM = (ausgabe) => {
        if (form.lastChild.id === "ausgabe") {
            /*             let text = document.createTextNode("Richtig"); */
            form.lastChild.lastChild.textContent = ausgabe;
            /*   form.lastChild.appendChild(text); */
        } else {
            let message = document.createElement("p");
            message.id = "ausgabe";
            let text = document.createTextNode(ausgabe);
            message.appendChild(text);
            form.appendChild(message);
        }
    }

    let clearForm = () => {
        allElements.forEach(i => {
            if (i.type === "submit" || i.type === "reset")
                return; //reset und submit button sollen nicht geleert werden
            if (i.type === "checkbox") {
                i.checked = false;
                return;
            }
            i.value = "";
        });
    }

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