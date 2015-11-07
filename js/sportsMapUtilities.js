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
}

function getColorOfMarker(location){
	var locationType = location.locationType;
	if (locationType != null && typeof(locationType) != "undefined" && locationType != undefined && locationType.length > 0){
		if (locationType === "Home"){
			return ColorMappings[ColorsEnum.PURPLE];
		}
		if (locationType === "Work"){
			return ColorMappings[ColorsEnum.RED];
		}			
		if (locationType === "Parking" && location.parkingDescription != null){
			var description = location.parkingDescription;
			if (description.cost > 0 && description.cost < 6){
				return ColorMappings[ColorsEnum.GREEN];
			}
			if (description.cost === 0){
				if (description.zoneRestriction === true){
					return ColorMappings[ColorsEnum.BROWN];
				}
				if (description.timeRestriction > 0){
					return ColorMappings[ColorsEnum.ORANGE];
				}
				return ColorMappings[ColorsEnum.BLUE];
			}
		}
	}
	return ColorMappings[ColorsEnum.WHITE];
}

var PURPLE = "800080";
var YELLOW = "FFFF00";
var BLACK = "000000";
var PINK = "DA70D6";
var RED = "CC0000";
//var LIGHT_BROWN = "D2691E";
var BROWN = "8B4513";
var GREEN = "008000";
var BLUE = "0000FF";
var WHITE = "FFFFFF"
var ORANGE = "FF6600";