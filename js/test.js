//alert("hello World");
//console.log("end me pls!");
{
    "use strict";

    document.onload = document.getElementById("submit").click(function (event) {
        event.preventDefault();
        submit();
    })

    function submit() {

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
        const inputTags = Array.from(document.getElementsByTagName("input"));
        const textareaTags = Array.from(document.getElementsByTagName("textarea"));
        const selectTags = Array.from(document.getElementsByTagName("select"));
        const datalistTags = Array.from(document.getElementsByTagName("datalist"));
        const elements = inputTags.concat(textareaTags, selectTags, datalistTags);
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].value);
        }
    }

}

