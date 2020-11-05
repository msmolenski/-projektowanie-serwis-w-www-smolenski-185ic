//Powiększenie treści listu po najechaniu kursorem
$("#letter").mouseenter(function () {
    $(this).addClass("bigger");
});

//Przywrócenie domyślej wielkości tekstu po zabraniu kursora
$("#letter").mouseleave(function () {
    $(this).removeClass("bigger");
});

//Wyświetlenie informacji po najechaniu na wstęp listu
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//Zmiana koloru wstępu listu po podwójnym kliknięciu
$("#title").dblclick(function () {
    $(this).addClass("blue");
});
