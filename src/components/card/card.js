export async function loadCard(product) {
  const response = await fetch("/src/components/card/card.html");
  const html = await response.text();

  // Crear un contenedor temporal para convertir el HTML en un elemento real
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;

  // Obtener la tarjeta desde el HTML cargado
  const card = tempContainer.querySelector(".product-card");
  if (!card) return null; // Si no se encuentra la tarjeta, salir

  // Asignar datos dinámicos
  const img = card.querySelector(".product-image");
  const title = card.querySelector(".product-name");
  const price = card.querySelector(".product-price");

  img.src = product.image;
  img.alt = product.name;
  title.textContent = product.name.substring(0, 26).toUpperCase();
  price.textContent = `$ ${product.price}`;

  return card;
}
