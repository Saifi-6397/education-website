$(function() {

    //home slider
    $('.home-slider .owl-carousel').owlCarousel({
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }

        }
    })

    //course slider

    $('.course .owl-carousel').owlCarousel({
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 4
            }

        }

    })

    //counter up

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    // $(window).on("scroll", function() {
    //     if ($(window).scrollTop()) {
    //         $("#my-navigation").addClass('scrollfix');
    //     } else {
    //         $("#my-navigation").removeClass('scrollfix');
    //     }
    // });

    //aos animation

    AOS.init({
        duration: 1000,
        delay: 400,
    });



    //scroll up to top
    $.scrollUp({
        scrollImg: true,
        topDistance: '300',
        topSpeed: 1000,
    });



})