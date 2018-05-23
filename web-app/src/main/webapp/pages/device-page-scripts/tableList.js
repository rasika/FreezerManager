var tableA = document.getElementById("devices-listing");
var tableB = document.getElementById("devices-listing-listview");

var btnTabA = document.getElementById("showTableA");
var btnTabB = document.getElementById("showTableB");

btnTabA.onclick = function () {
    tableA.style.display = "table";
    tableB.style.display = "none";
};
btnTabB.onclick = function () {
    tableA.style.display = "none";
    tableB.style.display = "table";
};