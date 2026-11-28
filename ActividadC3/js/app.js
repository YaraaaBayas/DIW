//Mostrar mensajes por consola
console.log("app.js conectado");

const encabezado = document.querySelector("header");
const productos = document.querySelectorAll(".producto");

console.log(productos.length);

let numTarjetas = document.getElementById("numTarjetas");
numTarjetas.textContent = `Nº de tarjetas: ${productos.length}`;


//Añadir evento al botón "btnCambio" para cambiar h1:
const titulo = document.querySelector("h1");
document.getElementById("btnCambio").addEventListener("click", () => {
    const nuevoTexto = document.getElementById("nuevoTitulo").value;
    titulo.textContent = nuevoTexto;
});


//Añadir evento al botón "btnReiniciar" para volver al h1 original:
const fondo = document.querySelector(".actividadC1_ud4");
document.getElementById("btnReiniciar").addEventListener("click", () => {
    titulo.textContent = "Mi página web";
    fondo.className = "actividadC1_ud4";
});


//Añadir evento al botón "btnColor" para cambiar el fondo de color:
document.getElementById("btnColor").addEventListener("click", () => {
    fondo.classList.toggle("destacado");
});
