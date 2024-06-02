document.addEventListener ('DOMContentLoaded', function(){
    const swiper = new Swiper('.block__swiper', {
        loop: true,
        slidesPerView: 4,
        initialSlide: 1, 
        loopedSlides: 4,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            clickable: false,
        },  
})

});