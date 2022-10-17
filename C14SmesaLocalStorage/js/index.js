
//REQUERIMIENTOS
//- utilizar el formulario para captar el texto ingresado
const form = document.querySelector('form');
const comentario = document.getElementById('comentario');
const listadoComentarios = document.querySelector(".comentarios")
console.log(listadoComentarios);

//- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

//- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

//- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios

let comentariosRealizados = JSON.parse(localStorage.getItem("historial"));
if (comentariosRealizados){
    renderizarComentarios(comentariosRealizados)
} else {
    comentariosRealizados = [];
}    

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let comentarioActual = captarComent();
    comentariosRealizados.push(comentarioActual);
    localStorage.setItem("historial", JSON.stringify(comentariosRealizados));  
    renderizarComentarios(comentariosRealizados);
  });

function captarComent(){
    let comentado = comentario.value.trim()
    return comentado;
}

function renderizarComentarios (listado){
    listado.forEach((element) => {
        let nodo = document.createElement("p");
        let texto = document.createTextNode(element);
        //nodo.innerText = element;
        nodo.appendChild(texto);
        listadoComentarios.appendChild(nodo);  
    });
}
