angular.module('mos')

.controller('mos-ctrl', function($scope, $http){
  $scope.title = 'Mobile Order System';
  $scope.titleShort = 'MOS';

  $scope.currentPath = "Mobile Order System";
  $scope.isHome = true;

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
    { name: 'Hot Drinks', id: 1, image: 'image.img', items: [
                                                        { name: 'Hot Drinks 1', id: 1, price: 11.1, available: true },
                                                        { name: 'Hot Drinks 2', id: 2, price: 22.2, available: true },
                                                        { name: 'Hot Drinks 3', id: 3, price: 33.3,  available: true }]
  },{ name: 'Iced Drinks', id: 2, image: 'image.img', items: [
                                                        { name: 'Iced Drinks 1', id: 1, price: 11.1, available: true },
                                                        { name: 'Iced Drinks 2', id: 2, price: 22.2, available: true },
                                                        { name: 'Iced Drinks 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Water', id: 3, image: 'image.img', items: [
                                                  { name: 'Water 1', id: 1, price: 11.1, available: true },
                                                  { name: 'Water 2', id: 2, price: 22.2, available: true },
                                                  { name: 'Water 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Draught Beer', id: 4, image: 'image.img', items: [
                                                 { name: 'Draught Beer 1', id: 1, price: 11.1, available: true },
                                                 { name: 'Draught Beer 2', id: 2, price: 22.2, available: true },
                                                 { name: 'Draught Beer 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Bottled Beer', id: 5, image: 'image.img', items: [
                                                 { name: 'Bottled Beer 1', id: 1, price: 11.1, available: true },
                                                 { name: 'Bottled Beer 2', id: 2, price: 22.2, available: true },
                                                 { name: 'Bottled Beer 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Wine', id: 6, image: 'image.img', items: [
                                                 { name: 'Wine 1', id: 1, price: 11.1, available: true },
                                                 { name: 'Wine 2', id: 2, price: 22.2, available: true },
                                                 { name: 'Wine 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Brandy', id: 7, image: 'image.img', items: [
                                                   { name: 'Brandy 1', id: 1, price: 11.1, available: true },
                                                   { name: 'Brandy 2', id: 2, price: 22.2, available: true },
                                                   { name: 'Brandy 3', id: 3, price: 33.3, available: true }]
  },{ name: 'Liqueur', id: 8, image: 'image.img', items: [
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
        image: d.image
      });
    });

    return categories;
  }

})

.controller('home-ctrl', function($scope){
  $scope.setCurrentPath("Home");
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
