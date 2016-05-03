function initMap() {
  // Create a map object and specify the DOM element for display.
  console.log('success');
  var myLatLng = {lat: 25.043487, lng: 121.535603};
  var image = 'img/club_GPS_icon.png';
  $('')
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 18
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Our Studio!',
    icon:image
  });
  // To add the marker to the map, call setMap();
  marker.setMap(map);
}//initMap