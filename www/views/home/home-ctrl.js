angular.module('mos')

.directive('homeItem', function(){
  return {
    resctrict: 'E',
    scope: false,
    template: '<ion-item class="home-list-item"><a class="home-list-link" href="{{url}}"> {{name}} </a></ion-item>',
    link: function(scope, element, attr){
      scope.url = attr.url;
      scope.name = attr.name;
    }
  }
})

.controller('home-ctrl', function($scope){
  $scope.setCurrentPath("Home");

  $scope.homeItems = [{
    name: 'Browse',
    //url: '#/browseCategories'  <-- Needs to be active later on
    url: '#/categories'
  },{
    name: 'Complains',
    url: '#/complaints'
  },{
    name: 'Settings',
    url: '#/settings'
  },{
    name: 'About',
    url: '#/about'
  }]
});
