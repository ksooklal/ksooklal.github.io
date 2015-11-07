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
	league: "NBA",
	locationName: "Barclays Center", sportsCity: "Brooklyn", locationCity: "Brooklyn", 
	latitude: "40.6829896", longitude: "-73.9752615",
	gameName: "Brooklyn Nets vs Washington Wizards", date: "04/10/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NBA/Brooklyn Nets vs Washington Wizards 2015-04-10.pdf"
}));

locations.push(new SportsLocation({
	league: "NBA",
	locationName: "Philadelphia 76ers", sportsCity: "Philadelphia", locationCity: "Phildelphia", 
	latitude: "39.9134618", longitude: "-75.1716640",
	gameName: "Philadelphia 76ers vs Washington Wizards", date: "04/08/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NBA/Philadelphia 76ers vs Washington Wizards 2015-04-08.pdf"
}));

function getSportsLocations(){
	return locations;
}