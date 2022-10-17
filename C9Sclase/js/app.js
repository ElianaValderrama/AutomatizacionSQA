window.addEventListener('load', function () {
    //logica de la aplicacion

    setTimeout(function(){
        document.body.style.background="red";
        alert("⚠️ALERTA DE LOS 5 SEGUNDOS⚠️")
    }, 5000);

    /* -------------------------------------------------------------------------- */
    /*                                  VARIABLES                                 */
    /* -------------------------------------------------------------------------- */
    let contador = 0;
    let cronometro;
    let tiempo = 1000;
    const valor = document.querySelector('#valor');
    const btnIniciar = document.querySelector('#iniciar');
    const btnStop = document.querySelector('#stop');
    const btnPausa = document.querySelector('#pausa');
    const times = document.querySelector('#times');

    /* -------------------------------------------------------------------------- */
    /*                                  LISTENERS                                 */
    /* -------------------------------------------------------------------------- */
    btnIniciar.addEventListener('click', function (e) {
        console.log("click");
        play();
    });
    btnStop.addEventListener('click', reiniciar);
    btnPausa.addEventListener('click', pausar);

    /* -------------------------------------------------------------------------- */
    /*                                  FUNCIONES                                 */
    /* -------------------------------------------------------------------------- */
    //definimos la funcionalidad del boton play (iniciar el cronometro)
    function play() {
        cronometro = setInterval(function () {
            contador++;
            console.log(contador);
            renderizar();
        }, tiempo); 
    };

    // difinimos la responsabilidad de la funcion renderizar
    function renderizar() {
        valor.innerText = contador;
    }

    // definimos la funcionalidad del boton pausar (pausa el cronometro)
    function pausar() {
        clearInterval(cronometro);
    }

    // definimos la funcionalidad del boton stop (detiene y reinicia el cronometro)
    function reiniciar() {
        clearInterval(cronometro);
        times.innerHTML += `<small>Tiempo: ${contador}</small>`
        contador = 0;
        renderizar();
    }
});





















