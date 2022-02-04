{
    "use strict";

    let regDiv = document.getElementById("regDiv");
    let logDiv = document.getElementById("logDiv");
    let mainDiv = document.getElementById("page");

    let loginButton = document.getElementById("login");
    let registerButton = document.getElementById("register");
    let navTag = document.getElementById("nav");
    let search = document.getElementById("search");

    let allElementsReg = regDiv.querySelectorAll("fieldset > input, fieldset > select");
    let allElementsLog = logDiv.querySelectorAll("fieldset > input, fieldset > select");

    loginButton.addEventListener("click", function () {
        logToMain();
    });

    registerButton.addEventListener("click", function () {
        regToMain();
    });

    function logToMain() {
        registerButton.hidden = !registerButton.hidden;
        mainDiv.hidden = !mainDiv.hidden;
        logDiv.hidden = !logDiv.hidden;
        search.hidden = !search.hidden;
        navTag.hidden = !navTag.hidden;
        loginButton.textContent = loginButton.textContent == "Login" ? "Back" : "Login";
    }

    function regToMain() {
        loginButton.hidden = !loginButton.hidden;
        mainDiv.hidden = !mainDiv.hidden;
        regDiv.hidden = !regDiv.hidden;
        search.hidden = !search.hidden;
        navTag.hidden = !navTag.hidden;
        registerButton.textContent = registerButton.textContent == "Register" ? "Back" : "Register";
    }

    let passwordButton = document.getElementById("btn");
    passwordButton.addEventListener("click", function () {
        console.clear();
        const passwordfield = document.getElementById("password");
        const passwd = document.getElementById("regPassword");
        const entropy = Math.log2(Math.pow(62, passwd.value.length));
        const passwdPics = ["img/bad.png", "img/good.png", "img/cool.png"]
        if (passwd.validity.valid) {
            if(entropy<50) {
                createPwDOM(passwordfield, passwdPics[1], "Gutes Passwort!");
            } else {
                createPwDOM(passwordfield, passwdPics[2], "Sehr gutes Passwort!");
            }
            console.log("Passwort: " + passwd.value + " Länge: " + passwd.value.length + " Entropy: " + entropy);
        } else {
            createPwDOM(passwordfield, passwdPics[0], "Schlechtes Passwort!");
            console.log("schlechtes Passwort");
        }
    });

    let createPwDOM = (parent, pic, ausgabe) => {
        if(parent.lastChild.id === "ausgabe") {
            document.getElementById("passwordpic").src = pic;
            parent.lastChild.lastChild.textContent = ausgabe;
        } else {
            let passwordpic = document.createElement("img");
            passwordpic.src = pic;
            passwordpic.id = "passwordpic"
            let message = document.createElement("p");
            message.id = "ausgabe";
            let text = document.createTextNode(ausgabe);
            message.appendChild(text);
            parent.appendChild(passwordpic);
            parent.appendChild(message);
        }
     }

    let printValidValueElements = (div) => {
        let check = true;
        div.forEach(i => {
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

    let clearForm = (div) => {
        div.forEach(i => {
            if (i.type === "checkbox") {
                i.checked = false;
                return;
            }
            i.value = "";
        });
    }

    function Account(name, password) {
        this.name = name;
        this.password = password;
        this.equals = function (other) {
            return other.name == this.name && other.password == this.password;
        };
    }

    let accounts = [new Account("Gast", "gast")];

    let submitButton = regDiv.querySelector("[type=submit]");
    submitButton.addEventListener("click", function (event) {
        console.clear();
        if (printValidValueElements(allElementsReg) === true) {
            accounts.push(new Account(document.getElementById("regName").value, document.getElementById("regPassword").value));
            clearForm(allElementsReg);
            regToMain();
        }
        event.preventDefault();
        console.log(accounts);
    }, false);

    let logButton = logDiv.querySelector("[type=submit]");
    logButton.addEventListener("click", function (event) {
        console.clear();
        let user = new Account(document.getElementById("logName").value, document.getElementById("logPassword").value);
        for (let item of accounts) {
            if (item.equals(user)) {
                clearForm(allElementsLog);
                document.getElementById("chonkers").hidden = false;
                logToMain();
                break;
            }
        }
        event.preventDefault();
    }, false);



}