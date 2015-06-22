function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

function formatMoney(amount){
	return "$" + amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

var ColorsEnum = {
	PURPLE: "Home",
	GREEN: "Cheap Parking",
	BROWN: "Zone Parking",
	ORANGE: "Time-Restricted Parking",
	BLUE: "Free Parking",
	RED: "COD Location",
	WHITE: ""
};

function getContentOfMarker(location){
	var locationType = location.locationType;
	if (locationType != null && typeof(locationType) != "undefined" && locationType != undefined && locationType.length > 0){
		if (locationType === "Home"){
			return "<font size = '3' color = 'black'><b>" + location.locationName + "</b></font>";
		}
		if (locationType === "Work"){
			return "<font size = '3'><b>COD Project Location</b></font><font><br/>820 First Street NE,<br/>Washington DC, 20002</font>";
		}
		if (locationType === "Parking"){
			if (location.parkingDescription != null){
				var description = location.parkingDescription;
				if (description.cost > 0 && description.cost < 6){
					return "<font size = '3' color = 'green'><b>" + location.locationName + "</b></font><br/>Cost: " + formatMoney(description.cost) + "<br/>" + location.locationAddress;
				}
				if (description.timeRestriction > 0){
					if (description.zoneRestriction === true){
						return "<font size = '3'><b>Free Parking: " + location.locationName + "</b></font><br/><font color = 'orange'><b>Zone Restricted Parking: Free Parking limit of " + description.timeRestriction + " hours</b></font><br/>" + location.locationAddress;
					}
					return "<font size = '3'><b>Free Parking: " + location.locationName + "</b></font><br/><font color = '#D2691E'><b>Free Parking limit of " + description.timeRestriction + " hours</b></font><br/>" + location.locationAddress;
				}
				var content = "<font size = '3'><b>Free Parking: " + location.locationName + "</b></font>";
				if (description.streetCleaning != false){
					content = content + "<br/>" + "<font color = 'red'><b>Street Cleaning: " + description.streetCleaning + "</b></font>";
				}
				if (description.noParkingRange1 != false){
					content = content + "<br/>" + "<font color = 'red'><b>No Parking: " + description.noParkingRange1 + "</b></font>";
				}
				if (description.noParkingRange2 != false){
					content = content + "<font color = 'red'><b>&nbsp;" + description.noParkingRange2 + "</b></font>";
				}
				content = content + "<br/>" + location.locationAddress;
				return content;
			}
		}
	}
	return location.locationAddress;
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

var ColorMappings = [];
ColorMappings[ColorsEnum.PURPLE] = "800080";
//ColorMappings[ColorsEnum.YELLOW] = "FFFF00";
//ColorMappings[ColorsEnum.BLACK] = "000000";
//ColorMappings[ColorsEnum.PINK] = "DA70D6";
ColorMappings[ColorsEnum.RED] = "FF0000";
ColorMappings[ColorsEnum.BROWN] = "D2691E";
ColorMappings[ColorsEnum.GREEN] = "008000";
ColorMappings[ColorsEnum.BLUE] = "0000FF";
ColorMappings[ColorsEnum.WHITE] = "FFFFFF"
ColorMappings[ColorsEnum.ORANGE] = "FF8C00";

if (Object.freeze)
  Object.freeze(ColorsEnum);

function ParkingDescription(parkingDescription){
	if (parkingDescription.cost === undefined || parkingDescription.cost == undefined || 
		typeof(parkingDescription.cost) === "undefined" || parkingDescription.cost === null){
		this.cost = 0;
	} else {
		this.cost = parkingDescription.cost;
	}
	
	if (parkingDescription.zoneRestriction === undefined || parkingDescription.zoneRestriction == undefined || 
		typeof(parkingDescription.zoneRestriction) === "undefined" || parkingDescription.zoneRestriction === null){
		this.zoneRestriction = false;
	} else {
		this.zoneRestriction = parkingDescription.zoneRestriction;
	}
	
	if (parkingDescription.streetCleaning === undefined || parkingDescription.streetCleaning == undefined || 
		typeof(parkingDescription.streetCleaning) === "undefined" || parkingDescription.streetCleaning === null){
		this.streetCleaning = false;
	} else {
		this.streetCleaning = parkingDescription.streetCleaning;
	}
	
	if (parkingDescription.garage === undefined || parkingDescription.garage == undefined || 
		typeof(parkingDescription.garage) === "undefined" || parkingDescription.garage === null){
		this.garage = false;
	} else {
		this.garage = parkingDescription.garage;
	}
	
	if (parkingDescription.timeRestriction === undefined || parkingDescription.timeRestriction == undefined || 
		typeof(parkingDescription.timeRestriction) === "undefined" || parkingDescription.timeRestriction === null){
		this.timeRestriction = 0;
	} else {
		this.timeRestriction = parkingDescription.timeRestriction;
	}
	
	if (parkingDescription.text === undefined || parkingDescription.text == undefined || 
		typeof(parkingDescription.text) === "undefined" || parkingDescription.text === null){
		this.text = "";
	} else {
		this.text = parkingDescription.text;
	}
	
	if (parkingDescription.side === undefined || parkingDescription.side == undefined || 
		typeof(parkingDescription.side) === "undefined" || parkingDescription.side === null){
		this.side = "Right";
	} else {
		this.side = parkingDescription.side;
	}
	
	if (parkingDescription.noParkingRange1 === undefined || parkingDescription.noParkingRange1 == undefined || 
		typeof(parkingDescription.noParkingRange1) === "undefined" || parkingDescription.noParkingRange1 === null){
		this.noParkingRange1 = false;
	} else {
		this.noParkingRange1 = parkingDescription.noParkingRange1;
	}
		
	if (parkingDescription.noParkingRange2 === undefined || parkingDescription.noParkingRange2 == undefined || 
		typeof(parkingDescription.noParkingRange2) === "undefined" || parkingDescription.noParkingRange2 === null){
		this.noParkingRange2 = false;
	} else {
		this.noParkingRange2 = parkingDescription.noParkingRange2;
	}
}

function Location(location) {
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