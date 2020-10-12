!function(){
    "use strict";
        angular.module('eventApp', [])
        .controller('eventController', eventController);
        
        function eventController($scope) {
         
          $scope.kp1=0;
          $scope.kp2=50;
        }
}();