import { loadCard } from "../card/card.js";

export async function loadCarrousel(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const carousel = container.querySelector(".carousel--cards"); // el contenedor de cards
  if (!carousel) return;

  const back = container.querySelector("#carousel--back");
  const next = container.querySelector("#carousel--next");

  // Crear las tarjetas dentro del carrusel
  const elements = [...products, ...products];

  for (const product of elements) {
    const card = await loadCard(product);
    if (card) {
      card.classList.add("flex-[0_0_19%]");
      carousel.appendChild(card);
    }
  }

  // Eventos de navegación
  next.addEventListener("click", () => {
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += carousel.offsetWidth;
    }
  });

  back.addEventListener("click", () => {
    carousel.scrollLeft -= carousel.offsetWidth;
  });
}
