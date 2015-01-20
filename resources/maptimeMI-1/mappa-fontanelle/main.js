/*
OSM
*/
var	osm = {
	name: 'OpenStreetMap',
	type: 'xyz',
	url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	layerOptions: {
		subdomains: ['a', 'b', 'c'],
		attribution: '© OpenStreetMap contributors',
		continuousWorld: true
	}
};
var map = L.map('map').setView([45.4588, 9.2010], 14);
var baseLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				{
					attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
					maxZoom: 18
				}
				).addTo(map);

/*
MAPBOX
*/
// Sostituire MapID con il proprio ID mapbox
// var map = L.map('map').setView([45.4588, 9.2010], 9);
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
// 
// mapbox
// L.mapbox.accessToken = 'pk.eyJ1IjoiY2FydG9taWtlIiwiYSI6IjZfYkZqajAifQ.d6uTFMLHEgrjpFmD_e9kRQ';
// var map = L.mapbox.map('map', 'examples.map-i86nkdio')
//     	.setView([45.4588, 9.2010], 9);

/*
custom tiles
*/
// L.tileLayer('tiles/{z}/{x}/{y}.png', {
// 	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>',    
//     maxZoom: 18
// }).addTo(map);

/*
Stamen
*/
// In alternativa usare le mappe di Stamen (a fondo pagina le istruzioni)
// http://maps.stamen.com/#terrain/12/37.7706/-122.3782
// // replace "toner" here with "terrain" or "watercolor"
// var layer = new L.StamenTileLayer("toner");
// var map = new L.Map("element_id", {
//     center: new L.LatLng(45.4588, 9.2010),
//     zoom: 12
// });
// map.addLayer(layer);


// Icon
var fontanella = L.icon ({
	iconUrl: 'img/fontanella.png',
	shadowUrl: 'img/fontanella_ombra.png',
    iconSize:     [80, 93], // size of the icon
    shadowSize:   [80, 93], // size of the shadow
    iconAnchor:   [0, 0 ], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [45, 10] // point from which the popup should open relative to the iconAnchor
});
console.log(fontanella);

// var fontanelle_geojson = $.getJSON($('link[rel="points"]').attr("href"), function(data) {
//   var geojson = L.geoJson(data, {
//     onEachFeature: function (feature, layer) {
//       layer.bindPopup(feature.properties.name);
//     }
//   });
// var points = L.geoJson(labels, {
//         pointToLayer: function (feature, latlng) {
//             return L.marker(latlng, {icon: crossIcon });
//         }
// });

var fontane = L.geoJson(fontanelle, {
	pointToLayer : function  (feature, latlng) {
		lat = feature.geometry.coordinates[0];
		lng = feature.geometry.coordinates[1];
		return L.marker([lng,lat], {icon: fontanella}).bindPopup("Evviva l'acqua pubblica!");
	}
	
    
   
}).addTo(map);



