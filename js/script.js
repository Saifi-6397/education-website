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


//form validation

var user_name = document.getElementById("user_name");
var user_email = document.getElementById("user_email");
var user_sub = document.getElementById("user_sub");
var return_val = 1;

function Validation() {
    if (user_name.value == "") {
        document.getElementById("nameError").innerHTML = "* Please Enter Your Name";
        return_val = 0;
    } else {
        document.getElementById("nameError").innerHTML = "";
        return_val = 1;
    }
    if (user_email.value == "") {
        document.getElementById("emailError").innerHTML = "* Please Enter Your Email";
        return_val = 0;
    } else {
        document.getElementById("emailError").innerHTML = "";
        return_val = 1;
    }
    if (user_sub.value == "") {
        document.getElementById("subError").innerHTML = "* Please Enter Your Subject";
        return_val = 0;
    } else {
        document.getElementById("subError").innerHTML = "";
        return_val = 1;
    }
    if (return_val) {
        return true;
    } else {
        return false;
    }
}