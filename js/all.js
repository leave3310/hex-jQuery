$(document).ready(function () {

    //字體放大
    $('.font-b').click(function (e) { 
        e.preventDefault()
        $('.content p').css('font-size', '20px')
    })
    
    //字體變中
    $('.font-m').click(function (e) { 
        e.preventDefault()
        $('.content p').css('font-size', '16px')
    })

    //字體變小
    $('.font-s').click(function (e) { 
        e.preventDefault()
        $('.content p').css('font-size', '13px')
    })
});