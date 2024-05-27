
document.addEventListener('DOMContentLoaded', function () {
const swiperCard = new Swiper('.swiper-card', {
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: false,
    },
    speed: 700,
});




const innerSwipers = document.querySelectorAll('.wrapper-img-product');
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




   