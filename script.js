console.log("Script cargado.");

// 1. SELECCIONAR los elementos del HTML
const boton = document.getElementById("boton_modificado");
const h3 = document.getElementById("ubicacion");

// 2. DEFINIR la función (la acción que queremos que ocurra)
function cambiarTexto() {
  console.log("¡El botón fue presionado!");
  
  // 'textContent' es la propiedad que controla el texto dentro de una etiqueta
  h3.textContent = "¡Ven a disfrutar nuestra deliciosa comida! 🥳";
  h3.style.color = "red"; // ¡Incluso podemos cambiar el CSS!
}


// 3. CONECTAR el evento a la función
// Le decimos al botón: "Oye, cuando escuches un 'click',
// ejecuta la función 'cambiarTexto'."
boton.addEventListener("click", cambiarTexto);