function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

var ColorsEnum = {
	BLACK: "Home",
	RED: "Cheap Parking",
	YELLOW: "Zone Parking",
	ORANGE: "Time-Restricted Parking",
	GREEN: "Free Parking",
	BLUE: "COD Location",
	WHITE: ""
};

function getContentOfMarker(location){
	var locationType = location.locationType;
	if (locationType != null && typeof(locationType) != undefined && locationType != undefined && locationType.length > 0){
		if (locationType === "Home"){
			return location.locationName;
		}
		if (locationType === "Work"){
			return "<b>COD</b>";
		}
		if (locationType === "Parking"){
			if (location.parkingDescription != null){
				var description = location.parkingDescription;
				alert("YAY" + description.cost);
				if (description.cost > 0 && description.cost < 6){
					return "" + location.locationName + "<br/>Cost: " + description.cost + "<br/>" + location.locationAddress;
				}
				if (description.timeRestriction > 0){
					if (description.zoneRestriction === true){
						return "" + location.locationName + "<br/>Zone Restricted Parking: Free Parking limit of <b>" + description.timeRestriction + " hours</b>.<br/>" + location.locationAddress;
					}
					return "" + location.locationName + "<br/>Free Parking limit of <b>" + description.timeRestriction + " hours</b><br/>" + location.locationAddress;
				}
				var content = "" + location.locationName;
				if (description.streetCleaning != false){
					
				}
				content = content + "<br/>" + location.locationAddress;
			}
		}
	}
	return location.locationAddress;
}

function getColorOfMarker(location){
	var locationType = location.locationType;
	if (locationType != null && typeof(locationType) != undefined && locationType != undefined && locationType.length > 0){
		if (locationType === "Home"){
			return ColorMappings[ColorsEnum.BLACK];
		}
		if (locationType === "Work"){
			return ColorMappings[ColorsEnum.BLUE];
		}
		if (locationType === "Parking"){
			
		}
	}
	return ColorMappings[ColorsEnum.WHITE];
}

var ColorMappings = [];
ColorMappings[ColorsEnum.BLACK] = "#000000";
ColorMappings[ColorsEnum.RED] = "#FF0000";
ColorMappings[ColorsEnum.YELLOW] = "#FFFF00";
ColorMappings[ColorsolorMappings[ColorsEnum.GREEN] = "#008000";
ColorMappings[ColorsEnum.BLUE] = "#0000FF";
ColorMappings[ColorsEnum.WHITE] = "#FFFFFF"Enum.ORANGE] = "#FFA500";
C;

if (Object.freeze)
  Object.freeze(ColorsEnum);

function ParkingDescription(cost, zoneRestriction, timeRestriction, streetCleaning, side, garage, noParkingRange1, noParkingRange2, text){
	this.zoneRestriction = zoneRestriction;
	this.streetCleaning = streetCleaning;
	this.cost = cost;
	this.garage = garage;
	this.timeRestriction = timeRestriction;
	this.text = text;
	this.side = side;
	this.noParkingRange1 = noParkingRange1;
	this.noParkingRange2 = noParkingRange2;
}


function ParkingLocation(element){
	element.location 
}

new ParkingLocation({location: "me" } );


function Location(locationName, locationType, latitude, longitude, locationAddress, parkingDescription, zIndex) {
	this.locationName = locationName;
	this.locationType = locationType;
	this.latitude = latitude;
	this.longitude = longitude;
	this.locationAddress = locationAddress;
	if (zIndex === null || typeof(zIndex) === undefined || zIndex === undefined){
		this.zIndex = 1;
	}
	this.parkingDescription = parkingDescription;
}
