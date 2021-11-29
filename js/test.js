//alert("hello World");
//console.log("end me pls!");
{
    "use strict";

    /*document.onload = document.getElementById("submit").click(function (event) {
        event.preventDefault();
        submit();
    })
*/
    function submit() {

        getAllElements();
        printPassword();
    }

    function printPassword() {
        const passwd = document.getElementById("password").value;
        console.log(passwd);
        checkPassword(passwd);
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
        var elements = document.querySelectorAll("input,textara,select,datalist");
        elements.forEach(i => console.log(i.value));
    }

}

