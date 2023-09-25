//desestructuracion de arreglos

const personajes = ["Goku", "Vegueta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const usaState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const arr = usaState("Goku");
console.log(arr);
arr[1]();

const usaState1 = (valor) => {
  return [
    valor,
    () => {
      console.log(`hola, ${nombre}`);
    },
  ];
};

const [nombre, setNombre] = usaState1("Juan Perez");
console.log(nombre);
setNombre();
