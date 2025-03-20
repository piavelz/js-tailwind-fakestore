export async function addProductToCart() {
  const response = await fetch("/src/components/productCart/productCart.html");
  const html = await response.text();

  // const tempContainer = document.createElement("div");
  // tempContainer.innerHTML = html;

  // const productCart = tempContainer.querySelector(".product-cart");
  return html;
}
