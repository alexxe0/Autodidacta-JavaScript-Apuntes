// var: es la forma de declarar una variable en ES5.
// let: es una nueva palabra clave de ES6.
// const: también es nuevo en ES6. Un const es una variable que no se podrá cambiar.

//1-UNA VARIABLE O CONSTANTES : SE UTILIZA PARA ALMACENAR VALORES
var nombre = "Alexxe"; //tiene un valor , y puede cambiar
var nombre = "ghost"; // cambia el valor de la primera variable
console.log(nombre);

//si se cambia a let : permite declarar variables
//pero limitando su alcance
let nombre = "alexxe";
let nombre = "ghost";
console.log(nombre); //error

//solo acepta una variable unica :
let nombre = "alexxe";
let nombre1 = "ghost";
console.log(nombre);
console.log(nombre1);

// var con numeros :
var x = 6;
var y = 4;
var suma = x + y;
console.log(suma); //10

//otro ejemplo
var x = 6 + 4;
console.log(x); //10

//para concatenar ; unir :
var miNombre = "Alex";
var miApellido = "Calatayud";
console.log(miNombre + " " + miApellido); // Alex Calatayud

//otro tipo de concatenacion :

var nombre = "Alex";
var apellido = "Calatayud";
var años = 18;
var datos = `mi nombre es ${nombre} , mi apellido es ${apellido} y tengo ${años} años`;
console.log(datos); // mi nombre es Alex , mi apellido es Calatayud y tengo 18 años

//2-CONSTANTES: GENERALMENTE SE UTILIZAN PARA TENER VALORES FIJOS

const PI = 3.14;
const PI = 3.13;
console.log(PI); // error
