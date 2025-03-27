import { handleNav } from "./components/navbar/navbar.js";
import { getProducts } from "./api/productService.js";
import { loadCarrousel } from "./components/carrusel/carrusel.js";
import { loadProducts } from "./components/productContainer/productContainer.js";
import { imageBanner } from "./components/bannerPage/bannerPage.js";
import { handleFilterOptions } from "./components/filterOptions/filterOptions.js";
import { loadCart } from "./components/cart/cart.js";

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
const page = getCurrentPage();
// Cargar solo los componentes necesarios según la página
document.addEventListener("DOMContentLoaded", async () => {
  loadComponent("nav", "/src/components/navbar/navbar.html", () => {
    handleNav();
    loadComponent("nav--cart", "/src/components/cart/cart.html", () => {
      loadCart("itemsCart");
    });
  });

  loadComponent("footer", "/src/components/footer/footer.html");

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
    await loadComponent(
      "banner",
      "/src/components/bannerPage/bannerPage.html",
      () => {
        const data = [
          {
            title: "Nuevos productos",
            image:
              "https://i.pinimg.com/736x/1c/a5/67/1ca567aa2c45ed4926580ee5a7a30ea9.jpg",
          },
          {
            title: "Nuevo",
            image:
              "https://i.pinimg.com/736x/1c/a5/67/1ca567aa2c45ed4926580ee5a7a30ea9.jpg",
          },
          {
            title: "Nuevos productos",
            image:
              "https://i.pinimg.com/736x/1c/a5/67/1ca567aa2c45ed4926580ee5a7a30ea9.jpg",
          },
          {
            title: "Nuevo",
            image:
              "https://i.pinimg.com/736x/1c/a5/67/1ca567aa2c45ed4926580ee5a7a30ea9.jpg",
          },
        ];
        imageBanner("banner", data);
      }
    );
    await loadComponent(
      "options",
      "/src/components/filterOptions/filterOptions.html",
      () => {
        handleFilterOptions("options");
      }
    );
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

  if (page === "cart.html") {
    loadComponent("cart", "/src/components/cart/cart.html", () => {
      loadCart("itemsCart");
    });
  }
});

document.addEventListener("cartUpdated", () => loadCart("itemsCart"));
