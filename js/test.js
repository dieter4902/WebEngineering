//alert("hello World");
//console.log("end me pls!");
{
    "use strict";

    function printPassword() {
        const passwd = document.getElementById("password").value;
        console.log(passwd);
        //checkPassword(passwd);
        getAllElements();
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
        var elements = document.getElementsByTagName("input");
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].value);
        }
        var elements = document.getElementsByTagName("textarea");
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].value);
        }
        var elements = document.getElementsByTagName("select");
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].value);
        }
        var elements = document.getElementsByTagName("datalist");
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].value);
        }

    }

}
