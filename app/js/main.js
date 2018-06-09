var app =angular.module('SplashApp', ['ngMaterial', 'ngMessages']);

app.controller('MainController',['$scope', function($scope){

    $scope.message = "Test";
    console.log("test test test....");

}]);
