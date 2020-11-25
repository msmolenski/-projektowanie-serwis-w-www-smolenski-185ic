var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var body = document.getElementById("body");
var jumping = 0;
var counter = 0;

//Tworzenie nowych odstępów pomiędzy przeszkodami w losowy sposób przy każdym przejściu animacji
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
//Funkcja symulująca "grawitację"
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //obniżenie postaci o 3 pixele jeśli nie jest wykonywany skok
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    //Wykrycie kolizji, wyświetlenie wyniku i resetowanie postaci
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Koniec gry! Twój wynik to: "+counter);
        character.style.top = 100 + "px";
        counter = 0;
    }
},10);
//obsługa skoku
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6) && (counter<15)){
            character.style.top = (characterTop-3)+"px";
        }
        if (jumpCount > 20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}