var locations = [];
//MLS, Visited
locations.push(new SportsLocation({
	league: "MLS",
	locationName: "RFK Stadium", sportsCity: "Washington, D.C.", locationCity: "Washington, D.C.", 
	latitude: "38.8898", longitude: "-76.972",
	gameName: "DC United vs Philadelphia Union", date: "07/26/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/MLS/DC United vs Philadelphia Union 2015-07-26.pdf"
}));

locations.push(new SportsLocation({
	league: "MLS",
	locationName: "Yankee Stadium", sportsCity: "New York City", locationCity: "New York City", 
	latitude: "40.829666", longitude: "-73.926148",
	gameName: "New York City FC vs DC United", date: "08/12/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/MLS/New York City FC vs DC United 2015-08-12.pdf"
}));

locations.push(new SportsLocation({
	league: "MLS",
	locationName: "CenturyLink Field", sportsCity: "Seattle", locationCity: "Seattle", 
	latitude: "47.59515", longitude: "-122.33163",
	gameName: "Seattle Sounders vs Colorado Rapids", date: "07/07/2012", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/MLS/Seattle Sounders vs Colorado Rapids 2012-07-07.pdf"
}));


//MLS, Not Visited

//NBA, Visited
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
	league: "NBA",
	locationName: "Staples Center", sportsCity: "Los Angeles", locationCity: "Los Angeles", 
	latitude: "34.043", longitude: "-118.2673",
	gameName: "Los Angeles Lakers vs Boston Celtics", date: "02/21/2014", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NBA/Los Angeles Lakers vs Boston Celtics 2014-02-21.pdf"
}));

locations.push(new SportsLocation({
	league: "NBA",
	locationName: "TD Garden", sportsCity: "Boston", locationCity: "Boston",
	latitude: "42.3664", longitude: "-71.062",
	gameName: "Boston Celtics vs Washington Wizards", date: "11/27/2015", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NBA/Boston Celtics vs Washington Wizards 2015-11-27.pdf"
}));

//NBA, Not Visited

//MLB, Visited
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

//MLB, Not Visited

//NFL, Visited
locations.push(new SportsLocation({
	league: "NFL",
	locationName: "FedEx Field", sportsCity: "Washington, D.C.", locationCity: "Landover, MD", 
	latitude: "38.9076", longitude: "-76.8645",
	gameName: "Washington Redskins vs New York Giants", date: "12/01/2013", gameDescription: "Regular Season Game",
	ticketUrl: "../../Sports Travels/NFL/Washington Redskins vs New York Giants 2013-12-01.pdf"
}));

//NFL, Not Visited

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