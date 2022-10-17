const imagenes = document.querySelectorAll("img");
//const urlImagenes = [];

imagenes.forEach((imagen, index) => {
  const url = prompt(`Ingresa la URL para la imagen ${index + 1}`);
  //urlImagenes.push(url);
  // const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
  // nodoImagen.setAttribute("src", url);
  imagen.setAttribute("src", url);
  console.log(url);
});

// urlImagenes.forEach((url, index) => {
//   const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
//   nodoImagen.setAttribute("src", url);
//   console.log(url);
// });
