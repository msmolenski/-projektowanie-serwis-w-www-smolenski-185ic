//zmiana koloru tła tekstu
$("#operating-systems-text").click(function () {
    $(this).addClass("green");
});

//przywrócenie poprzedniego tła tekstu
$("#operating-systems-text").dblclick(function () {
    $(this).removeClass("green");
});

//zmniejszenie zdjęcia po kliknięciu
$("#operating-system-img").dblclick(function () {
    $(this).width(500).height(500);
});

//zwiększenie zdjęcia po kliknięciu
$("#operating-system-img").click(function () {
    $(this).width(1000).height(1000);
});

