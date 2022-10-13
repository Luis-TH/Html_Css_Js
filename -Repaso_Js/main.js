let nombre = "Luis TH" //** Declaracion de variables */
let altura = 170

let concatenacion = `${nombre} xD ${altura}`//** Concatenacion */
// console.log(concatenacion); //** Muestro en consola la concatenacion */

let datosDOM = document.getElementById("datos1") //** Nueva variable, y consigueme ese Id, ahi visualizamos */ 
// datosDOM.innerHTML = //** Asi lo puedo visualizar en pantalla */
datosDOM = //** Con esto podemos mostrar en pantalla. elimine datosDOM.innerHTML */
`
<h1>Soy un Titulo</h1>
<h2>Mi nombre es la variable nombre ${nombre}</h2>
<h3>Variable altura ${altura}</h3>
`

//** No se puede escribir esto, porque arriba quite el inner.HTML que establece esto en pantalla */
if( altura > 190 ) { //** Sentencia If donde ya recibimos la variable */
    datosDOM.innerHTML = datosDOM.innerHTML + //** Asi le digo, que esto va a ser lo nuevo a mostrar */
    `
    <h1>Eres una persona Alta</h1>
    `
} else { //** Condicional */
    datosDOM.innerHTML = datosDOM.innerHTML +  
    `
    <h1>Eres una persona Pequeña</h1>
    `
}

for ( var i = 2000; i <= 2022; i++ ) { //** Ciclo */
    datosDOM.innerHTML = datosDOM.innerHTML + //** Asi lo reemplazo para que se muestre en el DOM */
    `
    <h2>Estamos en el año ${i}</h2>
    `
}

const MostrarDatos = (nombre, altura) => { //** FF que recibe nombre y altura */
    let misDatos = //** Declaro una variabe con texto dentro */
    //** datos1 significa el id de la etiqueta */
    `
    <h1>datos1-Titulo</h1>
    <h2>datos1-Titulo mas Pequeño nombre: ${nombre}</h2>
    <h3>datos1-Altura: ${altura}</h3>
    `
    return misDatos //** Regreso la variable con lo que viene dentro */
}

function imprimir() { //** Intrucciones Funcion imprimir */
    let datosDOM1 = document.getElementById("datos1") //** Declaro variable que es donde se visualiza la etiqueta del dom */
    // datosDOM1.innerHTML = MostrarDatos("Luis-TH", 180) //** Asi se mostraria en el DOM */
    datosDOM1 = MostrarDatos("Luis-TH", 180) //** Visualizo en la etiqueta, funcion con la info que pide, elimine innerHTML */
}

imprimir() //** Invoco la funcion, para que siga las instrucciones */

//** Estoy renderizando esto */
let nombres = ["Luis", "Ana", "Karla"] //** Arreglo con 3 elementos dentro */
// document(`<h1>Listado Nombres</h1>`) //** Se muestra en el documento html, elimino el .write */
document.write(`<h1>Listado Nombres</h1>`) //** Asi visualizamos en el DOM */
for ( i = 0; i < nombres.length; i++) { //** Iteraciones para obtener los nombres */
    (`${nombres[i]} <br>`) //** Instrucciones for, mostrar en el DOM los nombre y despues un salto de linea */
} 

nombres.forEach((nombre) => { //** Variable que recibe el metodo forEach para cada nombre */
    document.write(`forEach - ${nombre} <br> `) //** Lo que se va a visualizar en el DOM */
})