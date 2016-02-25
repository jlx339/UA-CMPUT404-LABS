'use strict';

/**
 * @ngdoc overview
 * @name lab7appApp
 * @description
 * # lab7appApp
 *
 * Main module of the application.
 */
angular
  .module('lab7appApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
