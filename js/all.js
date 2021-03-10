$(document).ready(function () {
    $('.question h3').click(function (e) { 
        //對自己新增class
        $(this).toggleClass('active')
        //把回答顯示出來
        $(this).parent().find('p').slideToggle();
        //收起其他的回答
        $(this).parent().siblings().find('p').slideUp();
        //把其他選到的部分移除Class
        $(this).parent().siblings().find('h3').removeClass('active')
    });
});