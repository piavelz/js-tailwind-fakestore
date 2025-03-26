export async function loadCard(product) {
  const response = await fetch("/src/components/card/card.html");
  const html = await response.text();

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;

  // Obtener la tarjeta desde el HTML cargado
  const card = tempContainer.querySelector(".product-card");
  if (!card) return null;

  const img = card.querySelector(".product-image");
  const title = card.querySelector(".product-name");
  const price = card.querySelector(".product-price");

  img.src = product.image;
  img.alt = product.name;
  title.textContent = product.name.substring(0, 25).toUpperCase();
  price.textContent = `$${product.price}`;

  //funcionalidad de boton agregar al carrito
  const addBtn = card.querySelector(".add--item--btn");
  addBtn.addEventListener("click", () => {
    addToCart(product);
  });

  return card;
}

function addToCart(product) {
  //agregar items al localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1; //cantidad inicial
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  document.dispatchEvent(new CustomEvent("cartUpdated"));
}
