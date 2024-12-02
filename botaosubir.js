$(document).ready(function(){

    $("#subirTopo").hide();
    
    $('a#subirTopo').click(function () {
             $('body,html').animate({
               scrollTop: 0
             }, 1);
            return false;
       });

    $(window).scroll(function () {
             if ($(this).scrollTop() > 1) {
                $('#subirTopo').fadeIn();
             } else {
                $('#subirTopo').fadeOut();
             }
         });
    });
