<h1 align = “center”> Code Challenge </h1>

<h2> Code challenge realizado para la cuarta semana de LaunchX</h2>
<h2> Contenido: <h2/>

| N° | Requerimiento |
| ------------- |:-------------:| 
|1|Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.|
|2|Habilitar un endpoint para consultar los emails de todos los estudiantes dependiendo el valor que tengan en haveCertification.|
|3|Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a un numero especificado por el usuario.|
 
 
Dependencias y Dependencias de desarrollo:
| Dependencia | Función |
| ------------- |:-------------:| 
|Express|Habilitar un servidor|
 
| Dependencia de desarrollo | Función |
| ------------- |:-------------:| 
|Jest|Realizar pruebas de unidad|
|eslint|Revisar calidad de escritura|

Explicación de la solución:

<h3>1.-Creamos la clase Reader </h3>

![Reader](https://user-images.githubusercontent.com/73314870/165849844-322c782a-b1b0-48ac-be05-5965e0453a63.PNG)

La clase cuenta con una función llamada readJsonFile, la cual recibe el nombre de un archivo .json
rawData  lee el archivo json y posteriormente guardamos los datos en formato JSON en visualPartnersData.

<h3>2.-Creamos la clase Service </h3>
 
![Services](https://user-images.githubusercontent.com/73314870/165850356-bca9e33a-5cc2-438b-96c2-554f26a2a51f.PNG)

Esta clase necesita de la importación de la clase **Reader** y cuenta con 3 metodos para la solución de los requerimentos.

- La función **showStudents** recibe el nombre del archivo que contiene la base de datos
 
  - __studentsInVisualPartners__ manda a llamar al metodo readJsonFile de Reader, enviando el nombre del archivo.
 
  - Finalmente regresa todos los datos que contiene nuestro archivo JSON
 
 
- La función **getStudentWithCertification** recibe dos parámetros, el nombre del archivo y la condición solicitada
 
  - La condición solicitada puede ser __true__ o __false__
 
  - Dependiendo la condición, con filtramos a todos los estudiantes que cumplan con dicha condición en la carácteristica **haveCertification**
 
  - Finalmente **emailStudents** crea una nueva lista con los emails de todos los estudiantes encontrados en el punto anterior.
 
- La función **consultCredits** de igual forma recibe dos parámetros, el nombre del archivo y un valor el cual es el numero de créditos con el cual se filtran a los estudiantes que lo superen.
  - De igual forma que en el requerimiento anterior filtramos a todos los estudiantes que tengan mayor cantidad de creditos que los indicados en la condición
  - Guardamos los datos de cada uno de los estudiantes que cumplan la condición studentsNames
 

 
Explica tu API: cómo consultarla, qué formato va a responder, incluye ejemplos etc.
