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