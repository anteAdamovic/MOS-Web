angular.module('mos')

.directive('homeItem', function(){
  return {
    resctrict: 'E',
    scope: false,
    template: '<ion-item class="home-list-item"><a class="home-list-item-link" href="{{url}}"><br><i class="{{icon}} home-list-item-icon"></i> {{name}} </a></ion-item>',
    link: function(scope, element, attrs){
      scope.url = attrs.url;
      scope.name = attrs.name;
      scope.icon = attrs.icon;
    }
  }
})

.controller('home-ctrl', function($scope, $stateParams){
  $scope.setCurrentPath("Home");

  if(!$stateParams.cId)
    console.log('No client id!');
  else {
    console.log('Client id: ' + $stateParams.cId);
  }

  if(!$stateParams.tId)
    console.log('No table id!');
  else {
    console.log('Table id: ' + $stateParams.tId);
  }

  $scope.cId = $stateParams.cId;
  $scope.tId = $stateParams.tId;



  $scope.homeItems = [{
    name: 'Browse',
    url: '#/browseCategories',
    icon: 'fa fa-hand-o-right fa-1'
  },{
    name: 'Complaints',
    url: '#/complaints',
    icon: 'fa fa-book fa-1'
  },{
    name: 'Settings',
    url: '#/settings',
    icon: 'fa fa-cog fa-1'
  },{
    name: 'About',
    url: '#/about',
    icon: 'fa fa-info fa-1'
  }]
});
