/* funcion cotizarDolar(pesos), la cual recibe un valor monetario $ y lo retorna en equivalente Dolar */
const valorDolar = 100;
function cotizarDolar(moneda){
    return convertirADolar = moneda * valorDolar;
}

/* funcion cotizarPesos(dolar) que recibe un valor monetario dolar y lo convierte a pesos */


function cotizarPesos(moneda){
    return convertirAPesos = moneda / valorDolar;
}
/* funcion que elije tipo de moneda y retorna la conversion */
function opciones (opcion, moneda) {
    switch (opcion) {
        case "1": 
            return alert(("Su Dolar a Pesos es: ") + (cotizarDolar(moneda)));
            
        case "2":
            return alert(("Su Pesos a Dolar es: ") + (cotizarPesos(moneda)));
            
        default:
            return alert("No hay moneda a convertir, ingrese una opcion correcta");         
    }
}

let pregunta = prompt("Desea hacer una cotizacion? si/no");
while (pregunta === "si") {   

    let opcion = prompt("Ingrese una opcion \n 1 - Dolar a Pesos \n 2 - Pesos a Dolar ");
    let moneda = prompt("Ingrese un valor a convertir");
    alert(opciones(opcion, moneda));
    pregunta = prompt("Desea otra cotizacion? si/no");
    
}
alert("Gracias por visitar nuestro cotizador");