app.factory('product1Factory', function($http,$location,$route){
  var factory = {}

  factory.getProducts = function(callback){
    $http.get('/getproducts').then(function(output){
      products = output.data
      callback(products)
    })
  }

  factory.create = function(product){
    $http.post('/create', product).then(function(output){
      if(output.data){
        $route.reload()
      }
    })
  }

  factory.delete = function(cb){
      $http.post('/product1/delete').then(function(returned_data){
          cb(returned_data.data)
      })
    }

  return factory
})

//<----------------------product2Factory ----------------------->

app.factory('product2Factory', function($http,$location,$route){
  var factory = {}

  factory.getProducts = function(callback){
    $http.get('/getproducts2').then(function(output){
      products = output.data
      callback(products)
    })
  }

  factory.create = function(product){
      $http.post('/create2', product).then(function(output){
        if(output.data){
          $route.reload()
        }
      })
  }

  factory.delete = function(cb){
    $http.post('/product2/delete').then(function(returned_data){
        cb(returned_data.data)
    })
  }

  return factory
})

//<----------------------product3Factory ----------------------->

app.factory('product3Factory', function($http,$location,$route){
  var factory = {}

  factory.getProducts = function(callback){
    $http.get('/getproducts3').then(function(output){
      products = output.data
      callback(products)
    })
  }

  factory.delete = function(cb){
    $http.post('/product3/delete').then(function(returned_data){
        cb(returned_data.data)
    })
  }

  factory.create = function(product){
      $http.post('/create3', product).then(function(output){
        if(output.data){
          $route.reload()
        }
      })
  }

  return factory
})
