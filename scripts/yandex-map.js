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