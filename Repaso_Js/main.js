let nombre = "Luis TH" //** Declaracion de variables */
let altura = 170

let concatenacion = `${nombre} xD ${altura}`//** Concatenacion */

let datosDOM = document.getElementById("datos1") //** datos es la etiqueta div con el id="datos"
datosDOM = //** Con esto podemos mostrar en pantalla. elimine datosDOM.innerHTML */
`
<h1>Soy un Titulo</h1>
<h2>Mi nombre es la variable nombre ${nombre}</h2>
<h3>Variable altura ${altura}</h3>
`

if( altura > 190 ) { //** Sentencia If donde ya recibimos la variable */
    datosDOM.innerHTML = datosDOM.innerHTML +  
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
    datosDOM.innerHTML = datosDOM.innerHTML + 
    `
    <h2>Estamos en el año ${i}</h2>
    `
}

const MostrarDatos = (nombre, altura) => { //** FF que recibe nombre y altura */
    let misDatos = //** Declaro una variabe con texto dentro */
    `
    <h1>datos1-Titulo</h1>
    <h2>datos1-Titulo mas Pequeño nombre: ${nombre}</h2>
    <h3>datos1-Altura: ${altura}</h3>
    `
    return misDatos //** Regreso la variable con mis daros */
}

function imprimir() { //** Intrucciones Funcion imprimir */
    let datosDOM1 = document.getElementById("datos") //** Declaro una variable que va a ser el datos etiqueta del dom */
    datosDOM1 = MostrarDatos("Luis-TH", 180) //** Lo que imprimo en la etiqueta, y los datos con la info que pide, elimine etiqueta innerHTML */
}

imprimir() //** Invoco la funcion */

let nombres = ["Luis", "Ana", "Karla"] //** Arreglo con 3 elementos dentro */
document.write(`<h1>Listado Nombres</h1>`) //** Se muestra en el documento html, elimino el write */
for ( i = 0; i < nombres.length; i++) { //** Iteraciones para obtener los nombres */
    (`${nombres[i]} <br>`) //** Que se muestre en el DOM los nombre y despues un salto de linea, elimine document.write */
} 

nombres.forEach((nombre) => {
    document.write(`forEach - ${nombre} <br> `)
})