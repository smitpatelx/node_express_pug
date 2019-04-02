$(document).ready(function() {
    $('header').css("color","black");

    $(window).on('scroll',function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop < 100) {
            // $('header').fadeIn('slow');
            $('header').css("background","transparent");
            // clearTimeout($.data(this, 'scrollTimer'));
            $('#Rectangle_1').attr("stroke","#000000");
            $('#S').attr({
                "stroke":"#000000",
                "color":"#000000"
            });
            // console.log($('#Rectangle_1').attr("stroke","#00000"));
            // $.data(this, 'scrollTimer', setTimeout(function () {
            //     $('header').fadeOut('slow');
            // }, 1500));
        }else{
            clearTimeout($.data(this, 'scrollTimer'));
            // $('header').fadeOut('slow');
            $('header').css("background","black");
            $('#Rectangle_1').attr("stroke","rgb(255, 255, 255)");
            $('#S').attr({
                "stroke":"rgb(255, 255, 255)",
                "color":"rgb(255, 255, 255)",
                "background":"rgb(255, 255, 255)"
            });

        }
    });
});