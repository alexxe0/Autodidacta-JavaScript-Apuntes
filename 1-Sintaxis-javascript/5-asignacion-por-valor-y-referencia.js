//Cuando asignamos un valor a una variable en Javascript,
//el tipo de asignación depende del tipo de valor que estamos asignando.

// asignacion por valor - primitivos

let a = 20;
let b = a;
b = "hola";
console.log(a); // 20 => respeta el valor que estaba desde el principio
console.log(b); // hola => se modifica la variable b

//asignacion por referencia - compuestos

let arrayA = [1, 2, 3, 4];
let arrayB = arrayA;
console.log(arrayB);
arrayB.push("5");
console.log(arrayA); //[1, 2, 3, 4 , '5']
console.log(arrayB); //[1, 2, 3, 4 , '5']

//Javascript utiliza asignación por valor para los datos primitivos (strings, números, booleanos, etc) y asignación por referencia para complejos (clases, funciones, arreglos, colecciones, objetos, etc).
