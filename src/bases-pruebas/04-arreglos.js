//arreglo en JS
//const arreglo = new Array();
const arreglo = [1, 2, 3, 4];

let arregloDos = [...arreglo];

arregloDos.push(5);

const arregloTres = arregloDos.map(function (numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arregloDos);
console.log(arregloTres);
