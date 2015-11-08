var locations = [];
locations.push(new SportsLocation({
	league: "MLS",
	locationName: "RFK Stadium", sportsCity: "Washington, D.C.", locationCity: "Washington, D.C.", 
	latitude: "38.8898", longitude: "-76.972",
	gameName: "DC United vs Philadelphia Union", date: "07/26/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/MLS/DC United vs Philadelphia Union 2015-07-26.pdf"
}));

locations.push(new SportsLocation({
	league: "NBA",
	locationName: "Verizon Center", sportsCity: "Washington, D.C.", locationCity: "Washington, D.C.", 
	latitude: "38.898", longitude: "-77.021",
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
	locationName: "Wells Fargo Center", sportsCity: "Philadelphia", locationCity: "Phildelphia", 
	latitude: "39.9134618", longitude: "-75.1716640",
	gameName: "Philadelphia 76ers vs Washington Wizards", date: "04/08/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NBA/Philadelphia 76ers vs Washington Wizards 2015-04-08.pdf"
}));

locations.push(new SportsLocation({
	league: "MLB",
	locationName: "Camden Yards", sportsCity: "Baltimore", locationCity: "Baltimore", 
	latitude: "39.284", longitude: "-76.622",
	gameName: "Baltimore Orioles vs Toronto Blue Jays", date: "09/30/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/MLB/Baltimore Orioles vs Toronto Blue Jays 2015-09-30.pdf"
}));

locations.push(new SportsLocation({
	league: "MLB",
	locationName: "Nationals Park", sportsCity: "Washington, D.C.", locationCity: "Washington, D.C.", 
	latitude: "38.873", longitude: "-77.0075",
	gameName: "Washington Nationals vs Philadelphia Phillies", date: "09/27/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/MLB/Washington Nationals vs Philadelphia Phillies 2015-09-27.pdf"
}));

locations.push(new SportsLocation({
	league: "NFL",
	locationName: "FedEx Field", sportsCity: "Washington, D.C.", locationCity: "Landover, MD", 
	latitude: "38.9076", longitude: "-76.8645",
	gameName: "Washington Redskins vs New York Giants", date: "12/01/2013", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NFL/Washington Redskins vs New York Giants 2013-12-01.pdf"
}));

locations.push(new SportsLocation({
	league: "",
	locationName: "", sportsCity: "", locationCity: "", 
	latitude: "", longitude: "",
	gameName: "", date: "", gameDescription: "",
	ticketUrl: ""
}));

/* locations.push(new SportsLocation({
	league: "",
	locationName: "", sportsCity: "", locationCity: "", 
	latitude: "", longitude: "",
	gameName: "", date: "", gameDescription: "",
	ticketUrl: ""
})); */

function getSportsLocations(){
	return locations;
}