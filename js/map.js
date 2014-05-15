  document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
 

  
  navigator.geolocation.getCurrentPosition(onSuccess, onError);

    // onSuccess Geolocation

    //
}
    function onSuccess(position) {

        alert("geo: "+position.coords.latitude+","+position.coords.longitude);

        var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 14);

    	L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {

    		maxZoom: 18

    	}).addTo(map);

    	L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);

    }

    // onError Callback receives a PositionError object

    //

    function onError(error) {

       alert('code: '    + error.code    + '\n' +

              'message: ' + error.message + '\n');

    }