const tema = confirm("Desea aplicar el tema oscuro?");

if (tema) {
  document.querySelector("body").classList.add("dark");
} else {
  document.querySelector("body").classList.remove("dark");
}
