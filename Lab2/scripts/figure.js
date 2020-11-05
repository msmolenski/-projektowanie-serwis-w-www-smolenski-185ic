
//Funkcja generująca "szalony" ruch kwadratu
$("#crazy-btn").click(function () {
    var div = $("#figure");
    div.animate({ height: '300px', opacity: '0.4' }, "slow");
    div.animate({ width: '300px', opacity: '0.8' }, "slow");
    div.animate({ height: '100px', opacity: '0.4' }, "slow");
    div.animate({ width: '100px', opacity: '0.8' }, "slow");
});

//Przesunięcię kwadratu w prawo
$("#move-left-btn").click(function () {

    $("#figure").animate({
        left: '100px',
        opacity: '1.0'
    });
});

//Przesunięcię kwadratu w lewo
$("#move-right-btn").click(function () {
    $("#figure").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});

//Zresetowanie wielkości kwadratu
$("#reset-btn").click(function () {
    $("#figure").css({ "background": "#869eee", "height": "100px", "width": "100px", "position": "absolute" });
});