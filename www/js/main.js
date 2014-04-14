function onBodyLoad() {
	console.log("in onBodyLoad()");
	document.addEventListener("deviceready", go, false);
}

function go() {
	loadDatabase();
}

function loadDatabase() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
		fs.root.getDirectory("databases", {create: true}, function(entry) {
			var ft = new FileTransfer();
			console.log(entry.name);
			ft.download("file:///android_asset/Database.db", // the filesystem uri you mentioned
			"file:///data/data/com.phonegap.offlinemapping/databases/Database.db", function(entry) {
				// do what you want with the entry here
				buildMap();
			}, function(error) {
				console.log("error source " + error.source);
				console.log("error target " + error.target);
				console.log("error code " + error.code);
			}, false, null);
		}, function() {
			alert("file create error");
		});
	}, null);
}

function buildMap() {
	var db = window.sqlitePlugin.openDatabase({
		name : "Database"
	});
	
	var map = new L.Map('map', {
		center : new L.LatLng(41.314297, -72.923588),
		zoom : 11
	});
	console.log("doing this");
	var lyr = new L.TileLayer.MBTiles('', {
		maxZoom : 17,
		scheme : 'tms'
	}, db);
	
	map.addLayer(lyr);
}