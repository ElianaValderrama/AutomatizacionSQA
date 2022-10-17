let nombre = 'Pedro';

function mostrarNombre(nombre) {
    if (nombre !== undefined) {
        nombre = 'Tu nombre es' + ' ' + nombre;
    }
}

mostrarNombre('Juan');
console.log(nombre);


for (let i = 0; i < 10; i++) {
    let count = 0 ;
    for (let j = 0; j < Math.floor(Math.random()*10); j++) {
        count++;
    }
    console.log(count);
}