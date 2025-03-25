export async function createCartItem(product) {
  const response = await fetch("/src/components/productCart/productCart.html");
  const html = await response.text();

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = html;
  const cartItem = tempContainer.querySelector(".cart-item");
  if (!cartItem) return null;
  const img = cartItem.querySelector(".product-image");
  const title = cartItem.querySelector(".product-name");
  const price = cartItem.querySelector(".product-price");
  const quantity = cartItem.querySelector(".quantity");

  if (!product) {
    return null;
  } else {
    img.src = product.image;
    img.alt = product.name;
    title.textContent = product.name.substring(0, 26).toUpperCase();
    price.textContent = `$${product.price}`;
    quantity.value = product.quantity;
  }

  return cartItem;
}
