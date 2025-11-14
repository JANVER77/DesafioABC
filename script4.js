// Colores aleatorios predefinidos
function colorAleatorio() {
  const colores = ["#ff4b5c", "#28a745", "#007bff"]; // rojo, verde, azul
  const random = Math.floor(Math.random() * colores.length);
  return colores[random];
}

// Selecciona todas las letras grandes
const letras = document.querySelectorAll(".letra");

// Evento: al hacer clic en cada letra, cambia de color
letras.forEach(letra => {
  letra.addEventListener("click", () => {
    letra.style.color = colorAleatorio();
  });
});

console.log("✅ JS funcionando: colores aleatorios activos.");
