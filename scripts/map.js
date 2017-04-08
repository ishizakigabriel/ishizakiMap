var mymap;
var PointY;
var PointX;
var Latitudes = [-22.8672586463009,-22.873288747536876,-22.868701940800346,-22.890942553483775,-22.86949278059831,-22.852113015176577,-22.894401876851862,-22.8563246982027];
var Longitudes = [-47.22048282623291,-47.19447612762452,-47.21198558807374,-47.198832035064704,-47.208123207092285,-47.2112774848938,-47.17419862747193,-47.18966960906983];
var nomes = ["Chico Mendes","Remanso das águas","Campo municipal","Lagoa do Sta. Clara","Academia municipal","Centro Poliesportivo","Praça poderosa","Praça dos trabalhadores"];
var images = ["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png"]
function loadMap(){
	mymap = L.map('mapid').setView([-22.87095582208681, -47.20653533935547], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxib3JkaWdub24iLCJhIjoiY2l0MzFlZXdzMHRyNjJvcGdnY2txZXdsMCJ9.IOAXYE1_mrHHHUbVMxR59Q', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
	PointY=document.getElementById('markerY');
	PointX=document.getElementById('markerX');
	for(var i = 0; i < nomes.length; i++)
	{
		var Marker = L.marker([Latitudes[i],Longitudes[i]]).addTo(mymap);
		Marker.bindPopup('<b><center>' + nomes[i] + '</center></b><br><image class="mapspot" src=' + images[i] + '></image>');
	}
}

function getLocation()
{
	mymap.on('click',function(e) {PointY.value = e.latlng.lat;PointX.value = e.latlng.lng;});			
}

function addMarker(){
	var Marker = L.marker([parseFloat(PointY.value),parseFloat(PointX.value)]).addTo(mymap);
	Marker.bindPopup('<b>' + document.getElementById('nome').value + '</b>');
}