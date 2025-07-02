const motDePasse = "innova123"; // 🔐 À personnaliser
const baseUrl = "http://192.168.36.27"; // 👉 À modifier selon ton ESP32
const streamUrl = `${baseUrl}:81/stream`;

function verifierMotDePasse() {
  const input = document.getElementById("password").value;
  if (input === motDePasse) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("erreur").style.display = "block";
  }
}

function lancerStream() {
  const cam = document.getElementById("camera");
  cam.src = streamUrl;
  cam.style.display = "block";
}

function arreterStream() {
  const cam = document.getElementById("camera");
  cam.src = "";
  cam.style.display = "none";
}

function prendrePhoto() {
  window.open(`${baseUrl}/capture`, "_blank");
}

function allumerLED() {
  fetch(`${baseUrl}/led/on`)
    .then(() => alert("LED allumée !"))
    .catch(() => alert("Erreur de connexion"));
}

function eteindreLED() {
  fetch(`${baseUrl}/led/off`)
    .then(() => alert("LED éteinte !"))
    .catch(() => alert("Erreur de connexion"));
}

// Affiche le formulaire au démarrage
document.getElementById("login").style.display = "block";
