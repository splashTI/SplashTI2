var app =angular.module('SplashApp', ['ngMaterial', 'ngMessages']);

app.config(['$mdThemingProvider',function($mdThemingProvider) {
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdThemingProvider.theme('default')
          .primaryPalette('brown')
          .accentPalette('deep-orange');
}]);
app.factory('appData', ['$http', function($http){
    var obj = {content:null};
    /*return {
        get: function(){
            $http.get('content.json');
        }

    }*/
    $http.get('content.json').then(function(data){
        console.log("test");
        obj.content = data;
        console.log(data);
    });
    return obj;

}]);
app.directive('cmdCode', function(){
    return {
      restrict: 'EA',
      templateUrl: 'app/html/templates/cmd-code.html',
      scope: {
        cmdline: '@'
      }
    };
  });

app.controller('MainController',['$scope', '$mdTheming', 'appData', '$sce', '$document', function($scope,$mdTheming,appData,$sce,$document){ 
//app.controller('MainController',['$scope', '$mdTheming',  function($scope,$mdTheming){
    $scope.msie  = $document[0].documentMode;
	
    $mdTheming.generateTheme('default');
  /* appData.get().then(function(response){
       $scope.data = response;
   }); */
   /*appData.then(function(response) { 
    console.log(response);
    $scope.data = response.data;
   });*/

   $scope.data = appData;
 //  $scope.jsonObj = {};
   $scope.jsonObj = appData;
   
   $scope.getJSON = function(){
        if(appData){
            //console.log('dddd');
            console.log(appData);
            if(appData.content){
              //  console.log('dzzd');
                if(appData.content.data){
                   $scope.jsonData = appData.content.data;
                }
                
            }
            
        }
   };

   $scope.$watch('jsonObj.content.data', function() {
       //alert('hey, myVar has changed!');
     $scope.getJSON();
    // $scope.jsonData = appData.content.data;
   });
   $scope.trustedHtml = function (plainText) {
            return $sce.trustAsHtml(plainText);
        }
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


