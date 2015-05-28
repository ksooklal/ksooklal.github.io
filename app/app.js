var myAppModule = angular.module("myApp", []);
myAppModule.controller("IndexController", [
	function (){
		this.focusOn = function(event){
			var elementID = event.target.id;
			var targetID = elementID.substring(0, elementID.length - 3);
			$(window).scrollTo("#" + targetID);
		};
		
		this.projects = [
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
			}
		];
	}
]);