var appMain = angular.module('appMain', []);

appMain.controller('ctrlMain', ['$scope',  function($scope) {	
	$scope.AppInfo = { 
		"AppName" : "Test in AngularJS", 
		"About" : "Testing application to try AngularJS features.",
		"VersionInfo" : [
			{"Version" : "0.0.1", "Description" : "Test version"}
		]
	};
}]);