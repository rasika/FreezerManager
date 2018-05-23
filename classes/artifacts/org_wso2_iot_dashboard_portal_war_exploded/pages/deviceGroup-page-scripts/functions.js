var devicesTemp = [];
var activeDevices=[];
var inactiveDevices=[];


function addToMap(dev, index, lat, long) {
    var KnownSuccess = function (data) {
        var records = JSON.parse(data);
        var record = JSON.parse(data).records[0];

        var parameterOne = null;
        var parameterTwo = null;
        var parameterThree = null;

        if (record) {
            parameterOne = record.values[typepParameter1];
            parameterTwo = record.values[typeParameter2];
            parameterThree = record.values[typeParameter3];
        }

        //To fix the issue of adding devices with null or undefined location values to map
        if ((lat == null || lat === "undefined" ) || (long == null || lat === "undefined")) {
            console.log('undefined lat' + lat + ' long ' + long);
        }
        else {
            addToMapPopoup(lat, long, dev.deviceIdentifier, dev.id, parameterOne, parameterTwo, parameterThree);
        }

    };

    $.ajax({
        type: "POST",
        url: "invoker/execute",
        data: {
            "uri": "/events/last-known/"+deviceType+"/" + devices[index].deviceIdentifier,
            "method": "get"
        },
        success: KnownSuccess

    });

}






function precise_round(num, decimals) {
    var t = Math.pow(10, decimals);
    return (Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}
