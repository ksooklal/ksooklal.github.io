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
	league: "",
	locationName: "", sportsCity: "", locationCity: "",
	gameName: "", date: "", gameDescription: "",
	ticketUrl: ""
	
	if (location.locationName === undefined || location.locationName == undefined || 
		typeof(location.locationName) === "undefined" || location.locationName === null){
		this.locationName = "";
	} else {
		this.locationName = location.locationName;
	}
	
	if (location.locationType === undefined || location.locationType == undefined || 
		typeof(location.locationType) === "undefined" || location.locationType === null){
		this.locationType = "";
	} else {
		this.locationType = location.locationType;
	}
	
	if (location.zIndex === null || typeof(location.zIndex) === "undefined" || 
		location.zIndex === undefined || location.zIndex == undefined || location.zIndex < 1){
		this.zIndex = 1;
	} else {
		this.zIndex = location.zIndex;
	}
	
	if (location.latitude === undefined || location.latitude == undefined || 
		typeof(location.latitude) === "undefined" || location.latitude === null){
		this.latitude = "";
	} else {
		this.latitude = location.latitude;
	}
	
	if (location.longitude === undefined || location.longitude == undefined || 
		typeof(location.longitude) === "undefined" || location.longitude === null){
		this.longitude = "";
	} else {
		this.longitude = location.longitude;
	}
	
	if (location.locationAddress === undefined || location.locationAddress == undefined || 
		typeof(location.locationAddress) === "undefined" || location.locationAddress === null){
		this.locationAddress = "";
	} else {
		this.locationAddress = location.locationAddress;
	}
	
	if (location.parkingDescription === undefined || location.parkingDescription == undefined || 
		typeof(location.parkingDescription) === "undefined" || location.parkingDescription === null){
		this.parkingDescription = "";
	} else {
		this.parkingDescription = location.parkingDescription;
	}
}