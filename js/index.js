if(innerWidth< 1000)
{
    $(".mynav").addClass("white-nav");
             $(".nav-link ").addClass("color-nav");
             $(".navbar-brand ").addClass("logo");
             $(".navbar ").removeClass("navbar-dark");
              $(".navbar ").addClass("navbar-light");

}


    $(window).scroll(function(){
        if(($(window).scrollTop() > $(".mynav").height()) 
           && (innerWidth > 1000)
          ){
            $(".mynav").addClass("white-nav");
             $(".nav-link ").addClass("color-nav");
             $(".navbar-brand ").addClass("logo");

        }
        
        else if(($(window).scrollTop() < $(".mynav").height()) 
           && (innerWidth > 1000)){
        $(".mynav").removeClass("white-nav");
            $(".nav-link ").removeClass("color-nav");
            $(".navbar-brand ").removeClass("logo");

        }
    });










var abouut =$('#second');
$('.about').click(function () {
            $('html, body').animate({
                scrollTop: abouut.offset().top - 50 }, 1000);

        })



var serve =$('#third');
$('.SERVICES').click(function () {
    
            $('html, body').animate({
                scrollTop: serve.offset().top - 50 }, 1000);

        })
var prof =$('#four');
$('.PORTFOLIO').click(function () {

            $('html, body').animate({
                scrollTop: prof.offset().top - 50 }, 1000);

        })

var cont =$('#six');
$('.CONTACT').click(function () {

            $('html, body').animate({
                scrollTop: cont.offset().top  }, 1000);

        })

              new WOW().init();