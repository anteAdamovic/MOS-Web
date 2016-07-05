angular.module('mos')

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.

    state('/home', {
      url: '/home',
      templateUrl: 'webPages/homeMenu.html'
    })

    .state('/home/categories', {
      url: '/categories',
      templateUrl: 'webPages/categories.html'
    })

    .state('/home/categories/categoryItems', {
      url: '/categories/category=:id',
      templateUrl: 'webPages/category.html'
    });

  $urlRouterProvider.otherwise('/home');
});
