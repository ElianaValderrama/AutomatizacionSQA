//definir las variables globales
const form = document.querySelector('form');
const busqueda = document.querySelector('#busqueda');
const listadoBusquedas = document.querySelector('#busquedas-realizadas');

//obtener lo que se tiene en el localstorage, aun no se hacreado el item historial se hara mas adelante
let busquedasRealizadas = JSON.parse(localStorage.getItem("historial"));

//escuchador
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //obtienen lo que digito el usuario en el input
    let busquedaActual = captarData();
    busquedasRealizadas.push(busquedaActual);

    localStorage.setItem("historial", JSON.stringify(busquedasRealizadas));

    realizarBusqueda(busquedaActual);
})

//tomar datos ingresados al navegador
function captarData(){
    //guardamos el resultado de la busqueda que solicito el usuario
    let buscado = busqueda.value.trim();
    return buscado;
}

if(busquedasRealizadas) {
    renderizarBusquedas(busquedasRealizadas);
}else { //este else es necesario para la primera busqueda; sino no hace la busqueda
    busquedasRealizadas = [];
}

console.log(busquedasRealizadas);

//renderizar los datos --> el listado que recorre es el de busquedasRealizadas
function renderizarBusquedas(listado) {
    listado.forEach((element) => {
        let nodo = document.createElement("p");
        let texto = document.createTextNode(element);
        nodo.appendChild(texto)
        listadoBusquedas.appendChild(nodo);
    });
}

//direccionar al usuario a la busqueda

function realizarBusqueda(texto) {
    //location.replace = (`https://www.google.com/search?q=${texto}`);
    
    window.open(`https://www.google.com/search?q=${texto}`, "_blank");
}


