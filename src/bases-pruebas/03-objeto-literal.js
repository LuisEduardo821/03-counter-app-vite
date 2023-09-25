const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 12334,
    lat: 45.3434,
    lng: 23.233,
  },
};
console.log(persona);

const personaDos = { ...persona };

personaDos.nombre = "Peter";

console.log(personaDos);
console.log(persona);
