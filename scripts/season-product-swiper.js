 // Инициализация основного Swiper

 const swiperServices = new Swiper('.swiper', {
  loop: true,
  
  // slidesPerView: 'auto',


   // If we need pagination
   pagination: {
    el: '.swiper-pagination',
    clickable: true ,
    type: 'bullets',
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: false,
  },

  
});

// Инициализация внутренних Swiper для каждого services-card

// async function getData() {
//     const response = await fetch('.season-card__img')
//     const data = await response.json()
//     return data
// }
// async function main() {
//     const postsData = await getData();
//     let currentPage = 1;
//     let rows = 10;

// function displayList(arrData,rowerPage,page) {
//     const cardElem = document.querySelector('.season-card__img');
//     const start = rowerPage * page ;
//     const end = start + rowerPage ;
//     const paginatedData = arrData.slice(start, end);
//     paginatedData.forEach((el) => {
//         const cardsElem =document.createElement("div")
//         cardsElem.classList.add(".season-card__img")
//         cardsElem.innerText = `${el.season-card__block}`;
//         cardsElem.appendChild(cardsElem);
//     })
// }
// function displayPagination() {
//     const paginationEl = document.querySelector('.season-card__img')

//     const pagesCount = Math.ceil(arrData.Length / rowPerPage);
//     const ulEl = document.createElement("")
// }
// function displayPaginationBtn() {}
// displayList(postsData, rows, currentPage)
// };
// main();
const innerSwipers = document.querySelectorAll('.season-card__img');
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
