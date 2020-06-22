/* eslint-disable no-console */
'use strict';

const autos = [
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A6',
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: 'Rojo',
    transmision: 'automatico',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A3',
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: 'Azul',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico',
  },
];

/* for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
} */


// forEach: recorre todos los elementos de un array, ejemplo un carrito de compra. Sólo accede a los valores. Pudes filtrar pero para eso mejor usar filter().
/* let result = [];
autos.forEach((auto) => {
  if (auto.color === 'Rojo') {
    result.push(auto);
  }
});
console.log(result); */


// map: es como el foreach pero retorna un array nuevo, no sólo accede a los valores.
/* let result = autos.map((auto) => auto);
console.log(result); */


// filter: crea un array con todos los resultados que cumplan la condición expuesta.
/* let result = autos.filter((auto) => auto.marca === 'BMW');
console.log(result);
 */


// find: retorna un array con el primer elemento que encuentre con esa condición
/* let result = autos.find(auto => auto.marca === 'BMW');
console.log(result); */


// reduce: toma todos los valores del array y retorna un valor único. Dos valores, valor anterior y valor actual, y valor inicial (acumulador)
let result = autos.reduce((total, auto) => total + auto.precio, 0);
console.log(result);





// some
