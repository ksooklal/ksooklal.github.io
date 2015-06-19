var locations = [];
locations.push(new Location("COD", "Work", 38.9007471, -77.00649629999998, "820 First Street NE Washington DC 20002"));
locations.push(new Location("Kristian", "Home", 38.9931229, -77.0234289, "815 Thayer Avenue Apt 520 Silver Spring MD 20910"));
locations.push(new Location("Baxter", "Home", 38.90051, -77.01837, "450 Massachusetts Avenue Northwest Washington DC 20001"));
locations.push(new Location("Alex Chan", "Home", 38.846505, -77.084493, "3467 25th Court South Arlington VA 22206"));
locations.push(new Location("Salvador", "Home", 38.831613, -76.910765, "5560 Lanier Ave Suitland MD 20746"));




locations.push(new Location("Broken Meter", "Parking", 38.899884, -77.006889, "750 First Street NE Washington DC 20002", new ParkingDescription(0, false, 2)));
locations.push(new Location("Pierce St NE & First St NE", "Parking", 38.9046994, -77.0062291, "88 Pierce Street NE Washington DC 20002", new ParkingDescription()));
locations.push(new Location("Pierce St NE", "Parking", 38.904659, -77.008428, "25 Pierce Street NE Washington DC 20002", new ParkingDescription(0, false, 0, false, "Left")));
locations.push(new Location("Pierce St NE & North Capitol St", "Parking", 38.904737, -77.008810,  "8 Pierce Street NE Washington DC 20002", new ParkingDescription(0, false, 0)));
locations.push(new Location("Pierce St NE & North Capitol St", "Parking", 38.904671, -77.008881,  "5 Pierce Street NE Washington DC 20002", new ParkingDescription(0, false, 0, false, "Left")));
locations.push(new Location("North Capitol St NE", "Parking", 38.904219, -77.008951, "1109 North Capitol St NE Washington DC 20002", new ParkingDescription("7AM - 9:30AM", "4PM - 6:30PM")));
locations.push(new Location("North Capitol St NW", "Parking", 38.904064, -77.009171, "1072 North Capitol St NW Washington DC 20002", new ParkingDescription("7AM - 9:30AM")));
locations.push(new Location("L Street Alley", "Parking", 38.904001, -77.011421, "1100 McKenna Walk NW Washington DC 20001", new ParkingDescription()));
locations.push(new Location("L Street", "Parking", 38.903840, -77.011621, "87 L Street NW Washington DC 20001", new ParkingDescription()));
locations.push(new Location("First St NW (Walmart)", "Parking", 38.900974, -77.012227, "840 First St NW Washington DC 20536", new ParkingDescription()));
locations.push(new Location("Rhode Island Ave Metro Station", "Parking", 38.9196, -76.9957, "2300 Washington Pl NE Washington DC 20018", new ParkingDescription(4.60, false, 0, false, "", true)));
locations.push(new Location("Anacostia Metro Station", "Parking", 38.862168, -76.995205, "1101 Howard Rd SE Washington DC 20020", new ParkingDescription(4.60, false, 0, false, "", true)));
locations.push(new Location("First Terrace NW", "Parking", 38.9027, -77.01125, "1-63 First Terrace NW Washington DC 20001", new ParkingDescription()));
locations.push(new Location("First St NW & K St NW", "Parking", 38.90257, -77.0118, "75 K St NW Washington DC 20001", new ParkingDescription(0, false, 0, "Wednesdays 12:30 - 2:30")));
locations.push(new Location("First St NW", "Parking", 38.90285, -77.01222, "1026 First St NW Washington DC 20001", new ParkingDescription(0, false, 0, "Wednesdays 12:30 - 2:30")));
locations.push(new Location("First St NW & L St NW", "Parking", 38.9041, -77.0122, "1100 First St NW Washington DC 20001", new ParkingDescription()));
locations.push(new Location("N St NE", "Parking", 38.90722, -77.00808, "25 N St NE Washington DC 20002", new ParkingDescription(0, false, 2)));
locations.push(new Location("I St NW", "Parking", 38.901276, -77.012629, "102 I St NW Washington DC 20001", new ParkingDescription(0, false, 0, "Thursdays 12:30 - 2:30")));
locations.push(new Location("I St NW", "Parking", 38.90135, -77.013, "113 I St NW Washington DC 20001", new ParkingDescription(0, false, 0, "Wednesdays 12:30 - 2:30")));
locations.push(new Location("$5 Parking Lot", "Parking", 38.908351, -77.007034, "66 New York Ave NE Washington DC 20002", new ParkingDescription(5, false, 0)));

function getLocations(){
	return locations;
}