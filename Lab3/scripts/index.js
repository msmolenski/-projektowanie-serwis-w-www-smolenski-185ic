"use strict";

var hideButton = document.getElementById("hide-button"); 
var header = document.getElementById("header"); 
var fadingParagraph = document.getElementById("fading-paragraph"); 
var pictureDiv = document.getElementById("picture-div"); 
var networkStatusInfo = document.getElementById("network-status-info"); 
var descriptionText = document.getElementById("description-text");

//EventListener:
//Schowanie imienia i nazwiska przy pomocy przycisku
hideButton.addEventListener("click", function(){
    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
      }
});

//Paragraf znika po najechaniu na niego kursorem
fadingParagraph.addEventListener("mouseenter", function(){
    fadingParagraph.style.display = "none";
    fadingParagraph.removeEventListener("mouseenter", function(){
        console.log('Usunięto obsługę zdarzenia!');
    });
});

    fadingParagraph.removeEventListener("mouseenter", function(){
        console.log('Usunięto obsługę zdarzenia!');
    });

//Zdjęcie się "podświetla" po najechaniu kursorem
pictureDiv.addEventListener("mouseover", function(){
    pictureDiv.style.opacity = "1.0";
});

//Zdjęcie "przygasa" po wyjechaniu z niego kursorem
pictureDiv.addEventListener("mouseleave", function(){
    pictureDiv.style.opacity = "0.8";
});

//Wysunięcie informacji o zdjęciu po kliknięciu na nie
pictureDiv.addEventListener("dblclick", function(){
    $("#panel").slideToggle("slow");
});

//Alert informujący o skopiowaniu opisu
descriptionText.addEventListener("copy", function(){
    alert ("Skopiowano opis!");
});
