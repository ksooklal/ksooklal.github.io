function cleanUpString(string){
	
	if (string === undefined || string == undefined || typeof (string) === "undefined" || string === null || string == null){
		return "";
	}
	
	var trimmedString = trim(string);
	
	if (trimmedString === undefined || trimmedString == undefined || typeof (trimmedString) === "undefined" || trimmedString === null || trimmedString == null){
		return "";
	}
	
	return trimmedString;
}


function trim(str) {
     return str.replace(/^\s+|\s+$/g,"");
}

function SportsLocation(location) {
	this.league = cleanUpString(location.league);
	this.locationName = cleanUpString(location.locationName);
	this.gameName = cleanUpString(location.gameName);
	this.date = cleanUpString(location.date);
	this.ticketUrl = cleanUpString(location.ticketUrl);
	this.sportsCity = cleanUpString(location.sportsCity);
	this.locationCity = cleanUpString(location.locationCity);
	this.gameDescription = cleanUpString(location.gameDescription);
	this.latitude = cleanUpString(location.latitude);
	this.longitude = cleanUpString(location.longitude);
	this.type = cleanUpString(location.type)
}

function getColorOfMarker(location){
	var type = cleanUpString(location.type);
	var league = cleanUpString(location.league);
	
	if (type === "NotVisited"){
		return WHITE;
	}
	
	if (type === "NFL" || league === "NFL"){
		return PURPLE;
	}
	
	if (type === "NBA" || league === "NBA"){
		return ORANGE;
	}
	
	if (type === "MLB" || league === "MLB"){
		return YELLOW;
	}
	
	if (type === "NHL" || league === "NHL"){
		return BLACK;
	}
	
	if (type === "MLS" || league === "MLS"){
		return GREEN;
	}
	
	if (league === "NCAAFB" || league === "NCAAF" || league === "NCAA Football" || type === "NCAAFB"){
		return BROWN;
	}

	if (league === "NCAABB" || league === "NCAA Basketball" || league === "NCAA Men's Basketball" || type === "NCAABB"){
		return RED;
	}
	
	return GREY;
}

function getContentOfMarker(location){
	var game = location.gameName;
	var htmlString = "<font size = '3'><b>" + game + "</b></font>";
	var stadium = location.locationName;
	var date = location.date;
	htmlString += ("<br/>" + stadium + ", " + location.locationCity);
	var url = location.ticketUrl;
	htmlString += ("<br/><a href = '" + url + "' target = '_blank'>" + date + "</a><br/>");
	return htmlString;
}

function createMarker(location) {
	var latLng = new google.maps.LatLng(location.latitude, location.longitude);
	var content = getContentOfMarker(location);
	var color = getColorOfMarker(location);
	var icon = "../../images/" + color + ".png";

	var marker = new google.maps.Marker(
		{
			position: latLng, 
			map: map,
			icon: icon
		}
	);
	google.maps.event.addListener(marker, "click", function() {
		if (infowindow) 
			infowindow.close();
		infowindow = new google.maps.InfoWindow({content: content});
		infowindow.open(map, marker);
	});
	return marker;
}

var PURPLE = "800080";
var YELLOW = "FFFF00";
var BLACK = "000000";
var PINK = "DA70D6";
var RED = "CC0000";
var GREY = "BFC9CA";
//var LIGHT_BROWN = "D2691E";
var BROWN = "8B4513";
var GREEN = "008000";
var BLUE = "0000FF";
var WHITE = "FFFFFF"
var ORANGE = "FF6600";