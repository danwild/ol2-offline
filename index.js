var myTilesPath = 'qtiles/bright-earth-tiles/${z}/${x}/${y}.png';

var center = new OpenLayers.LonLat(15182839.800227, -3077813.3805025);

var options = {
	projection: "EPSG:3857",
	center: center,
	zoom: 4,
	layers: [
		new OpenLayers.Layer.OSM("Local Tiles", myTilesPath)
	]
};

var map = new OpenLayers.Map("map", options);
//var tileLayer = new OpenLayers.Layer.XYZ("Local Tiles", myTilesPath);
//var tileLayer = new OpenLayers.Layer.OSM("Local Tiles", myTilesPath);
//map.addLayers([tileLayer]);
map.addControl(new OpenLayers.Control.LayerSwitcher());


