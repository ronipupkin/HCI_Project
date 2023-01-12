let lat;
let lon;

function allowGeo() {
    if (navigator.geolocation) {
	navigator.geolocation.watchPosition(showPosition,showError);
//	navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
//    x.innerHTML = "Latitude: " + position.coords.latitude + 
//    "<br>Longitude: " + position.coords.longitude; 
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	myMap();
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(lat, lon), 
    zoom: 16
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var uluru = {lat: lat, lng: lon};
  var marker = new google.maps.Marker({
	position: uluru , 
	map: map});
//	alert(google.maps.LatLng(lat, lon));
}


function hoverProfile(element) { 
    element.setAttribute('src', '../static/InProgressSmall.png');
}

function unhoverProfile(element) {
    element.setAttribute('src', '../static/profileLogo.png');
}

function hoverGame(element) { 
    element.setAttribute('src', '../static/InProgressGame.png');
}

function unhoverGame(element) {
    element.setAttribute('src', '../static/crosword.png');
}

function hoverGoogle(element) { 
    element.setAttribute('src', '../static/InProgressGame.png');
}

function unhoverGoogle(element) {
    element.setAttribute('src', '../static/google.png');
}

function hoverFacebook(element) { 
    element.setAttribute('src', '../static/InProgressGame.png');
}

function unhoverFacebook(element) {
    element.setAttribute('src', '../static/facebook.png');
}

function hoverInstagram(element) { 
    element.setAttribute('src', '../static/InProgressGame.png');
}

function unhoverInstagram(element) {
    element.setAttribute('src', '../static/instagram.png');
}

function hoverTwitter(element) { 
    element.setAttribute('src', '../static/InProgressGame.png');
}

function unhoverTwitter(element) {
    element.setAttribute('src', '../static/twitter.png');
}






