'use strict';

/**
 * @ngdoc function
 * @name lab7appApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the lab7appApp
 */
angular.module('lab7appApp')
  .controller('TodoCtrl', function ($http) {
    var self = this;
    var myUrl = "http://127.0.0.1:5000/api";
    self.todos = {};

    // Initialize all the todos, get the list of todos. (Read)
    function initTodos() {
      $http.get(myUrl + '/todos').then(
	function successCallback(response) {
          self.todos = response.data;
        }, function errorCallback(response) {}
      );
    };
    this.initTodos = initTodos;

    // Edit a todo by its key (Update)
    function editTodo(key) {
      $http.put(myUrl + '/todos/' + key, self.todos[key]).then(
	function successCallback(response) {},
        function errorCallback(response) {}
      );
    };
    this.editTodo = editTodo;

    // Delete a todo by its key (Delete)
    function deleteTodo(key) {
      $http.delete(myUrl + '/todos/' + key).then(
	function successCallback(response) {
	  delete self.todos[key];
	},
        function errorCallback(response) {}
      );
    };
    this.deleteTodo = deleteTodo;

    // Create a todo (Create)
    function createTodo(key, value) {
      var data = {'task': value}
      $http.post(myUrl + '/todos', data).then(
        function successCallback(response) {
          self.initTodos();
        },
        function errorCallback(response) {}
      );
    };
    this.createTodo = createTodo;

    this.initTodos();
  });