var myAppModule = angular.module("myApp", []);
myAppModule.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
myAppModule.controller("IndexController", [
	function (){
		this.focusOn = function(event){
			var elementID = event.target.id;
			var targetID = elementID.substring(0, elementID.length - 3);
			$(window).scrollTo("#" + targetID);
		};
		
		this.domainName = "kristiansooklal.me";
		
		this.projects = [
			{
				projectName: "Twilio Example",
				projectID: "SampleTwilioProject",
				projectLink: "https://github.com/ksooklal/SampleTwilioProject",
				projectDescription: "Small example of how to send SMS messages via Twilio. Use of Twilio number to send SMS messages to valid US 10-digit mobile phone numbers",
				projectTechnologies: "Java, Twilio API"
			},
			{
				projectName: "Twitter API Example",
				projectID: "SampleTwitterProject",
				projectLink: "https://github.com/ksooklal/SampleTwitterProject",
				projectDescription: "Use of the Twitter API to send Tweets, including an example of how to send 2016 NBA All Star Votes via Twitter",
				projectTechnologies: "Java, Twitter API"
			},
			{
				projectName: "Selenium",
				projectID: "Selenium",
				projectLink: "https://github.com/ksooklal/Selenium",
				projectDescription: "Sample Use Cases of the Selenium UI Test driver, including a ChromeDriver example",
				projectTechnologies: "Java, Selenium"
			},
			{
				projectName: "Stack",
				projectID: "Stack",
				projectLink: "https://github.com/ksooklal/Stack",
				projectDescription: "Constant Time implementation of basic Stack functionality, applicable for any Generic object that implements Comparable interface",
				projectTechnologies: "Java"
			},
			{
				projectName: "LinkedList",
				projectID: "LinkedList",
				projectLink: "https://github.com/ksooklal/LinkedList",
				projectDescription: "Implementation of classic LinkedList data structure in Java, with Generic compatibility", 
				projectTechnologies: "Java"
			},
			{
				projectName: "ArrayList",
				projectID: "ArrayList",
				projectLink: "https://github.com/ksooklal/ArrayList",
				projectDescription: "Implementation of classic ArrayList data structure in Java, with Generic compatibility", 
				projectTechnologies: "Java"
			},
			{
				projectID: "ChangePictureExample",
				projectName: "Change Picture Example",
				projectLink: "https://github.com/ksooklal/Change-Picture-Example",
				projectDescription: "Adding custom action to picture object using JQuery",
				projectTechnologies: "HTML, JavaScript, JQuery"
			},
			{
				projectID: "AddressConversionUtility",
				projectName: "Address Conversion Utility",
				projectLink: "https://github.com/ksooklal/AddressConversionUtility",
				projectDescription: "Converts a street address to latitude/longitude coordinates. View <a href = 'http://kristiansooklal.me/AddressConversionUtility/'>demo</a>",
				projectTechnologies: "JavaScript, XML, Ajax"
			}
		];
	}
]);
