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
    view.setCenter([114.36, 30.54]);
    view.setZoom(15);
    map.render();
}

document.getElementById('get-center').onclick = function () {
    var view = map.getView();
    var center = view.getCenter();
    alert(center);
}

document.getElementById('move-to-CHINA').onclick = function () {
    var view = map.getView();
    view.setCenter([106.75, 33.60]);
    view.setZoom(5);
    map.render();
}

var XiaoGan = new ol.Feature({
   geometry: new ol.geom.Point([113.9069, 30.9184])
});
var ZhuZhou = new ol.Feature({
    geometry: new ol.geom.Point([113.1482, 27.8395])
});
var Tianjin = new ol.Feature({
    geometry: new ol.geom.Point([117.2092, 39.1028])
});
var GanZhou = new ol.Feature({
    geometry: new ol.geom.Point([114.922, 25.869])
});
var ZhangZhou = new ol.Feature({
    geometry: new ol.geom.Point([117.5373, 25.0016])
});

//设置图标
var dogeStyle = new ol.style.Style({
    image: new ol.style.Icon({
        crossOrigin: 'anonymous',
        src: 'image/doge.png'
    })
});
GanZhou.setStyle(dogeStyle);
Tianjin.setStyle(dogeStyle);
XiaoGan.setStyle(dogeStyle);
ZhangZhou.setStyle(dogeStyle);
ZhuZhou.setStyle(dogeStyle);

//包含图标的矢量图层
var vectorSource = new ol.source.Vector({
    features: [XiaoGan, Tianjin, ZhuZhou, GanZhou, ZhangZhou]
});
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});
//OSM地图层
var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var map = new ol.Map({
    layers: [osmLayer, vectorLayer],
    target: document.getElementById('map'),
    controls: ol.control.defaults({
        attributionOptions: {
            collapsible: false
        }
    }),
    view: new ol.View({
        projection:'EPSG:4326', //坐标系为WGS84
        //projection:'EPSG:3857', //OSM默认坐标系
        center: [106.75, 33.60], //中心
        zoom: 5
    })
});