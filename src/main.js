import Footer from "./components/footer.js";
import { setupNavbar, handleNav } from "./components/navbar/navbar.js";
import { getProducts } from "./api/productService.js";
import { loadCarrousel } from "./components/carrusel/carrusel.js";

// Función para cargar componentes dinámicamente
async function loadComponent(containerId, file, callback) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const response = await fetch(file);
  const html = await response.text();
  container.innerHTML = html;

  if (callback) callback(); // Ejecutar callback después de cargar el HTML
}

// Función para saber en qué página estamos
function getCurrentPage() {
  return window.location.pathname.split("/").pop();
}

// Cargar solo los componentes necesarios según la página
document.addEventListener("DOMContentLoaded", async () => {
  loadComponent("nav", "/src/components/navbar/navbar.html", () => {
    setupNavbar();
    handleNav();
  });

  loadComponent("footer", "/src/components/footer/footer.html");

  // Detectar la página y cargar componentes específicos
  const page = getCurrentPage();

  if (page === "index.html") {
    await loadComponent(
      "carousel",
      "/src/components/carrusel/carrusel.html",
      () => {
        try {
          getProducts(9, true).then((data) => {
            loadCarrousel("carousel", data);
          });
        } catch (error) {
          console.log("Error al obtener productos:", error);
        }
      }
    );
    // try {
    //   const getNews = await getProducts(9, true); // Obtiene 9 productos
    //   loadCarrousel("carrousel", getNews, "Novedades", "#");
    // } catch (error) {
    //   console.error("Error al obtener productos:", error);
    // }
  }

  if (page === "pagina3.html") {
    loadComponent("gallery", "./components/gallery/gallery.html");
  }
});
