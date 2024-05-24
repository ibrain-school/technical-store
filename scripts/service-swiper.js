document.addEventListener('DOMContentLoaded', function () {
    // Инициализация основного Swiper
    const swiperServices = new Swiper('.swiper-services', {
        loop: true,
        // slidesPerView: 'auto',

        navigation: {
            nextEl: '.swiper-button-next--services',
            prevEl: '.swiper-button-prev--services',
            clickable: false,
        },
    });

    // Инициализация внутренних Swiper для каждого services-card
    const innerSwipers = document.querySelectorAll('.swiper-wrap-img');
    innerSwipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            allowTouchMove: false,
            loop: true,
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });
});