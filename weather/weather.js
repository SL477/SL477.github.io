function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation isn't supported");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
    fetch("https://weather-proxy.freecodecamp.rocks/api/current?lat=" + 
        Math.floor(position.coords.latitude).toString() + "&lon=" + 
        Math.floor(position.coords.longitude).toString())
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

