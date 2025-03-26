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
  const add = cartItem.querySelector(".add");
  const remove = cartItem.querySelector(".remove");
  const removeItem = cartItem.querySelector(".remove-item");

  if (!product) {
    return null;
  } else {
    img.src = product.image;
    img.alt = product.name;
    title.textContent = product.name.substring(0, 26).toUpperCase();
    price.textContent = `$${product.price}`;
    quantity.value = product.quantity;
  }

  //Actualizar LocalStorage
  function updateCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cart[index].quantity = product.quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    document.dispatchEvent(new Event("cartUpdated"));
  }

  add.addEventListener("click", () => {
    product.quantity++;
    quantity.value = product.quantity;
    updateCart();
  });

  remove.addEventListener("click", () => {
    if (product.quantity > 1) {
      product.quantity--;
      quantity.value = product.quantity;
    }
    updateCart();
  });
  removeItem.addEventListener("click", () => {
    cartItem.remove();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.dispatchEvent(new Event("cartUpdated"));
  });

  return cartItem;
}
