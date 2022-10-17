const nombre = document.getElementById("nombre");
const pass = document.getElementById("pass");
const tel = document.getElementById("tel");
const hobbies = document.getElementsByName("hobbies");
const nacionalidad = document.getElementsByName("nacionalidad");
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
  //Al escuchar el evento submit, detenemos el envio por defecto del formulario.
  evento.preventDefault();

  let listaHobbies = [];

  hobbies.forEach((hobbie) => {
    if (hobbie.checked) {
      listaHobbies.push(hobbie.id);
    }
  });

  let pais;

  nacionalidad.forEach((nacio) => {
    if (nacio.checked) {
      pais = nacio.id;
    }
  });

  console.log(
    normalizar(nombre.value, pass.value, tel.value, listaHobbies, pais)
  );
});

function normalizar(nombre, pass, tel, hobbies, nacionalidad) {
  const datosPersona = {
    name: nombre,
    password: pass,
    phone: tel,
    hobbie: hobbies,
    nationality: nacionalidad,
  };
  return datosPersona;
}
