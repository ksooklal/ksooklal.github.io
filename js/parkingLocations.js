var locations = [];
locations.push(new Location({locationName: "COD", locationType: "Work", latitude: 38.9007471, longitude: -77.00649629999998, locationAddress: "820 First Street NE Washington DC 20002"}));
locations.push(new Location({locationName: "Kristian", locationType: "Home", latitude: 38.9931229, longitude: -77.0234289, locationAddress: "815 Thayer Avenue Apt 520 Silver Spring MD 20910"}));
locations.push(new Location({locationName: "Baxter", locationType: "Home", latitude: 38.90051, longitude: -77.01837, locationAddress: "450 Massachusetts Avenue Northwest Washington DC 20001"}));
locations.push(new Location({locationName: "Alex Chan", locationType: "Home", latitude: 38.846505, longitude: -77.084493, locationAddress: "3467 25th Court South Arlington VA 22206"}));
locations.push(new Location({locationName: "Salvador", locationType: "Home", latitude: 38.831613, longitude: -76.910765, locationAddress: "5560 Lanier Ave Suitland MD 20746"}));




locations.push(new Location({locationName: "Broken Meter", locationType: "Parking", latitude: 38.899884, longitude: -77.006889, locationAddress: "750 First Street NE Washington DC 20002", parkingDescription: new ParkingDescription({timeRestriction: 2})}));
locations.push(new Location({locationName: "Pierce St NE & First St NE", locationType: "Parking", latitude: 38.9046994, longitude: -77.0062291, locationAddress: "88 Pierce Street NE Washington DC 20002", parkingDescription: new ParkingDescription({})}));
locations.push(new Location({locationName: "Pierce St NE", locationType: "Parking", latitude: 38.904659, longitude: -77.008428, locationAddress: "25 Pierce Street NE Washington DC 20002", parkingDescription: new ParkingDescription({side: "Left"})}));
locations.push(new Location({locationName: "Pierce St NE & North Capitol St", locationType: "Parking", latitude: 38.904737, longitude: -77.008810, locationAddress: "8 Pierce Street NE Washington DC 20002", parkingDescription: new ParkingDescription({})}));
locations.push(new Location({locationName: "Pierce St NE & North Capitol St", locationType: "Parking", latitude: 38.904671, longitude: -77.008881, locationAddress: "5 Pierce Street NE Washington DC 20002", parkingDescription: new ParkingDescription({side: "Left"})}));
locations.push(new Location({locationName: "North Capitol St NE", locationType: "Parking", latitude: 38.904219, longitude: -77.008951, locationAddress: "1109 North Capitol St NE Washington DC 20002", parkingDescription: new ParkingDescription({noParkingRange1: "7AM - 9:30AM", noParkingRange2: "4PM - 6:30PM"})}));
locations.push(new Location({locationName: "North Capitol St NW", locationType: "Parking", latitude: 38.904064, longitude: -77.009171, locationAddress: "1072 North Capitol St NW Washington DC 20002", parkingDescription: new ParkingDescription({noParkingRange1: "7AM - 9:30AM"})}));
locations.push(new Location({locationName: "L Street Alley", locationType: "Parking", latitude: 38.904001, longitude: -77.011421, locationAddress: "1100 McKenna Walk NW Washington DC 20001", parkingDescription: new ParkingDescription({})}));
locations.push(new Location({locationName: "L Street", locationType: "Parking", latitude: 38.903840, longitude: -77.011621, locationAddress: "87 L Street NW Washington DC 20001", parkingDescription: new ParkingDescription({})}));
locations.push(new Location({locationName: "First St NW (Walmart)", locationType: "Parking", latitude: 38.900974, longitude: -77.012227, locationAddress: "840 First St NW Washington DC 20536", parkingDescription: new ParkingDescription({})}));
locations.push(new Location({locationName: "Rhode Island Ave Metro Station", locationType: "Parking", latitude: 38.9196, longitude: -76.9957, locationAddress: "2300 Washington Pl NE Washington DC 20018", parkingDescription: new ParkingDescription({cost: 4.60, garage: true})}));
locations.push(new Location({locationName: "Anacostia Metro Station", locationType: "Parking", latitude: 38.862168, longitude: -76.995205, locationAddress: "1101 Howard Rd SE Washington DC 20020", parkingDescription: new ParkingDescription({cost: 4.60, garage: true})}));
locations.push(new Location({locationName: "First Terrace NW", locationType: "Parking", latitude: 38.9027, longitude: -77.01125, locationAddress: "1-63 First Terrace NW Washington DC 20001", parkingDescription: new ParkingDescription({})}));
locations.push(new Location({locationName: "First St NW & K St NW", locationType: "Parking", latitude: 38.90257, longitude: -77.0118, locationAddress: "75 K St NW Washington DC 20001", parkingDescription: new ParkingDescription({streetCleaning: "Wednesdays 12:30PM - 2:30PM"})}));
locations.push(new Location({locationName: "First St NW", locationType: "Parking", latitude: 38.90285, longitude: -77.01222, locationAddress: "1026 First St NW Washington DC 20001", parkingDescription: new ParkingDescription({streetCleaning: "Wednesdays 12:30PM - 2:30PM"})}));
locations.push(new Location({locationName: "First St NW & L St NW", locationType: "Parking", latitude: 38.9041, longitude: -77.0122, locationAddress: "1100 First St NW Washington DC 20001", parkingDescription: new ParkingDescription({})}));
locations.push(new Location({locationName: "N St NE", locationType: "Parking", latitude: 38.90722, longitude: -77.00808, locationAddress: "25 N St NE Washington DC 20002", parkingDescription: new ParkingDescription({timeRestriction: 2})}));
locations.push(new Location({locationName: "I St NW", locationType: "Parking", latitude: 38.901276, longitude: -77.012629, locationAddress: "102 I St NW Washington DC 20001", parkingDescription: new ParkingDescription({streetCleaning: "Thursdays 12:30 - 2:30"})}));
locations.push(new Location({locationName: "I St NW", locationType: "Parking", latitude: 38.90135, longitude: -77.013, locationAddress: "113 I St NW Washington DC 20001", parkingDescription: new ParkingDescription({streetCleaning: "Wednesdays 12:30 - 2:30"})}));
locations.push(new Location({locationName: "$5 Parking Lot", locationType: "Parking", latitude: 38.908351, longitude: -77.007034, locationAddress: "66 New York Ave NE Washington DC 20002", parkingDescription: new ParkingDescription({cost: 5.00})}));

function getLocations(){
	return locations;
}