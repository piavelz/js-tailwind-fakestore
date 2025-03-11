import Footer from "./components/footer.js";
import { setupNavbar, handleNav } from "./components/navbar/navbar.js";
import { getProducts } from "./api/productService.js";
import { loadCarrousel } from "./components/carrusel/carrusel.js";
import { loadProducts } from "./components/productContainer/productContainer.js";

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
  console.log("Página actual:", page);

  if (page === "index.html" || page === "") {
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

    await loadComponent(
      "products",
      "/src/components/productContainer/productContainer.html",
      () => {
        try {
          getProducts(8).then((data) => {
            loadProducts("products", data, "Productos destacados");
          });
        } catch (error) {
          console.log("Error al obtener productos:", error);
        }
      }
    );
  }

  if (page === "new.html") {
    const nav = document.getElementById("nav");
    console.log("nav", nav);
    await loadComponent(
      "products",
      "/src/components/productContainer/productContainer.html",
      () => {
        try {
          getProducts().then((data) => {
            loadProducts("products", data);
          });
        } catch (error) {
          console.log("Error al obtener productos:", error);
        }
      }
    );
  }
});
