/* -----------
	 Mappa
------------*/
	 var map = L.map('map').setView([45.4588, 9.2010], 15);

/*----------------
	Base Layers
-----------------*/

// OpenStreetMap
// ------------- 
var baseLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

// Mapbox
//---------- 
// var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i86nkdio/{z}/{x}/{y}.png', {
//         attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
//     }).addTo(map); 

/*------------------
	Features Layers
--------------------*/

// Marker
// -------
// Oggetto marker
var openDotMarker = L.marker([45.448198, 9.222020])
    .bindPopup('<b>Opendot</b> <br> Weeeee!')
    .openPopup()
    .addTo(map);
// Icona Marker
var openDotIcon = L.icon({
    iconUrl: 'img/opendot-marker.png',
    shadowUrl: 'img/opendot-marker-shadow.png',
    iconSize:     [80, 80], // size of the icon
    shadowSize:   [80, 80], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [60, 15] // point from which the popup should open relative to the iconAnchor
});
// Commentare il marker sopra e crearne uno nuovo qui sotto, passandogli tra le proprietà la nuova icona
// var openDotMarker = L.marker([45.448198, 9.222020],
// 	{ icon: openDotIcon}) // NOTA: questa opzione non era presente prima
//     .bindPopup('<b>Opendot</b> <br> Weeeee!')
//     .openPopup()
//     .addTo(map); 

// GeoJSON
// --------- 
// Dati GeoJSON
var fontane = L.geoJson(fontanelle, {
	pointToLayer : function  (feature, latlng) {
		lat = feature.geometry.coordinates[0];
		lng = feature.geometry.coordinates[1];
		return L.marker([lng,lat]).bindPopup("Andiamo a bere al Bar del Drago Verde!");
	}
}).addTo(map);
// Icona GeoJSON
var fontanella = L.icon ({
	iconUrl: 'img/vedovella.png',
	shadowUrl: 'img/vedovella-shadow.png',
    iconSize:     [80, 93], // size of the icon
    shadowSize:   [80, 93], // size of the shadow
    iconAnchor:   [0, 0 ], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [45, 10] // point from which the popup should open relative to the iconAnchor
});
// Come sopra per il marker, commentate il vecchio codice e ricaricate il GeoJSON con le giuste icone
// var fontane = L.geoJson(fontanelle, {
// 	pointToLayer : function  (feature, latlng) {
// 		lat = feature.geometry.coordinates[0];
// 		lng = feature.geometry.coordinates[1];
// 		return L.marker([lng,lat],
// 		 {icon: fontanella}) // NOTA: questa opzione non era presente prima
// 		 .bindPopup("Andiamo a bere al Bar del Drago Verde!");
// 	}
// }).addTo(map);

/*-----------------
	Layers Control
-----------------*/

// Creo due oggetti con i riferimenti rispettivamente ai BaseLayers ed ai FeatureLayers
var baseMaps={"Sfondo OSM": baseLayer};
var featureLayers={
	"Vedovelle": fontane,
	"Logo Opendot" : openDotMarker
};
// Creo i controlli
L.control.layers(baseMaps, featureLayers).addTo(map);
// Per un metodo moolto più succinto (che usa però Mapbox.js) guardare questo link: https://www.mapbox.com/mapbox.js/example/v1.0.0/toggle-baslayers/

