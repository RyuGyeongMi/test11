$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            prevEl: '.main_visual .arrows .prev',
            nextEl: '.main_visual .arrows .next',
        },

        pagination: {
            clickable: true,
            el: '.main_visual_slide .page',
        },
    })





});

$(function () {
    $(function () {
        $('.main_content .best_tab_menu button').on('click', function () {
            let idx = $(this).parent().index();
            $('.main_content .best_tab_menu button').removeClass('on');
            $(this).addClass('on');
            $('.main_content .best_tab_content .con').removeClass('on');
            $('.main_content .best_tab_content .con').eq(idx).addClass('on')
        })
    })
});

$(function () {
    $('.main_product .menu_wrap a').on('mouseenter', function () {
        let idx = $(this).parent().index();
        $('.main_product .menu_wrap a').removeClass('on');
        $(this).addClass('on');
        $('.main_product').css({
            backgroundImage: `url(./images/main_product0${idx + 1}.jpg)`
        })
    })
})

