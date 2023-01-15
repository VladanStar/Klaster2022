function pokazi() {
  let x = navigator.geolocation;
  x.getCurrentPosition(success, failure);
  function success(position) {
    let myLat = position.coords.latitude;
    let myLong = position.coords.longitude;

    let coords = new google.maps.LatLng(myLat, myLong);

    let mapOptions = {
      zoom: 9,
      center: coords,
    //   mapTypeId: google.maps.mapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
    let marker = new google.maps.Marker({ map: map, position: coords });
    console.log("Vladan");
  }
  function failure() {
    alert("Nece")
  }
}
