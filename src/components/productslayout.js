import createCards from "./card.js";

export default function productsLayout(products) {
  const layout = document.createElement("article");
  layout.className =
    "max-w-[1500px]  h-full m-[40px_auto]  grid grid-rows-[1fr_1fr] grid-cols-[1fr_1fr_1fr_1fr] items-center";

  //   const elements = createCards(products);
  products.forEach((product) => {
    const card = createCards(product);
    layout.appendChild(card);
  });
  return layout;
}
