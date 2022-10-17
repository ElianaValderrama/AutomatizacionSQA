function writeHTML(title, text) {
  const body = document.getElementById("body");
  const template = `
    <h1>Hola a todos! Este es el titulo: ${title}</h1>
    <p>WOW!!!! ${text}</p>
  `;
  body.innerHTML += template;
}

writeHTML(
  "ESTAMOS INSERTANDO ELEMENTOS HTML A TRAVES DE JAVASCRIPT 😎",
  "CUANTO DINAMISMO!! 😉"
);

const boldButton = document.getElementById("boldButton");
const removeBold = document.getElementById("removeBold");
const text = document.getElementById("text");

boldButton.addEventListener("click", function () {
  // if (text.classList.contains("bold")) {
  //   text.classList.remove("bold");
  // } else {
  //   text.classList.add("bold");
  // }
  text.classList.toggle("bold");
});

// removeBold.addEventListener("click", function () {
//   text.classList.remove("bold");
// });
