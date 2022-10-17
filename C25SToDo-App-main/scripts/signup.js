window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const form = document.forms[0];
  const nombre = document.querySelector("#inputNombre");
  const apellido = document.querySelector("#inputApellido");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");
  const url = "https://ctd-fe2-todo.herokuapp.com/v1";

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Aquí podemos mostrar el spinner para indicar a la persona que se ha iniciado el proceso de registro
    mostrarSpinner();

    //creamos el cuerpo de la request
    const payload = {
      firstName: nombre.value,
      lastName: apellido.value,
      email: email.value,
      password: password.value,
    };
    //configuramos la request del Fetch
    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };
    //lanzamos la consulta de login a la API
    realizarRegister(settings);

    //limpio los campos del formulario
    form.reset();
  });

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    console.log("Lanzando la consulta a la API");
    fetch(`${url}/users`, settings)
      .then((response) => {
        console.log(response);

        //CONSIGNA MESA DE TRABAJO!
        //Reemplazar este 'Alert' común por uno utilizando SweetAlert2
        if (response.ok != true) {
          alert("Alguno de los datos es incorrecto.");
          //Ocultamos el spinner en caso de error
          ocultarSpinner();
        }

        return response.json();
      })
      .then((data) => {
        console.log("Promesa cumplida:");
        console.log(data);

        if (data.jwt) {
          //guardo en LocalStorage el objeto con el token
          localStorage.setItem("jwt", JSON.stringify(data.jwt));

          // Una vez obtenida la respuesta de la API, ocultamos el spinner
          ocultarSpinner();

          //redireccionamos a la página
          location.replace("./mis-tareas.html");
        }
        //Tambien crear una alerta con SweetAlert2 por si se llega a atrapar un error
      })
      .catch((err) => {
        //Ocultamos el spinner en caso de error
        ocultarSpinner();
        console.log("Promesa rechazada:");
        console.log(err);
      });
  }
});
