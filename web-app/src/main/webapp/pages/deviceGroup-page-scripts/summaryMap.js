//initialising the map view tab
var map = L.map('mapId').setView([5.85015, 101.82129], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGFzaGFuIiwiYSI6ImNqYmc3dGVybTFlZ3UyeXF3cG8yNGxsdzMifQ.n3QEq0-g5tVFmsQxn3JZ-A',
    closePopupOnClick: false,
}).addTo(map);

//adding the legend
var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<table><tr><td><i class=\"tiny material-icons\" >wb_sunny</i></td><td>' + displayName1 + '</td></tr><tr><td><i class=\"tiny material-icons\">opacity</i></td><td> ' + displayName2 + ' </td></tr><tr><td><i class=\"tiny material-icons\" >call_made</i></td><td>' + displayName3 + '</td></tr></table>';
    return div;
};
legend.addTo(map);


//initialising the map view tab
var mymap = L.map('mapid').setView([5.85015, 101.82129], 7);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGFzaGFuIiwiYSI6ImNqYmc3dGVybTFlZ3UyeXF3cG8yNGxsdzMifQ.n3QEq0-g5tVFmsQxn3JZ-A',
    closePopupOnClick: false,
}).addTo(mymap);

legend.addTo(mymap);

var temp;
var bound=[];
var markers = L.markerClusterGroup();
var markers1 = L.markerClusterGroup();

//add devices to map as popups
function addToMapPopoup(lat, long, devName, devId, parameter1, parameter2, parameter3) {
    var popupLocation = new L.LatLng(lat, long);
    if (parameter1 == null) {
        parameter1 = 0;
    }
    if (parameter2 == null) {
        parameter2 = 0;
    }
    if (parameter3 == null) {
        parameter3 = 0;
    }
    var popupContent = "<div onclick=\"window.location.href='details.jsp?id=" + devName + "'\"><b id='weatherStation" + devId + "' >" + devName + "</b><br><table><tr><td><i class=\"tiny material-icons\" >wb_sunny</i></td><td>" + precise_round(parameter1, 3) + "</td><td><i class=\"tiny material-icons\">opacity</i></td><td>" + parameter2 + "</td><td><i class=\"tiny material-icons\" >call_made</i></td><td>" + parameter3 + "</td></table></div>";
    temp=L.latLng(lat, long);
    bound.push(temp);
    if (($.inArray(devName, activeDevices)) !== -1) {
        popup = new L.Popup({
            maxWidth: "auto",
            autoPan: false,
            closeButton: false,
            closeOnClick: false,
            className: "active-popup"
        });
    } else {
        popup = new L.Popup({
            maxWidth: "auto",
            autoPan: false,
            closeButton: false,
            closeOnClick: false,
            className: "inactive-popup"
        });
    }
    popup.setLatLng(popupLocation);
    popup.setContent(popupContent);

    popupOne = new L.Popup({maxWidth: "auto", autoPan: false, closeButton: false, closeOnClick: false});
    popupOne.setLatLng(popupLocation);
    popupOne.setContent(popupContent);

 
    markers.addLayer(popup);
    map.addLayer(markers);

    markers1.addLayer(popupOne);
    mymap.addLayer(markers1);

    map.fitBounds(bound);
}