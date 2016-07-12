angular.module('mos')

.controller('mos-ctrl', function($scope, $http){
  $scope.title = 'Mobile Order System';
  $scope.titleShort = 'MOS';

  $scope.currentPath = "Mobile Order System";
  $scope.isHome = true;

  $scope.orderChart = [];

  $scope.addOrderItem = function(item){
    $scope.orderChart.push(item);
  }

  $scope.removeOrderItem = function(item){

  }

  $scope.clearOrderChart = function(){
    $scope.orderChart = [];
  }

  $scope.getOrderChart = function(){
    return $scope.orderChart;
  }

  $scope.setCurrentPath = function(newPath){
    $scope.currentPath = newPath;
    if(newPath == 'Home')
      $scope.isHome = true;
    else
      $scope.isHome = false;
  }

  $scope.goBack = function(){
    history.back();
  }

  $scope.data = [
    { name: 'Hot Drinks', id: 1, icon: 'fa fa-coffee fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Hot Drinks 1', id: 1, price: 11.1, available: true },
      { name: 'Hot Drinks 2', id: 2, price: 22.2, available: true },
      { name: 'Hot Drinks 3', id: 3, price: 33.3,  available: true }]
  },{ name: 'Iced Drinks', id: 2, icon: 'fa fa-coffee fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Iced Drinks 1', id: 1, price: 11.1, available: true },
      { name: 'Iced Drinks 2', id: 2, price: 22.2, available: true },
      { name: 'Iced Drinks 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Water', id: 3, icon: 'fa fa-glass fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Water 1', id: 1, price: 11.1, available: true },
      { name: 'Water 2', id: 2, price: 22.2, available: true },
      { name: 'Water 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Draught Beer', id: 4, icon: 'fa fa-beer fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Draught Beer 1', id: 1, price: 11.1, available: true },
      { name: 'Draught Beer 2', id: 2, price: 22.2, available: true },
      { name: 'Draught Beer 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Bottled Beer', id: 5, icon: 'fa fa-beer fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Bottled Beer 1', id: 1, price: 11.1, available: true },
      { name: 'Bottled Beer 2', id: 2, price: 22.2, available: true },
      { name: 'Bottled Beer 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Wine', id: 6, icon: 'fa fa-glass fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Wine 1', id: 1, price: 11.1, available: true },
      { name: 'Wine 2', id: 2, price: 22.2, available: true },
      { name: 'Wine 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Brandy', id: 7, icon: 'fa fa-glass fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Brandy 1', id: 1, price: 11.1, available: true },
      { name: 'Brandy 2', id: 2, price: 22.2, available: true },
      { name: 'Brandy 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Liqueur', id: 8, icon: 'fa fa-glass fa-2', quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', items: [
      { name: 'Liqueur 1', id: 1, price: 11.1, available: true },
      { name: 'Liqueur 2', id: 2, price: 22.2, available: true },
      { name: 'Liqueur 3', id: 3, price: 33.3, available: true }]
  }];

  // For use during development
  $scope.getItem = function(categoryId, itemId){
    var item = {};
    _.each($scope.data, function(d){
      if(d.id == parseInt(categoryId))
        _.each(d.items, function(i){
          if(i.id == parseInt(itemId))
            item = i;
        });
    });

    return item;
  }

  // For use during development
  $scope.getCategory = function(categoryId){
    var category = {};

    _.each($scope.data, function(d){
      if(d.id == parseInt(categoryId))
        category = d;
    });

    return category;
  }

  // For use during development
  $scope.getCategoryList = function(){
    var categories = [];

    _.each($scope.data, function(d){
      categories.push({
        name: d.name,
        id: d.id,
        icon: d.icon
      });
    });

    return categories;
  }

})

.controller('complaints-ctrl', function($scope, $http){
  $scope.setCurrentPath("Complaints");

  $scope.complaints = [{
    name: 'Long wait time',
    id: 1101312
  },{
    name: 'Bad service',
    id: 1102321
  }];

  $scope.getComplaints = function(){
    $http.get('php/getComplaints.php').then(function(response){
      //$scope.complaints = response.data.d;
    });
  }

  $scope.getComplaints();

  $scope.createComplaint = function() {
    confirm("Are you sure you want to create a complaint ?");
  }
})

.controller('complaint-ctrl', function($scope, $stateParams, $http){
  $scope.complaintId = $stateParams.complaintId;
  $scope.complaint;

  $scope.setCurrentPath('Complaint No.' + $scope.complaintId);

  $scope.getComplaint = function(complaintId){
    $http.get('php/getComplaint.php', { params: { complaintId: complaintId } }).then(function(response){
      //$scope.complaint = response.data.d;
    });
  }
  $scope.getComplaint($scope.complaintId);
})

.controller('category-ctrl', function($scope, $stateParams, $http){
  console.log("category-ctrl params: ");
  console.log($stateParams);
  $scope.categoryId = $stateParams.categoryId;
  $scope.category = $scope.getCategory($scope.categoryId);
  console.log("Category:");
  console.log($scope.category);

  $scope.categoryName = $scope.data[$scope.categoryId-1].name;
  $scope.items = $scope.data[$scope.categoryId-1].items;

  $scope.setCurrentPath($scope.categoryName);

  // Have to use full path during development
  $scope.getItems = function(categoryId){
    $http.get('php/getItems.php',{ params: { categoryId: categoryId } }).then(function(response){
      // Get items from category with categoryId
    });
  }
  $scope.getItems($scope.categoryId);

})

.controller('item-ctrl', function($scope, $stateParams, $http){
  console.log("item-ctrl params: ");
  console.log($stateParams);
  $scope.categoryId = $stateParams.categoryId;
  $scope.categoryName = $scope.data[$scope.categoryId-1].name;
  $scope.itemId = $stateParams.itemId;
  $scope.item = $scope.data[$scope.categoryId].items[$scope.itemId];
  $scope.item = $scope.getItem($scope.categoryId, $scope.itemId);
  console.log("Item:");
  console.log($scope.item);

  $scope.category;
  $scope.item;

  $scope.setCurrentPath($scope.item.name);

  // Have to use full path during deployment
  $scope.getCategory = function(categoryId){
    $http.get('php/getCategory', { params: { categoryId: categoryId } }).then(function(response){
      // Get category with categoryId
      $scope.category = response.data.d;
    });
  }
  $scope.getCategory($scope.categoryId);

  // Have to use full path during development
  $scope.getItemData = function(categoryId, itemId){
    $http.get('php/getItemData',{ params: { categoryId: categoryId, itemId: itemId } }).then(function(response){
      // Get item data for item with itemId from category with categoryId
      $scope.item = response.data.d;
    });
  }
  $scope.getItemData($scope.categoryId, $scope.itemId);
});
