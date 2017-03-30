app.controller('productController',function($scope,$location,product1Factory,product2Factory,product3Factory,$routeParams){

  var product1view = function() {
    if($routeParams.id) {
      product1Factory.getProducts(function(returnedData){
        $scope.products1 = returnedData;
        for(product1 in $scope.products) {
          if ($scope.products1[product1]['_id'] == $routeParams.id) {
            $scope.product1 = $scope.products1[product1]
          }
        }
      })
    }else {
      product1Factory.getProducts(function(data){
        $scope.products1 = data
      })
    }
  }

  var product2view = function() {
    if($routeParams.id) {
      product2Factory.getProducts(function(returnedData){
        $scope.products2 = returnedData;
        for(product2 in $scope.products2) {
          if ($scope.products2[product2]['_id'] == $routeParams.id) {
            $scope.product2 = $scope.products2[product2]
          }
        }
      })
    }else {
      product2Factory.getProducts(function(data){
        $scope.products2 = data
      })
    }
  }

  var product3view = function() {
    if($routeParams.id) {
      product3Factory.getProducts(function(returnedData){
        $scope.products3 = returnedData;
        for(product3 in $scope.products3) {
          if ($scope.products3[product3]['_id'] == $routeParams.id) {
            $scope.product3 = $scope.products3[product3]
          }
        }
      })
    }else {
      product3Factory.getProducts(function(data){
        $scope.products3 = data
      })
    }
  }

    product1view()
    product2view()
    product3view()

    $scope.errors1 = []
    $scope.errors2 = []
    $scope.errors3 = []
    $scope.products1 = []
    $scope.products2 = []
    $scope.products3 = []

    $scope.create1 = function(){
      $scope.errors = []
      if(!$scope.product1 || !$scope.product1.bid){
        $scope.errors1.push('Please put the bidding amount')
      }
      else if($scope.product1.bid == 0){
        $scope.errors1.push('Amount cannot be $0')
      }
      else{
        for(var i =0; i < $scope.products1.length; i++){
          // console.log($scope.product1.bid,"before if data")
          // console.log($scope.products[i].bid,"before if reference")
          if($scope.product1.bid < $scope.products1[i].bid + 1){
            // console.log($scope.product1.bid,"after if data")
            // console.log($scope.products[i].bid,"after if refrence")
            return $scope.errors1.push('Your bid cannot be equal or lower than pre bid brah')
          }
        }
        product1Factory.create($scope.product1)
        $scope.product1 = {}
      }
    }

    $scope.create2 = function(){
      $scope.errors = []
      if(!$scope.product2 || !$scope.product2.bid){
        $scope.errors2.push('Please put the bidding amount')
      }
      else if($scope.product2.bid == 0){
        $scope.errors2.push('Amount cannot be $0')
      }
      else{
        for(var i =0; i < $scope.products2.length; i++){
          // console.log($scope.product1.bid,"before if data")
          // console.log($scope.products[i].bid,"before if reference")
          if($scope.product2.bid < $scope.products2[i].bid + 1){
            // console.log($scope.product1.bid,"after if data")
            // console.log($scope.products[i].bid,"after if refrence")
            return $scope.errors2.push('Your bid cannot be equal or lower than pre bid brah')
          }
        }
        product2Factory.create($scope.product2)
        $scope.product2 = {}
      }
    }

    $scope.create3 = function(){
      $scope.errors = []
      if(!$scope.product3 || !$scope.product3.bid){
        $scope.errors3.push('Please put the bidding amount')
      }
      else if($scope.product3.bid == 0){
        $scope.errors3.push('Amount cannot be $0')
      }
      else{
        for(var i =0; i < $scope.products3.length; i++){
          // console.log($scope.product1.bid,"before if data")
          // console.log($scope.products[i].bid,"before if reference")
          if($scope.product3.bid < $scope.products3[i].bid + 1){
            // console.log($scope.product1.bid,"after if data")
            // console.log($scope.products[i].bid,"after if refrence")
            return $scope.errors3.push('Your bid cannot be equal or lower than pre bid brah')
          }
        }
        product3Factory.create($scope.product3)
        $scope.product3 = {}
      }
    }
    $scope.end_bid = function(){
        if($scope.products1.length < 1){
            alert("You didnt bid on Product1")
        }
        else if($scope.products2.length < 1){
            alert("You didnt bid on Product2")
        }
        else if($scope.products3.length < 1){
            alert("You didnt bid on Product3")
        }else{
            $location.url('/results')
        }
    }

    $scope.startBid = function(){
        product1Factory.delete(function(returned_data){
            console.log(returned_data)
        })
        product2Factory.delete(function(returned_data){
            console.log(returned_data)
        })
        product3Factory.delete(function(returned_data){
            console.log(returned_data)
        })
        $location.url('/bids')
      }
})
