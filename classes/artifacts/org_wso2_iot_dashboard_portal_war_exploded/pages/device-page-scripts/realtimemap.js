var RTMarkers=[];

var realTimeMap = L.map('realTimeMap').setView([5.85015, 101.82129], 7);
    // realtime = L.realtime('https://wanderdrone.appspot.com/', {
    //     interval: 3 * 1000
    // }).addTo(realTimeMap);


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    closePopupOnClick: false
}).addTo(realTimeMap);


