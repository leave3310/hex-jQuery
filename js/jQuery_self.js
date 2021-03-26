$(document).ready(function () {
    $('.toTop i').click(function (e) { 
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });
    $('.togglemenu').parent().click(function (e) { 
        e.preventDefault();
        $(this)..toggleClass()
    });
});