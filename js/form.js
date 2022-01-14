{
    "use strict";

    // Zugriff auf Elemente
    // einzelne Elemente
    /* 
    getElementById()
    querySelector()
    */
    // Listen von Elementen
    /* 
    getElementsByTagName()
    getElementsByClassName()
    getElementsByName()
    querySelectorAll()
    object collections */

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

    let submitButton = document.querySelector("[type=submit]");
    submitButton.addEventListener("click", function (event) {
        console.clear();
        if (printValidValueElements() === false) {
            let message = document.createElement("p");
            // 2. Kindknoten oder Attribute erzeugen und befüllen
            let text = document.createTextNode("Falsch");
            // 3. beide zusammenführen
            message.appendChild(text);
            // 4. Neues Element in das Dokument einfügen
            form.appendChild(message);
            // evtl. auf <p> mit lastChildNode prüfen und so mehrfaches Einfügen verhindern.
            event.preventDefault();
        } else {
            let message = document.createElement("p");
            // 2. Kindknoten oder Attribute erzeugen und befüllen
            let text = document.createTextNode("Richtig");
            // 3. beide zusammenführen
            message.appendChild(text);
            // 4. Neues Element in das Dokument einfügen
            form.appendChild(message);

            clearForm();
            event.preventDefault();

        }
    }, false);

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


    /*     // id
        let firstName = document.getElementById("fn");
        console.log(firstName);
        console.log(firstName.parentElement);
    
        // querySelector
        let pic = document.querySelector("img");
        console.log(pic);
    
        // TagName
        let allP = document.getElementsByTagName("p");
        
    
    
        // className
        let headlines = document.getElementsByClassName("head-line");
        console.log(headlines);
        for(let i=0; i<headlines.length; i++){
            console.log(headlines[i].childNodes);
            console.log(headlines[i].childNodes[0]);
        }
    
        // name
        let allRadios = document.getElementsByName("mood");
        allRadios.forEach(radio => {
            console.log(radio.value);
        });
    
        // querySelectorAll
        let allText = document.querySelectorAll("[type=text]");
        console.log(allText);
    
        console.clear();
    
        // ***************************************
        const changeImageOnce = () => pic.src = "sonneSad.jpg";
    
        // Funktion darf nur referenziert werden!
        // pic.addEventListener("click",changeImageOnce, false);
    
        // console.log(pic.src);
    
        const changeImage = () => {
            if(pic.alt === "Die Sonne :-)"){
                pic.alt = ":("
                pic.src = "sonneSad.jpg";
            }
            else{
                pic.alt = "Die Sonne :-)"
                pic.src = "sonne.png";
            }
        };
    
        // pic.addEventListener("click", changeImage, false);
    
        // HTML und CSS: Verwendung der classList-Methoden sorgt für Separation of Concerns!
        const changeStyle = () => pic.classList.toggle("invert");
        pic.addEventListener("mouseover",changeStyle,false);
        pic.addEventListener("mouseleave",changeStyle,false);
    
        // Argumente übergeben
        const sky = mood => {
            if(mood==="happy")
                pic.parentElement.className="happy";
            else
                pic.parentElement.className="sad";
        };
        // über den addEventListener können beliebig viele Funktionen hinzugefügt werden
    /*     pic.addEventListener("click", function(e){
                                        sky("happy");
                                        console.log(e,e.target);
                                        },false); 
    
        const changePic = mood => {
            if(mood === "g"){
                pic.parentElement.className = "happy";
                pic.src = "Sonne.png";
                pic.alt = "Die Sonne :-)";
            }
            else{
                pic.parentElement.className = "sad";
                pic.src = "sonneSad.jpg";
                pic.alt = ":(";
            }
    
        };
    
        // Values der radios auslesen
        const moodCheck = () => {
            let mood = "g";
            allRadios.forEach(radio => {
                if(radio.checked)
                    mood = radio.value;
            });
            return mood;
        };
    
        // console.log(moodCheck());
    
        let form = document.querySelector("form");
        // Neue Elemente in das Dokument einfügen
        const thanks = user => {
            // 1. Element erzeugen
            let message = document.createElement("p");
            // 2. Kindknoten oder Attribute erzeugen und befüllen
            let text = document.createTextNode("Danke " + user);
            // 3. beide zusammenführen
            message.appendChild(text);
            // 4. Neues Element in das Dokument einfügen
            form.appendChild(message);
            // evtl. auf <p> mit lastChildNode prüfen und so mehrfaches Einfügen verhindern.
        };
       
        
        let submit = document.querySelector("[type=submit]");
    
        submit.addEventListener("click", function(e){
                                            changePic(moodCheck());
                                            thanks(firstName.value);
                                            e.preventDefault();}, false); */

}