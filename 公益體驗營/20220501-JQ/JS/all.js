$(document).ready(function () {
    $('h1').click(function (e) { 
        // $('p').hide();
        // $('p').addClass('orange');
        $('p').toggleClass('orange');
    });
    $('h2').click(function (e) { 
        // 切換開關
        $('.test2').toggle();
    });
    $('h3').click(function (e) { 
        // 慢慢滑出滑入'
        $('.box').slideToggle(5000);
        // 淡入淡出
        $('.box2').fadeToggle(5000);
    });
    $('h4').click(function (e) { 
        // 鏈式寫法
        $('.box3').slideUp(1000).slideDown(3000);
    });
});

