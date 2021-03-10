$(document).ready(function () {
    $('.cart li').click(function (e) { 

        $(this).find('h3').toggleClass('active');
    });
});