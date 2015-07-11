$(document).ready(function() {

	// activity 1
	var map = L.map('map').setView([35.104602, -106.628414], 11);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a>',
		maxZoom: 18,

	}).addTo(map);

	// activity 2
	var groceryUrl = "../data/retail_grocery.geojson";
	$.ajax({
		url: groceryUrl,
		dataType: 'json',
		success: function (data) {
			groceryGeoJson = data;

			geojson = new L.GeoJSON(data, {

				onEachFeature: function(feature, layer){
					layer.bindPopup(feature.properties.Name);

				}
			});
			geojson.addTo(map);

		}

	});

	// activity 3
	var povertyUrl = "../data/census.geojson";
	$.ajax({
		url: povertyUrl,
		dataType: 'json',
		success: function (data) {

			geojson = new L.GeoJSON(data, {

				onEachFeature: function(feature, layer){
					layer.bindPopup("poverty: " + Math.floor(100*parseInt(feature.properties.poverty)/(feature.properties.population)) + "%");

				}
			});
			geojson.addTo(map);

		}


	});

});