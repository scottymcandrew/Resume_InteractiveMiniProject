function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];
    // .map is NOT Google maps, but rather a Javascript method. Similar to a ForEach loop. i is index
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            // % - if we have more than 26 locations it will loop back around vs throw an error
            label: labels[i % labels.length]
        });
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}