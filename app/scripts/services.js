// Servicio para gestionar las llamadas AJAX que se hacen
// al API REST.
//
// Se crea una funcion (factoria) para cada llamada al API.
//
// Estas factorias son recursos: $resources y tienen las funciones
// disponibles: get, query, query(id), save, remove, delete

(function() {
  'use strict';

  angular.module('blog.services', ['ngResource']);

  function Post($resource, BaseUrl) {
    return $resource(BaseUrl + '/posts/:postId', {
      postId: '@_id'
    });
  }

  function Comment($resource, BaseUrl) {
    return $resource(BaseUrl + '/comments/:commentId', {
      commentId: '@_id'
    });
  }

  function User($resource, BaseUrl) {
    return $resource(BaseUrl + '/users/:userId', {
      userId: '@_id'
    });
  }

  // Se asocian las factorias al modulo.
  // Ademas, se crea la constante donde está la API REST
  angular.module('blog.services')
  .constant('BaseUrl', 'http://jsonplaceholder.typicode.com')
  .factory('Post', Post)
  .factory('Comment', Comment)
  .factory('User', User);

})();
