var appMain = angular.module('appMain', []);

appMain.controller('ctrlMain', ['$scope','$http',  function($scope, $http) {	
	$scope.AppInfo = { 
		"AppName" : "Test in AngularJS", 
		"About" : "Calling Web Service",
		"VersionInfo" : {"Version" : "0.1.0", "Description" : "Test version"}
	};
	
	$scope.state = "";
	$scope.city = "";

	$scope.fnGetWS = function(){
		var url = "https://api.weather.gov/points/" + $scope.lat + "," + $scope.lon;
		$http.get(url).then(function successCallback(response) {
			/*The json structure is assumed as fixed*/
			$scope.state = response.data.properties.relativeLocation.properties.state;
			$scope.city = response.data.properties.relativeLocation.properties.city;
		}, function errorCallback(response) {
			var v2 = response;
		});
	};
}]);