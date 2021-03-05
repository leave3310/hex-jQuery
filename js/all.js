$(document).ready(function () {
    $('.header').click(function (e) { 
        e.preventDefault()
        $('.container').toggleClass("open")
    })
});