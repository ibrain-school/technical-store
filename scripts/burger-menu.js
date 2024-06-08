// burger
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header__midl-btn").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

// accordion
if (document.documentElement.clientWidth > 968) {
const titles = document.querySelectorAll('.accordion__menu-item');
const contents = document.querySelectorAll('.accordion__sub-menu-wrapper');

titles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.btn);
    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        contents.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });
        titles.forEach(element => element.classList.remove('active'));
        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))

    document.querySelector('[data-btn="btn-1"]').classList.add('active');
    document.querySelector('#btn-1').classList.add('active');
    document.querySelector('#btn-1').style.maxHeight = document.querySelector('#btn-1').scrollHeight + 'px';
}

if (document.documentElement.clientWidth < 969) {
    



}


// показать все
const subMenuBtn = document.querySelector('.sub-list-btn');
const subListItem = document.querySelectorAll('.sub-list-item-hide');
const hideMenuBtn = document.querySelector('.sub-list-btn-hide')
subMenuBtn.addEventListener('click', function () {
    for (item of subListItem) {
        item.style.display = 'block'
    }
    subMenuBtn.style.display = 'none';
})
// скрыть
hideMenuBtn.addEventListener('click', function () {
    for (item of subListItem) {
        item.style.display = 'none'
    }
    subMenuBtn.style.display = 'block';
})


const subMenuBtn1 = document.querySelector('.sub-list-btn1');
const subListItem1 = document.querySelectorAll('.sub-list-item1-hide');
const hideMenuBtn1 = document.querySelector('.sub-list-btn1-hide')
subMenuBtn1.addEventListener('click', function () {
    for (item of subListItem1) {
        item.style.display = 'block'
    }
    subMenuBtn1.style.display = 'none';
})

hideMenuBtn1.addEventListener('click', function () {
    for (item of subListItem1) {
        item.style.display = 'none'
    }
    subMenuBtn1.style.display = 'block';
})
