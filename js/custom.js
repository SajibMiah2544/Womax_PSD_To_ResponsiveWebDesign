$(document).ready(function(){
    // video load lite box
    $('.venobox').venobox(); 
    // counter up 
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });
    // blog post slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 676,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    // wow js
    new WOW().init();

    // preloader
    $(window).on('load', function(){
        $('#preloader').delay(1000).fadeOut(2000);
    });
    // Scroll Top To Home
    $(window).scroll(function(){
        // Bake To Top
        if($(this).scrollTop() >300){
            $('.bakt-to-top').fadeIn();
        }
        else{
            $('.bakt-to-top').fadeOut();
        }
    });
    // 
    $(".bakt-to-top").click(function(){
        $('html, body').animate({scrollTop : 0}, 1500);
    });

    // Smooth scroll
     //animation scroll js
    var html_body = $('html, body');
    $(' a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 85
                }, 2000);
                return false;
            }
        }
    });
    // Sticky Menu 
    $(window).on('scroll', function(){
        var scrollAmount = $(window).scrollTop();
        console.log(scrollAmount)
        if (scrollAmount > 200){
            $('.navbar').addClass('fixed-navber')
        }
        else{
            $('.navbar').removeClass('fixed-navber')
        }
    });

  // Yt Bg Video Player
  jQuery(function(){
    jQuery(".player").YTPlayer();
  });
});

