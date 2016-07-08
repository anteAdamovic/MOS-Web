angular.module('mos')

.directive('browseCategoriesItem', function(){
  return {
    restrict: 'E',
    scope: false,
    template: '    <ion-item class="category-list-item-half"><a class="category-list-item-link" href="#/categories/category={{category.id}}"><i class="float-left category-list-item-icon {{category.icon}}"></i><p class="float-right category-list-item-name">{{category.name}}</p></a></ion-item>',
    link: function(scope, element, attrs){
      scope.category = angular.fromJson(attrs.category);
      console.log(angular.fromJson(scope.category));
    }
  }
})

.controller('categories-ctrl', function($scope, $http){
  $scope.setCurrentPath("Categories");

  $scope.categories = $scope.getCategoryList();


  // Have to use full path during development
  $scope.getCategories = function(){
    $http.get('php/getCategories.php').then(function(response){
      // Get categories from getCategories.php
      // $scope.categories = response.data.d;
    });
  }
  $scope.getCategories();
});
