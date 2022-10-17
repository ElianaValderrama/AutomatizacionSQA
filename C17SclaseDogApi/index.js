const apiUrl = "https://dog.ceo/api/breeds/image/random/";

const btn = document.querySelector("#random");
const imgDog = document.querySelector("#perrito");
const div = document.querySelector(".tarjeta");
const cantidad = document.querySelector("#cantidad");

let endpoint = parseInt(cantidad.value);

function peticion(url, endp) {
  let urlCompleta = url + endp;
  fetch(urlCompleta)
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json();
    })
    .then((datos) => {
      console.log(datos);
      let array = datos.message;
      array.forEach((element) => {
        let nodoImg = document.createElement("img");
        nodoImg.setAttribute("src", element);
        div.appendChild(nodoImg);
      });
      //imgDog.setAttribute("src", datos.message);
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", function () {
  peticion(apiUrl, endpoint);
});
