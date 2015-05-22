var myAppModule = angular.module("myApp", []);
myAppModule.controller("IndexController", [
	function (){
		this.focusOn = function(event){
			var elementID = event.target.id;
			var targetID = elementID.substring(0, elementID.length - 3);
			$("#" + targetID).focus();
		};
		
		this.projects = [
			{
				projectName: "Stack",
				projectLink: "https://github.com/ksooklal/Stack",
				projectDescription: "Constant Time implementation of basic Stack functionality, applicable for any Generic object that implements Comparable interface",
				projectTechnologies: "Java"
			},
			{
				projectName: "LinkedList",
				projectLink: "",
				projectDescription: "Implementation of classic LinkedList data structure in Java, with Generic compatibility", 
				projectTechnologies: "Java"
			},
			{
				projectName: "Change Picture Example",
				projectLink: "https://github.com/ksooklal/Change-Picture-Example",
				projectDescription: "Adding custom action to picture object using JQuery",
				projectTechnologies: "HTML, JavaScript, JQuery"
			}
		];
	}
]);