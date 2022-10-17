console.log("Bienvenidos al Banco Digital");

let miPrimeraPromise = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono, es decir una petición al servidor.
  // La variable cuentaBancaria simula la informacion en la base de datos.
  // En la "vida real", vamos a recurrir a un fetch() [lo cual se ve la proxima clase].

  const cuentaBancaria = {
    estado: "inactiva",
    usuario: "Michael Scott",
    cajaDeAhorros: 100,
  };

  setTimeout(function () {
    if (cuentaBancaria.cajaDeAhorros < 1) {
      reject({
        mensaje: "Fondos insuficientes en la cuenta.",
      });
    } else if (cuentaBancaria.estado != "activa") {
      reject({
        mensaje: "La cuenta no se encuentra activa.",
      });
    } else {
      resolve({
        mensaje: "La transacción se realizó con éxito.",
      });
    }
  }, 2500);
});

let intento;

const cajero = document.querySelector(".bancaMobile");

miPrimeraPromise
  .then((respuesta) => {
    intento = respuesta;
    cajero.innerHTML = `<h4>${intento.mensaje}</h4>`;
    console.log(intento);
  })
  .catch((err) => {
    intento = err;
    cajero.innerHTML = `<h4>${intento.mensaje}</h4>`;
    console.log(err);
  });
