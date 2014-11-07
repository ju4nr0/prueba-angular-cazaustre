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
permite un desarrollo ágil de nuestros proyectos. Puedes ver que propiedades añadir en la página web de su documentación: http://www.jshint.com/docs/options/:
