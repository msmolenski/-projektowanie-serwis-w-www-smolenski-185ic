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
