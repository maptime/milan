#LeafletJS tutorial

Questa cartella contiene i file ed i dati necessari per il tutorial su Leaflet.
Scaricala come .zip dal bottone di lato a dx, o tramite ```git clone```  
La pagina qui di seguito è scarsamente commentata di proposito, in quanto pensata come accompagnamento ad una spiegazione orale del tutorial.

#Step 0 - Prepariamo la pagina

Apriamo il file index.html.
Per prima cosa andiamo a caricare la libreria Leaflet (con estensione .js), insieme con il relativo foglio di stile (.css).  
Per fare questo, in fondo al file, ma prima della chiusura del ```body``` (cioè prima del tag ```</body>```) aggiungiamo i link agli scripts necessari:

		<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />


Poi aggiungiamo il codice per definire lo stile della pagina e della mappa (dimensioni, posizione ecc..). Per fare questo usiamo un tag particolare ```<style></style>```dentro cui mettere il codice. Questo tag ed il suo contenuto vanno messi all'interno dell'```<header></header>```

	
		body { margin:0; padding:0; }
		#map { position:absolute; top:0; bottom:0; width:100%; }
	

 Solitamente è buona pratica separare il codice relativo al contenuto (HTML) dallo stile (CSS), mettendo il secondo in un file a sè stante, ma per comodità questa volta terremo tutto insieme all'interno del tag ```<header></header>```.
 
Se vi siete persi, nessuna paura!  
Qui di seguito (ed in fondo ad ogni successivo paragrafo), potete trovare un file con il codice relativo scritto fino a questo punto.  
[** File step1**](./mappa-fontanelle/files-step-by-step/index1.html)

#Step 1 - La nostra prima web-map
Per prima cosa andiamo a definire il `div` che conterrà la nostra mappa, all'interno del ```<body></body>```.  
Cosi:

	<div id='map'></div>
	
Ora, con due righe di javascript chiediamo a Leaflet di creare una mappa dentro a questo div. Per fare questo useremo un tag simile a quello usato in precedenza per definire lo stile, ma pensato per contenre del codice javascript invece che del CSS:

	//creo una mappa con relativa posizione e zoom iniziali
	 var map = L.map('map').setView([45.4588, 9.2010], 15);

	//aggiungo un layer di sfondo, o Base Layer
	var baseLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://	mapbox.com">Mapbox</a>',
			maxZoom: 18
		}).addTo(map);


[** File step2**](./mappa-fontanelle/files-step-by-step/index2.html)	




#Step 2 - Creare un marker

Ora


#Step 3 - GeoJSON FTW!

#Step 4 - Layers Control

#Step 5 - Plugins: Marker CLusterer

#Step 1

#Step 1

