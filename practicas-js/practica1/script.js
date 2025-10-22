// Función para encender la bombilla
function encender() {
    document.getElementById("bombilla").src = "on.png"; // imagen encendida
    document.getElementById("estado").textContent = "La bombilla está encendida";
}

// Función para apagar la bombilla
function apagar() {
    document.getElementById("bombilla").src = "off.png"; // imagen apagada
    document.getElementById("estado").textContent = "La bombilla está apagada";
}
