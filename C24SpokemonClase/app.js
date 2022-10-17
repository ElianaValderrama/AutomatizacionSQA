const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const formulario = document.forms[0];
const inputPokemon = document.querySelector("form input");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  consultarApi(inputPokemon.value.trim().toLowerCase());
});

function consultarApi(pokemonIngresado) {
  fetch(`${apiUrl}${pokemonIngresado}`)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data);
      const tarjeta = document.querySelector(".card");
      tarjeta.classList.remove("skeleton");
      renderizarPokemon(data.name, data.sprites.front_default);
    });
}

function renderizarPokemon(nombre, imagen) {
  const nodoNombre = document.querySelector(".card h2");
  const nodoImagen = document.querySelector(".card img");

  nodoNombre.innerText = nombre;
  nodoImagen.setAttribute("src", imagen);
}
