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

})

.controller('home-ctrl', function($scope){

})

.controller('order-ctrl', function($scope, $http){
  $scope.categories = [
    { name: 'Category 1', id: 1 },
    { name: 'Category 2', id: 2 },
    { name: 'Category 3', id: 3 },
    { name: 'Category 4', id: 4 },
    { name: 'Category 5', id: 5 },
    { name: 'Category 6', id: 6 },
    { name: 'Category 7', id: 7 },
    { name: 'Category 8', id: 8 }
  ]
})

.controller('category-ctrl', function($scope, $stateParams){
  console.log($stateParams);
  $scope.categoryId = $stateParams.categoryId;
  $scope.categoryName = $scope.data[$scope.categoryId-1].name;
  $scope.items = $scope.data[$scope.categoryId-1].items;
})

.controller('item-ctrl', function($scope, $stateParams){
  console.log($stateParams);
  $scope.categoryId = $stateParams.categoryId;
  $scope.itemId = $stateParams.itemId;
  $scope.item = $scope.data[$scope.categoryId].items[$scope.itemId];
});
