angular.module('mos')

.controller('mos-ctrl', function($scope, $http){
  $scope.title = 'Mobile Order System';
  $scope.titleShort = 'MOS';

  $scope.array = [1,2,3,4,5];

  $scope.change = function(){
    $scope.array = [$scope.array[0]+5,$scope.array[1]+5,$scope.array[2]+5,$scope.array[3]+5,$scope.array[4]+5];
  }

  $scope.change2 = function(){
    setTimeout(function(){
      $scope.array = [6,7,8,9,10];
    }, 2000);
  }

  $scope.change2();

});
