var myAppModule = angular.module("myApp", []);
myAppModule.controller("IndexController", function ($scope){
	$scope.focusOn = function(event){
		var elementID = event.target.id;
		var targetID = elementID.substring(0, elementID.length - 3);
		$("#" + targetID).focus();
	};
});