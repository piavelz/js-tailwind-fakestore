import { loadCard } from "../card/card.js";

export async function loadProducts(containerId, products, title) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const titleContainer = container.querySelector(".product--container--title");
  titleContainer && (titleContainer.textContent = title);

  const layout = container.querySelector(".product--container");
  if (!layout) return;

  for (const product of products) {
    const card = await loadCard(product);
    if (card) {
      layout.appendChild(card);
    }
  }

  return layout;
}
