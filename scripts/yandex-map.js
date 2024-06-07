function init() {
    // Создаем новую карту с черным слоем
    var myMap = new ymaps.Map("map", {
        center: [55.76084292405665, 37.23090637800431],
        zoom: 15,
        type: 'yandex#map'
    });

    // Создаем массив с координатами точек
    var placemarks = [
        { coords: [55.76084292405665, 37.23090637800431], hint: 'Место 1' },
        { coords: [55.75784292405665, 37.24090637800431], hint: 'Место 2' },
        { coords: [55.76384292405665, 37.22090637800431], hint: 'Место 3' }
    ];

    var geoObjects = [];

    // Добавляем точки на карту
    placemarks.forEach(function(item) {
        var placemark = new ymaps.Placemark(item.coords, {
            hintContent: item.hint
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/icons/marker.png',
            iconImageSize: [70, 70],
            iconImageOffset: [-50, -70]
        });

        placemark.events.add("click",(e)=>{
            const div = document.querySelector(".card-shop")
            div.innerHTML = `
            <h2 class="card-shop_descripton">Магазин в ТЦ «Корона-Сити», 1 этаж</h2>
            <div class="card-shop_wrapper-content">
            <img class="img-korona" src="/assets/img/korona-shopping-center.png" alt="shopping-center_img"> 
            <div class="card-shop_nav">

                <div class="card-shop_nav--wrap">

                    <div class="card-shop_nav--title">
                        <img src="/assets/icons/marker-yndex-card.svg" alt="marker"> 
                        <h3>Адрес:</h3>
                    </div>
                    <span>
                    ул. Денисовская, 8
                    </span>

                </div>

                <div class="card-shop_nav--wrap">

                    <div class="card-shop_nav--title">
                        <img src="/assets/icons/yandex-map-tel.svg" alt="tel"> 
                        <h3>Справочный центр:</h3>
                    </div>
                    <div class="card-shop_nav-contact">
                        <span>+375 29 8-057-998 МТС</span>
                        <span>+375 29 3-899-741 А1</span>
                        <a href="tel:+375 17 388 61 41">+375 17 388 61 41</a>
                    </div>
                </div>


                <div class="card-shop_nav--wrap">

                <div class="card-shop_nav--title">
                    <img src="/assets/icons/watch-yandex-map.svg" alt="watch"> 
                    <h3>График работы:</h3>
                </div>
                <span>
                пн-вс: 10:00-21:00
                </span>
            </div>
            `
            div.style.cssText = `margin-bottom: 100px;`
        })
        myMap.geoObjects.add(placemark);
        geoObjects.push(placemark);
    });

    var bounds = myMap.geoObjects.getBounds();
    myMap.setBounds(bounds, {
        checkZoomRange: true,
        zoomMargin: 100
    });

    // Удаляем ненужные контролы
    myMap.controls.remove('geolocationControl'); 
    myMap.controls.remove('searchControl'); 
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl'); 
    myMap.controls.remove('zoomControl'); 
    myMap.controls.remove('rulerControl'); 
    myMap.behaviors.disable(['scrollZoom']);
}

ymaps.ready(init);