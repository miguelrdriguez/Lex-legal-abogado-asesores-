// Activar menú responsive si deseas hacerlo móvil
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('activo');
}

// Abrir WhatsApp
function abrirWhatsApp() {
  window.open("https://wa.me/573123456789?text=Hola%2C%20quisiera%20una%20asesor%C3%ADa%20jur%C3%ADdica", "_blank");
}
{
  titulo: "Nombre de la noticia",
  fecha: "2025-07-08",
  categoria: "Derecho Ambiental",
  resumen: "Contenido corto sobre la noticia o análisis jurídico..."
}
// Menú principal responsive
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('activo');
}

// WhatsApp
function abrirWhatsApp() {
  window.open("https://wa.me/573123456789?text=Hola%2C%20quisiera%20una%20asesor%C3%ADa%20jur%C3%ADdica", "_blank");
}

// Submenús en móviles (click para abrir)
document.addEventListener("DOMContentLoaded", function () {
  const submenus = document.querySelectorAll(".has-submenu > a");

  submenus.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      // Si está en móvil
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Prevenir navegación
        const submenu = this.nextElementSibling;
        submenu.classList.toggle("visible");
      }
    });
  });
});

// Menú responsive
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('activo');
}

// Botón de WhatsApp
function abrirWhatsApp() {
  window.open("https://wa.me/573123456789?text=Hola%2C%20quisiera%20una%20asesor%C3%ADa%20jur%C3%ADdica", "_blank");
}

// Submenús táctiles para móvil
document.addEventListener("DOMContentLoaded", function () {
  const submenus = document.querySelectorAll(".has-submenu > a");

  submenus.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // No redirigir
        const submenu = this.nextElementSibling;
        submenu.classList.toggle("visible");
      }
    });
  });
});

[
  {
    "fecha": "2025-07-08",
    "titulo": "Se crea nuevo juzgado ambiental",
    "contenido": "El Consejo Superior de la Judicatura anunció la apertura de un juzgado especializado en derecho ambiental..."
  },
  {
    "fecha": "2025-07-07",
    "titulo": "Reforma al Código Penal",
    "contenido": "El Congreso aprobó una nueva reforma al Código Penal que modifica los delitos económicos..."
  }
]