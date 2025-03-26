import { createCartItem } from "../productCart/productCart.js";

export async function loadCart(id) {
  //funcion que se encarga de situar todo dentro de la id que contiene al carrito
  const cartContainer = document.getElementById(id);
  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length > 0) {
    for (const item of cart) {
      const cartItem = await createCartItem(item);

      cartContainer.appendChild(cartItem);
    }
  }
}

//document.addEventListener("cartUpdated", () => loadCart("itemsCart"));
