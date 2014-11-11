Proyecto de prueba del libro de Desarrolo Web Agil con Angular de Carlos Azaustre.

Estructura del proyecto:

- 'prueba-angular-cazaustre': es la carpeta raiz de nuestro proyecto web y tenemos 2
subdirectorios por debajo de él.

- 'app': contiene todo el código fuente completo de nuestra aplicación
web, sin minificar ni optimizar, solamente el código de desarrollo. Y
en dist tendremos todo el proyecto minificado y optimizado para
ser desplegado en producción.

- 'package.json': contiene la información de nuestro proyecto así
como el nombre y las versiones de las dependencias que utilizaremos
para desarrollo. Puedes ver que campos añadir en la documentación de la siguiente página web:
https://www.npmjs.org/doc/files/package.json.html

- 'bower.json': es similar a package.json para manejar las
dependencias que usaremos en el Frontend, como pueden ser las
librerías de Angular, frameworks CSS, etc...

- '.gitignore': nos sirve para indicar a Git qué archivos no
queremos que se suban al repositorio (por ejemplo, claves, ficheros
de configuraciones, etc.)

- '.editorconfig': nos permite configurar nuestro editor de texto
para que todos los desarrolladores del mismo proyecto, que lo
utilicen, tengan en el código el mismo espaciado, tabulación, etc...

- '.jshintrc': es un fichero JSON que nos permite comprobar
errores tanto de código como de sintaxis, uso de variables, o estilo en
nuestro código JavaScript según guardamos los archivos. Combinado
con un gestor de tareas, como Gulp, que usaremos más adelante, nos
permite un desarrollo ágil de nuestros proyectos. Puedes ver que propiedades añadir en la página web de su documentación: http://www.jshint.com/docs/options/


GULP:

- $ npm install --save-dev gulp
- $ npm install --save-dev gulp-connect
- $ npm install --save-dev connect-history-api-fallback
- $ npm install --save-dev gulp-jshint
- $ npm install --save-dev gulp-useref
- $ npm install --save-dev gulp-if
- $ npm install --save-dev gulp-uglify
- $ npm install --save-dev gulp-minify-css
- $ npm install --save-dev gulp-stylus
- $ npm install --save-dev nib

Con '--save' se guardan dependencias en el package.json, y con '-dev' indica el objeto donde guardarlas.

Estas dependencias nos servirán para automatizar la correción de código de JavaScript, el minificado del css, la creación de un servidor web de desarrollo para poder ver los cambios que hagamos en el código en tiempo real en el navegador, etc.



ANGULAR:

Lo ideal es separar cada funcionalidad en modulos.

- Las funcionalidades se colocan en app/scripts. Aquí se colocan los servicios, controladores y directivas.

- En app/lib están las librerias utilizadas por Bower.

- En app/views están los HTMl para las vistas de la aplicacion.

- angular-route nos permite hacer uso de la directiva $routeProvider para poder manejar URLs desde el navegador y mostrar una página u otra al usuario.

- angular-resource por su parte, nos deja emplear la directiva $resource que nos permite manejar peticiones AJAX a recursos REST de una manera más sencilla y con una sintaxis más limpia, en lugar de usar las directivas $http.get o $http.post.



* Directivas en Angular:

- ng-app : es la directiva que indica que es una aplicacion Angular
- ng-controller : asocia un controlador (que puede llevar alias), a una parte del HTML. Su scope es el elmento (section, div, etc) donde se define la directiva.
- ng-show="propiedad" : muestra un elemento si esa propiedad es verdadera
- ng-hide="propiedad" : oculta un elemento si esa propiedad es verdadera
- ng-repeat="elemento in lista" : itera sobre cada elemento de un array
- ng-src="{{ exp }}" : para evaluar una expresion que se toma como src de una imagen
- ng-click : para definir el valor de una variable al hacer click en un enlace o boton
- ng-class="{clase:condicion}" : para definir una clase css cuando se cumpla la condicion

* Módulos: 

- var app = angular.module('ng-app', ['dependencias']);


* Controladores:

- app.controller('nombre', function(){
	  --- funcionalidad del controlador ---
});


* Pipes

En una expresion {{ }} se puede usar una pipe para mandar la expresion evaluada a un filtro.
Ejemplo: {{product.price | currency}}

Sintaxis: {{data | filter:options}}
Ejmplo: {{'1388123412323' | date:'MM/dd/yyyy @ h:mma'}}
Limitar un bucle: ng-repeat="product in store.products | limitTo:3"
Ordenar un bucle: ng-repeat="product in store.products | orderBy:'-price'"