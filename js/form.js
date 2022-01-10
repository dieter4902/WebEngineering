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
        console.log("All Values:");
        allElements.forEach(i => console.log(i.id + i + ": " + i.value));
    }

    //printet alle Elemente, welche einen value haben
    const printValueElements = () => {
        console.log("Filled Values:");
        allElements.forEach(i => {
            if(i.value != undefined && i.value != "" && i.value != null) {
                console.log(i.id + ": " + i.value);
            } 
        });
    };
    printAllElements();
    printValueElements();

    






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