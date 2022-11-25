const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});


$(document).ready(function () {

    $(".settings-btn").click(function () {
        $(".settings-content").toggle()
    })

    // $("#owl-demo").owlCarousel({
    //     items: 5, //10 items above 1000px browser width
    //     loop: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true,
    //         },
    //         480: {
    //             items: 3,
    //             nav: true,
    //         },
    //         991: {
    //             items: 5,
    //             nav: false,
    //         }
    //     }
    // });

    $("#owl-demo2").owlCarousel({
        items: 5, //10 items above 1000px browser width
        loop: true,
        responsiveClass: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 700,
        mobileFirst: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
            },
            480: {
                items: 3,
                nav: true,
            },
            768: {
                items: 5,
                nav: true,
            }
        }
    });
    $("#owl-demo3").owlCarousel({
        items: 4, //10 items above 1000px browser width
        loop: true,
        responsiveClass: true,
        margin: 10,
        infinite: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 700,
        mobileFirst: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 4,
            }
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        centerMode: true,
        centerPadding: '-160px',
        slidesToShow: 5,
        slidesToScroll: 3,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    // var owl = $('.owl-carousel');
    // owl.owlCarousel({
    //     items: 4,
    //     loop: true,
    //     margin: 10,
    //     autoplay: true,
    //     autoplayTimeout: 4000,
    //     autoplaySpeed: 700,
    //     autoplayHoverPause: true,
    //     mobileFirst: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true,
    //         },
    //         768: {
    //             items: 2,
    //             nav: true,
    //         },
    //         992: {
    //             items: 4,
    //             nav: true,
    //         }
    //     }
    // });



});

function openNav() {
    document.getElementById("myNav-watch-video").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav-watch-video").style.width = "0%";
}