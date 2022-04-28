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

La clase cuenta con una función llamada **readJsonFile**, la cual recibe el nombre de un archivo .json
**rawData**  lee el archivo json y posteriormente guardamos los datos en formato JSON en **visualPartnersData**.

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
  - Guardamos los datos de cada uno de los estudiantes que cumplan la condición **studentsNames**
 
<h3>3.- Creamos un controlador llamado ServiceController </h3>
 
 ![ServiceController](https://user-images.githubusercontent.com/73314870/165855348-14f92c54-6748-4651-aeaa-7c3da3ac06d7.PNG)

 ServiceController es el encargado de manejar a Service.js a través de lo solicitado en nuestro servidor.
 
 - **showStudents** recibe el nombre del archivo JSON desde el archivo **Server.js** y le regresa todos los datos de dicho archivo
 
 - **getEmails**  recibe el nombre del archivo JSON y la condición requerida para validar a los estudiantes y obtener su email y regresa una lista con los emails
 
 - **getCredits** Realiza lo mismo que getEmails pero en este caso para el numero de créditos.

 <h3>4.- Finalmente creamos Server.js </3>
 
 - Primero levantamos el servidor mediante Express e importamos a nuestro controlador
 
 ![Server1](https://user-images.githubusercontent.com/73314870/165856407-715667d8-f429-4b8d-8e02-830262d0efb4.PNG)

- Mandamos a llamar los métodos de nuestro controlador para cada uno de los casos y recuperamos las condiciones necesarias para cada caso con los query params
 
 ![Server2](https://user-images.githubusercontent.com/73314870/165856614-15ca2008-788d-4f54-ab7a-3656ccef4d15.PNG)

 - En el caso del segundo requerimiento comprobamos la condición recibida y la convertimos a un valor boleano para poder operar de manera adecuada
 - En el caso del tercer requerimiento convertimos el valor recibido a un valor numérico debido a que se lee como string
 
 
 
 <h2> Consultando la API </h2>
 
 | Endopoint  | Request | Response|
| ------------- |:-------------:| -----:|
|http://localhost:3000/v1/codechallenge/AllStudents|http://localhost:3000/v1/codechallenge/AllStudents|Lista con todos los estudiantes y sus datos [1]
|http://localhost:3000/v1/codechallenge/Emails-With-Certification/:condition|http://localhost:3000/v1/codechallenge/Emails-With-Certification/true|Lista los emails de estudiantes que tienen certificación [2]|
|http://localhost:3000/v1/codechallenge/Emails-With-Certification/:condition|http://localhost:3000/v1/codechallenge/Emails-With-Certification/false|Lista los emails de estudiantes que no tienen certificación [3]|
|http://localhost:3000/v1/codechallenge/Students-With-More-Credits-Than/:condition|http://localhost:3000/v1/codechallenge/Students-With-More-Credits-Than/500|Lista con todos los estudiantes que tienen mas de 500 créditos [4]|
 
Respuestas del API:
- [1] Lista con todos los estudiantes y sus datos ![AllStudentsResponse](https://user-images.githubusercontent.com/73314870/165858196-d4e57957-f3db-4fb7-bc79-6c532c6ea0f2.PNG)

- [2] Lista los emails de estudiantes que tienen certificación ![True](https://user-images.githubusercontent.com/73314870/165858247-1313913d-9796-4487-bd25-b9d9de290156.PNG)

- [3] Lista los emails de estudiantes que no tienen certificación ![False](https://user-images.githubusercontent.com/73314870/165858276-354250be-4511-4154-9024-c5d63c5640c2.PNG)

- [4] Lista con todos los estudiantes que tienen mas de 500 créditos ![m500](https://user-images.githubusercontent.com/73314870/165858292-c3a352d4-4aba-4454-8e61-7ac32f8378f1.PNG)

