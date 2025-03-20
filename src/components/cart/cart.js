import { addProductToCart } from "../productCart/productCart.js";

export async function loadCart(id) {
  const cartContainer = document.getElementById(id);
  console.log(cartContainer);
  const item = await addProductToCart();

  cartContainer.innerHTML = item;
}
