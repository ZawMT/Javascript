var appMain = angular.module('appMain', []);

appMain.controller('ctrlMain', ['$scope',  function($scope) {	
	$scope.AppInfo = { 
		"AppName" : "Test in AngularJS", 
		"About" : "Testing application to try AngularJS features.",
		"VersionInfo" : {"Version" : "0.0.2", "Description" : "Test version"}
	};
	
	$scope.oprts = ["+", "-", "*", "/", "%"];
	$scope.result = {value: ""};
	
	$scope.fnCalc = function() {
		if($scope.selectedOprt=="+")
			$scope.result.value = $scope.fnAdd($scope.param1, $scope.param2);
		else if($scope.selectedOprt=="-")
			$scope.result.value = $scope.fnSub($scope.param1, $scope.param2);
		else if($scope.selectedOprt=="*")
			$scope.result.value = $scope.fnMul($scope.param1, $scope.param2);
		else if($scope.selectedOprt=="/")
			$scope.result.value = $scope.fnDiv($scope.param1, $scope.param2);
		else 
			$scope.result.value = $scope.fnMod($scope.param1, $scope.param2);
	};
	
	$scope.fnAdd = function(a, b) {
		return a + b;
	};
	
	$scope.fnSub = function(a, b) {
		return a - b;
	};
	
	$scope.fnMul = function(a, b) {
		return a * b;
	};
	
	$scope.fnDiv = function(a, b) {
		if(b == 0)
			return 0;
		
		return a / b;
	};
	
	$scope.fnMod = function(a, b) {
		if(b == 0)
			return 0;
		
		return a % b;
	};

}]);