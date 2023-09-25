//Desestructuracion
//Acignacion desestructurante

const persona = {
  nombre: "Toni",
  edad: 45,
  clave: "Ironman",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usaContest = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.343,
      lng: -23.343,
    },
  };
};

//retornaPersona(persona);
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usaContest(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
