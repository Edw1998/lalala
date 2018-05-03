var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: {
            collapsible: false
        }
    }),
    view: new ol.View({
        projection:'EPSG:4326', //坐标系为WGS84
        //projection:'EPSG:3857', //OSM默认坐标系
        center: [114.36, 30.54], //中心为武汉大学
        zoom: 15
    })
});

document.getElementById('zoom-out').onclick = function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
};

document.getElementById('move-left').onclick = function () {
    var view = map.getView();
    var mapCenter = view.getCenter();
    //让地图中心的x值增加，即左移
    mapCenter[0] += 0.01;
    view.setCenter(mapCenter);
    map.render();//渲染
}

document.getElementById('move-right').onclick = function () {
    var view = map.getView();
    var mapCenter = view.getCenter();
    //让地图中心的x值减少，即右移
    mapCenter[0] -= 0.01;
    view.setCenter(mapCenter);
    map.render();//渲染
}

document.getElementById('move-up').onclick = function () {
    var view = map.getView();
    var mapCenter = view.getCenter();
    //让地图中心的y值减少，即上移
    mapCenter[1] -= 0.01;
    view.setCenter(mapCenter);
    map.render();//渲染
}

document.getElementById('move-down').onclick = function () {
    var view = map.getView();
    var mapCenter = view.getCenter();
    //让地图中心的y值增大，即下移
    mapCenter[1] += 0.01;
    view.setCenter(mapCenter);
    map.render();//渲染
}

document.getElementById('move-to-WHU').onclick = function () {
    var view = map.getView();
    view.setCenter([114.36,30.54]);
    view.setZoom(15);
    map.render();
}

document.getElementById('get-center').onclick = function () {
    var view = map.getView();
    var center = view.getCenter();
    alert(center);
}
