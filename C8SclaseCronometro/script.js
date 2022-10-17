let i = 0;
let segundos = document.getElementById("number");

let contador = setInterval(function () {
  segundos.innerHTML = i++;
}, 1000);

function pararContador() {
  clearInterval(contador);
}

const div = document.getElementById("div");
let nodoRestart = document.createElement("button");
// nodoRestart.innerText = "Restart";
let textoRestart = document.createTextNode("Restart");
nodoRestart.appendChild(textoRestart);
div.appendChild(nodoRestart);
