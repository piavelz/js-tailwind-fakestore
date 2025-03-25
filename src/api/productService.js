import getData from "./fetchApi.js";

export async function getProducts(amount, random = false) {
  try {
    const productRequests = await getData("products");
    if (!productRequests) {
      return "";
    } else if (amount > 0) {
      return productRequests.slice(0, amount).map((data) => ({
        id: data.id,
        image: data.image,
        name: data.title,
        price: data.price,
      }));
    } else {
      return productRequests.map((data) => ({
        id: data.id,
        image: data.image,
        name: data.title,
        price: data.price,
      }));
    }
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
}
