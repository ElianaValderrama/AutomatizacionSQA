let i = 0;
const cantidadBtn = document.getElementById("cantidadBtn");

// cantidadBtn.addEventListener("click", function contador() {
//   document.querySelector("p").innerHTML = ++i;
// });

function contador() {
  document.querySelector("p").innerHTML = ++i;
}

cantidadBtn.onclick = contador;
// cantidadBtn.onmouseover = contador;
// cantidadBtn.onmouseleave = contador;
