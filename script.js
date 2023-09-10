// Obtén una referencia al botón y al menú desplegable
const menuButton = document.getElementById("btn-menu");
const menuOptions = document.getElementById("menu-items");

// Agrega un controlador de eventos al botón
menuButton.addEventListener("click", function () {
  // Cambia la visibilidad del menú desplegable al hacer clic en el botón
  if (menuOptions.style.display === "block") {
    menuOptions.style.display = "none";
  } else {
    menuOptions.style.display = "block";
  }
});

const botonContacto = document.getElementById("contacto");

botonContacto.addEventListener("click", function () {
  // Redirige al usuario a la página de contacto
  window.location.href = "/src/contacto.html"; // Reemplaza "contacto.html" con la URL de tu página de contacto
});
