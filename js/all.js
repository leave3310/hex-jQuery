$(document).ready(function () {
    $('.open').click(function (e) { 
        $('.box1').delay(0).slideToggle();
        $('.box2').delay(1000).fadeToggle();
        $('.box3').delay(2000).show(1);
    });
});