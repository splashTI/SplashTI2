var app =angular.module('SplashApp', ['ngMaterial', 'ngMessages']);

app.config(['$mdThemingProvider',function($mdThemingProvider) {
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdThemingProvider.theme('default')
          .primaryPalette('brown')
          .accentPalette('deep-orange');
}]);
app.controller('MainController',['$scope', '$mdTheming', function($scope,$mdTheming){

    $scope.message = "Test";
    console.log("test test test....");
    $mdTheming.generateTheme('default');
   /* var removeFunction = $mdTheming.setBrowserColor({
        theme: 'orange', // Default is 'default'
        palette: 'red', // Default is 'primary', any basic material palette and extended palettes are available
        hue: '200' // Default is '800'
      });
  
      $scope.$on('$destroy', function () {
        removeFunction(); // COMPLETELY removes the browser color
      }) */

      $scope.currentNavItem = 'Home';

      $scope.goto = function(page) {
        $scope.status = "Goto " + page;
      };

}]);
