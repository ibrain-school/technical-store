

    // Инициализация основного Swiper
    const swiper = new Swiper('.swiper-black-friday', {

      pagination: {
        el: '.swiper-pagination-black-friday',
        clickable: true,
      },
      speed:1500,
      effect:'fade',
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      grabCursor: true
    })
