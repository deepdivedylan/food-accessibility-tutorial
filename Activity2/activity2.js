$(document).ready(function() {

	var map = L.map('map').setView([35.104602, -106.628414], 11);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a>',
		maxZoom: 18,

	}).addTo(map);

	var url = "../data/retail_grocery.geojson";
	$.ajax({
		url: url,
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

});