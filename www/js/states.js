angular.module('mos')

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.

    state('/home', {
      url: '/home',
      templateUrl: 'webPages/homeMenu.html'
    })

    .state('/order', {
      url: '/order',
      templateUrl: 'webPages/order.html'
    })

    .state('/categories/category=id', {
      url: '/categories/category=:categoryId',
      templateUrl: 'webPages/category.html'
    })

    .state('/item', {
      url: '/categories/category=:categoryId/item=:itemId',
      templateUrl: 'webPages/item.html'
    });

  $urlRouterProvider.otherwise('/home');
});
