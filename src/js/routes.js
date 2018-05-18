angular.module('Seminar').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

  'use strict';  

  // Application routes
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'templates/dashboard.html'
    })
    .state('registerCourse', {
      url: '/register-course',
      controller: "RegisterCourseController",
      templateUrl: 'templates/register-course.html'
    })
    ;
    // For unmatched routes
    $urlRouterProvider.otherwise('/');
  }
]);
