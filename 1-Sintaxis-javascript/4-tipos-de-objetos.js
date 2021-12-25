//En JavaScript, un objeto es un entidad con propiedades y tipos. Por ejemplo: una taza es un objeto con propiedades.
//Tiene un color, un diseño, un peso, un material del que está hecha, etc.
//Los objetos usan un concepto llamado pares de clave:valor. La clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave.
//Se separan por una coma. Las claves deben ser únicas. Los valores no están obligados a ser distintos.

//TERMILOGÍA:
//Clase: define las caracteristicas del objeto
//Objeto: una instancia de una clase.
//Propiedad: una caracteristicas del objeto , como el color.
//Metodo: una capacity del Objeto , como caminar.
//Constructor: es un metodo llamado en el momento de la creacion de instancia

let persona = {
  nombre: "Alex",
  apellido: "Calatayud",
  email: "alexcalatayud2@gmail.com",
  edad: 18,
};
console.log(persona); //{nombre: 'Alex', apellido: 'Calatayud', email: 'alexcalatayud2@gmail.com', edad: 18}

//para acceder a un valor individual:
console.log(persona.nombre); //Alex

//otro ejemplo:
const persona1 = {
  dni: 44877389,
  nombre: "Alex Calatayud",
  estaVivo: true,
  conocimientos: ["react", "node"],
  estudios: {
    secundario: "en proceso",
    terceario: "-",
    universitario: "-",
  },
  amigos: [
    { nombre: "Fernando", apellido: "zotar" },
    { nombre: "Alenxander", apellido: "Ajalla" },
  ],
};

console.log(persona1.estudios); //todo el objeto
console.log(persona1.estudios.secundario); //en proceso

//otra forma de consologuear:
console.log(persona1["dni"]); //dni

//acceder a los valores por medio de corchetes y variables;

const keyNombre = "nombre";
console.log(persona1[keyNombre]); //Alex Calatayud

//asignar valores a las propiedades del objeto:

//PRIMERA FORMA:

let computador = {};
computador.procesador = "intel";
computador.ram = 32;
computador.marca = "msi";
computador.boar = "asus";

console.log(computador.marca);

//SEGUNDA FORMA

computador2 = { procesador: "intel i7", ram: 32, marca: "msi", board: "asus" };
console.log(computador2.procesador); //intel i7

//otra forma

const nuevoUsuario = {
  esNuevo: true,
};

const deporte = "basquet";
const keyEdad = "edad";

(nuevoUsuario.nombre = "manu"), (nuevoUsuario["deporte"] = deporte);
nuevoUsuario[keyEdad] = 45;

console.log(nuevoUsuario);
