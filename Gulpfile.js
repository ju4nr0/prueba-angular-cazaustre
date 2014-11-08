// Para jshint
'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;

// Servidor web de desarrollo
gulp.task('server', function() {
    connect.server({
        root: './app',
        // Con esta direccion, y al poner liverload = true, se ven los
        // cambios en tiempo real en cualquier dispositivo de la misma red local.
        hostname: '0.0.0.0',
        port: 8080,
        livereload: true,
        middleware: function(connect, opt) {
          return [ historyApiFallback ];
        }
    });
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
});

/*
  La tarea css toma el archivo
  app/sytlesheets/main.styl y preprocesa su contenido a
  css en el fichero app/stylesheets/main.css , usando la
  librería nib que añade de forma automática las propiedades css
  para Firefox, Internet Explorer y Webkit que se nos olviden.
*/
gulp.task('css', function() {
    gulp.src('./app/stylesheets/main.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./app/stylesheets'))
    .pipe(connect.reload());
});
// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
  gulp.src('./app/**/*.html')
  .pipe(connect.reload());
});

// Inyecta ficheros CSS y JS que hayamos creado en el index.html
gulp.task('inject', function() {
  var files = gulp.src(['./app/stylesheets/**/*.css','./app/scripts/**/*.js']);
  return gulp.src('index.html', {cwd: './app'})
  .pipe(inject(files, {read: false, ignorePath: '/app'}))
  .pipe(gulp.dest('./app'));
});

// Inyecta librerias instaladas con Bower
gulp.task('bower', function() {
  gulp.src('./app/index.html')
  .pipe(wiredep({directory: './app/lib'}))
  .pipe(gulp.dest('./app'));
});

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/stylesheets/**/*.styl'], ['css', 'inject']);
  gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
  gulp.watch(['./app/bower.json'], ['bower']);
});

// Tareas que se ejecutan al arrancar Gulp
gulp.task('default', ['server', 'inject', 'bower', 'watch']);
