angular.module('mos')

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.

    state('/home?cid=cId&tid=tId', {
      url: '/home?cid=:cId&tid=:tId',
      templateUrl: 'views/home/home.html'
    })

    .state('/browseCategories', {
      url: '/browseCategories',
      templateUrl: 'views/browseCategories/browseCategories.html'
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
