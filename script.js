var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider)
		$routeProvider
		.when('/', {
			templateUrl: "login.html"
		})
		.when('/main', {
			templateUrl:"main.html"
		})
		.otherwise({
			redirectTo:'/'
		});
});
app.controller('myCtrl',function($scope, $location){
	$scope.submit = function(){
		var username = $scope.username;
		var password = $scope.password;
		if($scope.username == "admin" && $scope.password == "admin"){
			$location.path("/main.html")
		}
	}
});