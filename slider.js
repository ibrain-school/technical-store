const swiper = new Swiper('.swiper', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    speed:1500,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true
  });