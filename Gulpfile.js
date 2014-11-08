var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    stylus = require('gulp-stylus'),
    nib = require('nib');

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


// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/stylesheets/**/*.styl'], ['css']);
});

gulp.task('default', ['server', 'watch']);
