function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

function ParkingDescription(){
	this.zoneRestriction = 0;
	this.streetCleaning = false;
	this.cost = 0;
	this.garage = false;
}

function ParkingDescription(zoneRestriction, streetCleaning, cost, side){
	this.cost = cost;
	this.streetCleaning = streetCleaning;
	this.garage = false;
	this.zoneRestriction = zoneRestriction;
	this.side = side;
}

function ParkingDescription(zoneRestriction, streetCleaning, cost){
	this.cost = cost;
	this.streetCleaning = streetCleaning;
	this.garage = false;
	this.zoneRestriction = zoneRestriction;
	this.side='Right';
}

function Location(locationName, locationType, latitude, longitude, locationAddress, zIndex, parkingDescription) {
	this.locationName = locationName;
	this.locationType = locationType;
	this.latitude = latitude;
	this.longitude = longitude;
	this.locationAddress = locationAddress;
	this.zIndex = zIndex;
	this.parkingDescription = parkingDescription;
}

function Location(locationName, locationType, latitude, longitude, locationAddress, parkingDescription) {
	this.locationName = locationName;
	this.locationType = locationType;
	this.latitude = latitude;
	this.longitude = longitude;
	this.locationAddress = locationAddress;
	this.zIndex = 1;
	this.parkingDescription = parkingDescription;
}

function Location(locationName, locationType, latitude, longitude, locationAddress){
	this.parkingDescription = null;
	this.zIndex = 1;
	this.latitude = latitude;
	this.locationType = locationType;
	this.locationAddress = locationAddress;
	this.locationName = locationName;
	this.longitude = longitude;
}