

// MapBox.JS
var map = L.mapbox.map('map', 'lindseybradford.map-x0nvnd9d')
    .setView([32.782159, -96.788377], 14);

var geoJson = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-96.788377, 32.782159]
    },
    "properties": {
        "title": "Tanoshi - 2427 Commerce Street, Dallas, TX",
        "icon": {
            "iconUrl": "../assets/images/logos-icons/map-pin.png",
            "iconSize": [60, 60]
        }
    }
}];

// Set a custom icon on each marker based on feature properties
map.markerLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});

// Add features to the map
map.markerLayer.setGeoJSON(geoJson);


map.markerLayer.setGeoJSON(geoJson);
map.markerLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});
map.markerLayer.on('mouseout', function(e) {
    e.layer.closePopup();
});

map.scrollWheelZoom.disable();




