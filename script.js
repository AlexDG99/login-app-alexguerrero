
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value.trim() === "" || password.value.trim() === "") {
    message.textContent = "Por favor, completa todos los campos.";
    message.style.color = "#dc2626";
    return;
  }

  message.textContent = "Validación correcta. Formulario listo.";
  message.style.color = "#15803d";
});
