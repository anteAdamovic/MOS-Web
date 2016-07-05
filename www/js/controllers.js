angular.module('mos')

.controller('mos-ctrl', function($scope, $http){
  $scope.title = 'Mobile Order System';
  $scope.titleShort = 'MOS';

  $scope.data = [{
    name: 'Category 1',
    id: 1,
    image: 'image.img',
    items: [{
      name: 'Item 1',
      id: 1,
      price: 12.5,
      available: true
    },{
      name: 'Item 2',
      id: 2,
      price: 14.5,
      available: true
    },{
      name: 'Item 3',
      id: 3,
      price: 9.5,
      available: true
    }]
  },{
    name: 'Category 2',
    id: 2,
    image: 'image.img',
    items: [{
      name: 'Item 21',
      id: 1,
      price: 212.5,
      available: true
    },{
      name: 'Item 22',
      id: 2,
      price: 214.5,
      available: true
    },{
      name: 'Item 23',
      id: 3,
      price: 29.5,
      available: true
    }]
  },{
    name: 'Category 3',
    id: 3,
    image: 'image.img',
    items: [{
      name: 'Item 31',
      id: 1,
      price: 312.5,
      available: true
    },{
      name: 'Item 32',
      id: 2,
      price: 314.5,
      available: true
    },{
      name: 'Item 33',
      id: 3,
      price: 39.5,
      available: true
    }]
  },{
    name: 'Category 4',
    id: 4
  },{
    name: 'Category 5',
    id: 5
  },{
    name: 'Category 6',
    id: 6
  },{
    name: 'Category 7',
    id: 7
  },{
    name: 'Category 8',
    id: 8
  }];

  // For use during development
  $scope.getCategoryItems = function(categoryId){

  }

  // For use during development
  $scope.getCategoryList = function(){

  }

})

.controller('home-ctrl', function($scope){

})

.controller('order-ctrl', function($scope, $http){
  $scope.categories = [
    { name: 'Coffeine', id: 1 },
    { name: 'Beer', id: 2 },
    { name: 'Water', id: 3 },
    { name: 'Tea', id: 4 },
    { name: 'Wine', id: 5 },
    { name: 'Liqeour', id: 6 },
    { name: 'Juice', id: 7 },
    { name: 'Ice Cream', id: 8 }
  ];

  // Have to use full path during development
  $scope.getCategories = function(){
    $http.get('php/getCategories.php').then(function(response){
      // Get categories from getCategories.php
      $scope.categories = response.data.d;
    });
  }
})

.controller('category-ctrl', function($scope, $stateParams){
  console.log("category-ctrl params: ");
  console.log($stateParams);
  $scope.categoryId = $stateParams.categoryId;
  $scope.categoryName = $scope.data[$scope.categoryId-1].name;
  $scope.items = $scope.data[$scope.categoryId-1].items;

  // Have to use full path during development
  $scope.getItems = function(categoryId){
    $http.get('php/getItems.php',{ params: { categoryId: categoryId } }).then(function(response){
      // Get items from category with categoryId
    });
  }
})

.controller('item-ctrl', function($scope, $stateParams){
  console.log("item-ctrl params: ");
  console.log($stateParams);
  $scope.categoryId = $stateParams.categoryId;
  $scope.itemId = $stateParams.itemId;
  $scope.item = $scope.data[$scope.categoryId].items[$scope.itemId];

  // Have to use full path during development
  $scope.getItemData = function(categoryId, itemId){
    $http.get('php/getItemData',{ params: { categoryId: categoryId, itemId: itemId } }).then(function(response){
      // Get item data for item with itemId from category with categoryId
    });
  }
});
