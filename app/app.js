var myAppModule = angular.module("myApp", []);
myAppModule.controller("IndexController", function ($scope){
	$scope.focusOn = function(event){
		var elementID = event.target.id;
		var targetID = elementID.substring(0, elementID.length - 3);
		$("#" + targetID).focus();
	};
	
	$scope.projects = [
		{
			project: "Stack",
			projectDescription: "Constant Time implementation of basic Stack functionality, applicable for any Generic object that implements Comparable interface",
			projectTechnologies: "Java"
		},
		{
			project: "LinkedList",
			projectDescription: "Implementation of classic LinkedList data structure in Java, with Generic compatibility", 
			projectTechnologies: "Java"
		},
		{
			project: "Change Picture Example",
			projectDescription: "Adding custom action to picture object using JQuery",
			projectTechnologies: "HTML, JavaScript, JQuery"
		}
	];
});