angular.module('mos')

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.

    state('/home', {
      url: '/home',
      templateUrl: 'webPages/homeMenu.html'
    })

    .state('/categories', {
      url: '/categories',
      templateUrl: 'webPages/categories.html'
    })

    .state('/complaints',{
      url: '/complaints',
      templateUrl: 'webPages/complaints.html'
    })

    .state('/complaints/complaint=complaintId', {
      url: '/complaints/complaint=:complaintId',
      templateUrl: 'webPages/complaint.html'
    })

    .state('/categories/category=categoryId', {
      url: '/categories/category=:categoryId',
      templateUrl: 'webPages/category.html'
    })

    .state('/item', {
      url: '/categories/category=:categoryId/item=:itemId',
      templateUrl: 'webPages/item.html'
    });

  $urlRouterProvider.otherwise('/home');
});
