var app=angular.module('app', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      redirectTo:'/login'
    })
    .when("/login", {
      controller : 'userController',
      templateUrl : './partials/login.html'
    })
    .when("/bids", {
      controller : 'userController',
      templateUrl : './partials/main.html'
    })
    .when("/results", {
      controller : 'userController',
      templateUrl : './partials/result.html'
    })
    .otherwise({
      redirectTo:'/'
    })
})
