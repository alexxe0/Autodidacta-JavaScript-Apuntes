//Un array es un conjuntos de elementos:
//En JavaScript los arrays o matrices son contenedores de almacenamiento para colecciones de datos.
//Por ejemplo si queremos almacenar todos los nombres de los alumnos en una sola variable,
//debemos usar un array.
const mes1 = "enero";
const mes2 = "febrero";
const mes3 = "marzo";

// para ahorrarnos tiempos se crearon los arrays :
const meses = ["enero", "febrero", "marzo"];

//para llamar un mes especificado es: con su pocion : 0 , 1 , 2 ,
console.log(meses[2]); // marzo

//OTRO EJEMPLO:
const seleccion = 1;
console.log(meses[seleccion]); // febrero

//otro ejemplo:
meses[4] = "mayo";
console.log(meses[4]); // mayo

//undefined :
console.log(meses[13]); //undefined

//calcular el largo:
const cantMeses = meses.length;
console.log(cantMeses); // 5

//cosas surtidas:
const cosasSurtidas = ["compu", 123, false, { edad: "75 años " }];
console.log(cosasSurtidas); //['compu', 123, false, {…}]
