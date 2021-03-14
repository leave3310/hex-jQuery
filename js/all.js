$(document).ready(function () {
    $('.remove').click(function (e) { 
        $(this).parent().parent().remove();
    });
});