var RTMarkers=[];

var realTimeMap = L.map('realTimeMap').setView([5.85015, 101.82129], 7);
    // realtime = L.realtime('https://wanderdrone.appspot.com/', {
    //     interval: 3 * 1000
    // }).addTo(realTimeMap);


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    closePopupOnClick: false
}).addTo(realTimeMap);


// realtime.on('update', function() {
//     realTimeMap.fitBounds(realtime.getBounds(), {maxZoom: 3});
// });
//




// var markerRealtime = L.marker([7.9, 80.56274]).addTo(realTimeMap);
// var markerRealtime1 = L.marker([9.9, 81.56274]).addTo(realTimeMap);
//
// mymap.fitBounds([[7.9, 80.56274]]);
// var lat=9.9;
// var lon=80.56274;
// var lat1=10.5;
// var lon1=89;
// var i=0;
// myLoop();
//
// function myLoop () {           //  create a loop function
//     setTimeout(function () {    //  call a 3s setTimeout when the loop is called
//         lat += 1;
//         lon += 1;
//         lat1-=1;
//         lon1-=1;
//         markerRealtime.addTo(realTimeMap).setLatLng([lat, lon]).update();         //  your code here
//         markerRealtime1.addTo(realTimeMap).setLatLng([lat1, lon1]).update();
//         realTimeMap.fitBounds([[lat,lon],[lat1,lon1]], {maxZoom: 3});
//         i++;                     //  increment the counter
//         if (i < 100) {            //  if the counter < 10, call the loop function
//             myLoop();             //  ..  again which will trigger another
//         }                        //  ..  setTimeout()
//     }, 1000)
// }
//
