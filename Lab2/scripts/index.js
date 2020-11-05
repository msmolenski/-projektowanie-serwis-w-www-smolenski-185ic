"use strict";
// wygenerowanie tekstu w inny sposób niż html
let showNewText;
showNewText = () => {
    document.getElementById("new-text").append("Użyłem również jQuery");
}
showNewText();

//Schowanie imienia i nazwiska przy pomocy przycisku
$("#hide-button").click(function () {
    $("#header").toggle();
});

//Paragraf znika po najechaniu na niego kursorem
$(document).ready(function () {
    $("#fading-paragraph").mouseenter(function () {
        $(this).fadeOut(200);
    });
});

//Zdjęcie się "podświetla" po najechaniu kursorem
$("#picture-div").mouseenter(function () {
    $(this).animate({
        opacity: '1.0'
    });
});

//Zdjęcie "przygasa" po wyjechaniu z niego kursorem
$("#picture-div").mouseleave(function () {
    $(this).animate({
        opacity: '0.8'
    });
});

//Zmiana tła na szary kolor
let darkColorSet = false;
$("#change-background").click(function () {
    if (darkColorSet) {
        $("body").css({ backgroundColor: 'white' })
    }
    else {
        $("body").css({ backgroundColor: 'gray' })
    }
    darkColorSet = !darkColorSet;
});

//Zmiana tła na losowy kolor
$("#random-background").click(function () {
    var back = ["#ff0000", "blue", "gray"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $("body").css('background', rand);
});

//Wysunięcie informacji o zdjęciu po kliknięciu na nie
$("#picture-div").click(function () {
    $("#panel").slideToggle("slow");
});
