
// --------------- ULTERIORI STILI PER BASE LAYER ---------------

// Mapbox
//---------- 
// Bright
// var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png', {
//         attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
//     });

// Medieval
// var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/spatial.b625e395/{z}/{x}/{y}.png', {
//         attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
//     }); 

// Se inizializzo la mappa dopo la dichiarazione del baseLayer (ma senza averlo aggiunto alla mappa con addTo() ) devo usare il metodo addLayer di map().
// var map = L.map('map').addLayer(mapboxTiles).setView([45.4588, 9.2010], 14);


// Custom Tiles
// ----------------
// L.tileLayer('sfondo/batimetria/{z}/{x}/{y}.png', {
// 	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>',    
//     maxZoom: 18
// }).addTo(map);


// Stamen
// ----------
// Nel seguente link trovate le istruzioni per caricarle:  http://maps.stamen.com/#terrain/12/37.7706/-122.3782
// // replace "toner" here with "terrain" or "watercolor"
// var layer = new L.StamenTileLayer("toner");
// var map = new L.Map("element_id", {
//     center: new L.LatLng(45.4588, 9.2010),
//     zoom: 12
// });
// map.addLayer(layer);




// --------------- Marker Clusterer ---------------
