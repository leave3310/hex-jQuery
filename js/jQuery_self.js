$(document).ready(function () {
    $('.toTop i').click(function (e) { 
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });
    $('.toolbar-a').click(function (e) { 
        e.preventDefault();
        $(this).siblings('.togglemenu').slideToggle();
        $(this).parent().siblings().find('.togglemenu').slideUp();
    });
});