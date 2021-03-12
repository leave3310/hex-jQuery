$(document).ready(function () {
    $('.cart > li > a').click(function (e) { 
        e.preventDefault();
        
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();

    });
});