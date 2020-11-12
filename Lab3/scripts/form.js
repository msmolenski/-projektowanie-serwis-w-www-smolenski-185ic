//Schowanie/wyświetlenie pola z hasłem 
show();
function show() {
    let showPassword = document.getElementById("show-password")
    if (showPassword.checked) {
        document.getElementById("password").setAttribute("type", "text");
    }
    else {
        document.getElementById("password").setAttribute("type", "password");
    }
}

//Wyczyszczenie pól formularza
$("#clear").click(function () {
    $("#username").val("");
    $("#password").val("");
});

//Walidacja wprowadzanego hasła
function isPasswordValid(password) {
    return password && isPasswordPatternValid(password,/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,}([0-z]))$/);
}

function isPasswordPatternValid(password, pattern) {
    return password.match(pattern) !== null;
}

//Powiadomienie o prawidłowych/nieprawidłowych danych
$("#register").click(function () {
    if ($("#username").val() && isPasswordValid($("#password").val())){
        alert("Gratulacje konkursowiczu! Wprowadziłeś dane którch nikt nie zapisał.");
        return;
    }
    alert("Niepoprawny login lub hasło");
});

//EventListener:
var username = document.getElementById("username");
var password = document.getElementById("password");
var setAge = document.getElementById("set-age");
var showAge = document.getElementById("show-age");

//zmiana koloru pola podczas wpisywania
username.addEventListener("keydown", function(){
    username.style.backgroundColor = "orange";
});

//zmiana koloru pola po przestaniu wpisywania
username.addEventListener("keyup", function(){
    username.style.backgroundColor = "white";
});

//wyświetlenie wieku
setAge.addEventListener("input", function(){
    showAge.innerHTML = setAge.value;
});

//Zmiana koloru pola hasła, po wklejeniu go ze schowka
password.addEventListener("paste", function(){
    password.style.backgroundColor = "red";
});

//Przywrócenie koloru pola hasła, po użyciu klawisza Backspace
password.addEventListener("keydown", function(){
    if (event.keyCode == 8) {
        password.style.backgroundColor = "white";
    }
});