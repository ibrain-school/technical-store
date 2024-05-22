document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.carousel-control.next',
            prevEl: '.carousel-control.prev',
        },
    });
});
