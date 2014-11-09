// Javascript de los controladores de la aplicacion

(function() {
  'use strict';

  // Dependencias de uso
  angular.module('blog.controllers', ['blog.services']);

  // Controlador para obtener la lista de todos los post
  function PostListCtrl(Post) {
    this.posts = Post.query();
  }

  // Controlador para obtener los detalles de un post
  // $routeParams nos da los parametros del navegador
  function PostDetailCtrl($routeParams, Post, Comment, User) {
    this.post = {};
    this.comments = {};
    this.user = {};
    var self = this; // referencia a la funcion

    // Como AJAX es asincrono, se hace una funcion de callback
    // para que al recuperar el post, recupere el usuario.
    // El Callback se hace con $promise
    Post.query({id: $routeParams.postId})
      .$promise.then(
        function(data) {
          self.post = data;
          self.user = User.query({id: self.post.userId});
        },
        function(error) {
          console.log(error);
        }
      );
    this.comments = Comment.query({id: $routeParams.postId});
  }

  function PostCreateCtrl(Post) {
    var self = this;
    this.create = function() {
      Post.save(self.post);
    };
  }

  angular.module('blog.controllers')
  .controller('PostListCtrl', PostListCtrl)
  .controller('PostDetailCtrl', PostDetailCtrl)
  .controller('PostCreateCtrl', PostCreateCtrl);

  /*
  Se podria poner todo en una linea al principio:
  angular.module('blog.controllers',
    ['blog.services'])
    .controller('PostListCtrl', PostListCtrl)
    .controller('PostDetailCtrl', PostDetailCtrl)
    .controller('PostCreateCtrl', PostCreateCtrl);


  */

})();
