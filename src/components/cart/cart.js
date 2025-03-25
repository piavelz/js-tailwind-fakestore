import { createCartItem } from "../productCart/productCart.js";

export async function loadCart(id) {
  //funcion que se encarga de situar todo dentro de la id que contiene al carrito
  const cartContainer = document.getElementById(id);

  const cart = JSON.parse(localStorage.getItem("cart")) || []; //toma el carro del localStore o un array vacio

  if (cart.length > 0) {
    for (const item of cart) {
      const itemt = await createCartItem(item);
      cartContainer.appendChild(itemt);
    }
  }
}

document.addEventListener("cartUpdated", () => loadCart("itemsCart"));
