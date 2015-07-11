$(document).ready(function() {

	var map = L.map('map').setView([35.104602, -106.628414], 11);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a>',
		maxZoom: 18,

	}).addTo(map);

});