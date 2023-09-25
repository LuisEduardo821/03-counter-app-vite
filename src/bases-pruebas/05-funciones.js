//funciones en JS
//funcion que se podria sobreescribir por error
function Saludar(nombre) {
  return `Hola, ${nombre}`;
}

//funcion que no se puede sobreescribir
const Saludar2 = function (nombre) {
  return `Hola, ${nombre}`;
};

//funcion flecha
const Saludar3 = (nombre) => {
  return `Hola, ${nombre}`;
};

//funcion corta sin return explicito
const Saludar4 = (nombre) => `Hola, ${nombre}`;
const Saludar5 = () => `Hola mundo`;

console.log(Saludar("Luis"));
console.log(Saludar2);
console.log(Saludar2("Luis Eduardo"));
console.log(Saludar3);
console.log(Saludar3("Luis Eduardo"));
console.log(Saludar4("Juan Perez"));
console.log(Saludar5());

//retornar un objeto de forma implicita

const getUser = () => ({
  uid: "ABC123",
  userName: "juan123",
});

console.log(getUser());

//retornar de forma explicita
const getUser2 = () => {
  return {
    uid: "ABC123",
    userName: "juan123",
  };
};
console.log(getUser2());

//Tarea
//1.Convertir a funcion flecha
//2.Returnar un objeto implicito
//3.Realizar pruebas

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC345",
    username: nombre,
  };
}

const usuario = getUsuarioActivo("Fernando");
console.log(usuario);
//Resultado

const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC345",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo2("Francisco");
console.log(usuarioActivo);
