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

<h3>2.-Creamos la clase Services </h3>
![Services](https://user-images.githubusercontent.com/73314870/165850356-bca9e33a-5cc2-438b-96c2-554f26a2a51f.PNG)

Explica tu API: cómo consultarla, qué formato va a responder, incluye ejemplos etc.
