document.addEventListener ('DOMContentLoaded', function(){
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 6,
        initialSlide: 1, 
        loopedSlides: 6,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            clickable: false,
        },  

})
});