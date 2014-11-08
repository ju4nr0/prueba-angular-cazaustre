// Javascript principal de la aplicacion

// Todas las funcionalidades se ponen en una funcion
// (closures) para que las variables definidas sean
// locales y al minificar codigo no aparezcan errores

(function() {
  'use strict';
  
  // cargar dependencia de angular. Se indica el nombre
  // de la aplicacion, y de la dependencia a usar.
  // En este caso es la de ngRoute de la libreria angular-route
  // Tambien se cargan los controladores
  angular.module('blog', ['ngRoute', 'blog.controllers']);

  // Crear una función de configuracion para indicar a la aplicacion
  // en que rutas del navegador ponerse a la escucha y cargar las vistas,
  // con la directiva $routeProvider

  function config($locationProvider, $routeProvider) {
    // Esto se hace para que la url no tenga que contener el
    // caracter '#' que angular introduce por defecto
    $locationProvider.html5Mode(true);

    // Se indica, para cada URL que se puede poner en el
    // navegador, la vista parcial, su controlador y el alias
    // del controlador (para invocarlo sin poner antes $scope)
    $routeProvider
      .when('/', {
        templateUrl: 'views/post-list.tpl.html',
        controller: 'PostListCtrl',
        controllerAs: 'postList'
      })
      .when('/post/:postId', {
        templateUrl: 'views/post-detail.tpl.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'postdetail'
      })
      .when('/new', {
        templateUrl: 'views/post-create.tpl.html',
        controller: 'PostCreateCtrl',
        controllerAs: 'postcreate'
      });
  }

  // Asocia la funcion anterior a la aplicacion
  angular.module('blog').config(config);

})()
