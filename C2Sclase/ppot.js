// 1 TIJERA - 2 PAPEL - 3 PIEDRA    

let seleccion = parseInt(prompt("SELECCIONE UN MOVIMIENTO: 1 ES TIJERA, 2 ES PAPEL, 3 ES PIEDRA"));

let numRand = parseInt(Math.random()*3+1);

if(isNaN(seleccion)) {
    console.log("LA SELECCION NO ES VALIDA");
} else {
    if(seleccion == numRand) {
        console.log("EMPATE. la computadora eligio: " + numRand);
    }

    if(seleccion == 2 && numRand == 1) {
        console.log("PERDISTE. la computadora eligio: " + numRand);
    }
    if(seleccion == 3 && numRand == 1) {
        console.log("GANASTE. la computadora eligio: " + numRand);
    }

    if(seleccion == 1 && numRand == 2) {
        console.log("GANASTE. la computadora eligio: " + numRand);
    }
    if(seleccion == 3 && numRand == 2) {
        console.log("PERDISTE. la computadora eligio: " + numRand);
    }

    if(seleccion == 1 && numRand == 3) {
        console.log("PERDISTE. la computadora eligio: " + numRand);
    }
    if(seleccion == 2 && numRand == 3) {
        console.log("GANASTE. la computadora eligio: " + numRand);
    }
}