
function second() {
    console.log('2. Entramos en second()');
    console.log('3. Fin de second()');
}

function first() {
    console.log('1. Entramos en first()');
    second();
    console.log('4. Fin de first()');
}


console.log('Inicio del script');
first();
console.log('Fin del script');