$(document).ready(function () {
    $('.header').click(function (e) { 
        e.preventDefault()
        $('.container').toggleClass("open")
    })
    $('.button').click(function (e) { 
        e.preventDefault()
        $('.box').addClass("animate__animated animate__bounce")        
    })
});