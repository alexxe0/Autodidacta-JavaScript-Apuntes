//TIPOS DE DATOS: STRING

//Strings: las “strings” son bloques de texto, siempre se definen entre comillas (simples o dobles).
//Cualquier caracter que se escriba entre las comillas es una cadena o string.

var tipo;
tipo = "Alex";
console.log(tipo); //Alex

//otro ejemplo:
var tipo;
tipo = "Alex";
console.log(typeof tipo); //typeof : tipo de = Alex => string :
//muestra que tipo de valor es

//con numeros;
//Numbers: los números NO se envuelven en comillas. Pueden ser negativos. JavaScript tiene una limitación para el tamaño del número:
//+/- 9.007.199.254.740.991, pero es muy raro que superemos esa limitación.

var num;
num = 10;
console.log(typeof num); //type : number

//con boleeanos:
//Boolean: vienen de la lógica de Boole que hace referencia al núcleo de las computadoras:
//el lenguaje binario “0 y 1”. En JavaScript usamos booleanos para significar verdadero o falso: true o false.

var valor;
valor = true;
console.log(typeof valor); //type : boolean
