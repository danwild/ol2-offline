# ol2-offline
A simple example of using OpenLayers V2 with no network connection.

![Screenshot](/screenshots/offline.png?raw=true)

The hard part (for me) was creating an XYZ tileset... but:

**Hot tip:** use the awesome [QTiles](http://www.qgistutorials.com/en/docs/creating_basemaps_with_qtiles.html) plugin 
for QGIS to easily build tiles sets from raster layers, aka GeoTiffs.

OpenLayers v2 [docs are here](http://dev.openlayers.org/apidocs/files/OpenLayers/Map-js.html), but it's essentially just:

```javascript
var myTilesPath = 'qtiles/bright-earth-tiles/${z}/${x}/${y}.png';
var options = {
	projection: "EPSG:3857",
	center: center,
	zoom: 4,
	layers: [
		new OpenLayers.Layer.OSM("Local Tiles", myTilesPath)
	]
};
var map = new OpenLayers.Map("map", options);
```