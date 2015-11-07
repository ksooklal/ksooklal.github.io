var locations = [];
locations.push(new SportsLocation({
	league: "MLS",
	locationName: "", sportsCity: "", locationCity: "", latitude: "", longitude: "",
	gameName: "", date: "", gameDescription: "",
	ticketUrl: ""
}));

locations.push(new SportsLocation({
	league: "NBA",
	locationName: "Verizon Center", sportsCity: "Washington, D.C.", locationCity: "Washington, D.C.", 
	latitude: "38.9071923", longitude: "-77.0368707",
	gameName: "Washington Wizards vs Sacramento Kings", date: "03/14/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NBA/Washington Wizards vs Sacramento Kings 2015-03-14.pdf"
}));

locations.push(new SportsLocation({
	league: "",
	locationName: "", sportsCity: "", locationCity: "", latitude: "", longitude: "",
	gameName: "", date: "", gameDescription: "",
	ticketUrl: ""
}));

function getSportsLocations(){
	return locations;
}