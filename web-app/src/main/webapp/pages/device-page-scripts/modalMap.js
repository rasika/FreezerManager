//initialising the input map
var map = L.map('inputMapId').setView([4.85015, 101.82129], 6);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var popup = L.popup();
var popupOne=L.popup();
var lat;
var lng;

//generates popup and assigns latitude and longitude values to variables
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Location with coordinates " + e.latlng.toString() + " is selected")
        .openOn(map);
    lat = e.latlng.lat;
    lng = e.latlng.lng;

    latValue(lat);
    lngValue(lng);

}

// returns value of latitude
function latValue(lat) {
    return lat;
}

// returns value of longitude
function lngValue(lng) {
    return lng;
}

map.on('click', onMapClick);