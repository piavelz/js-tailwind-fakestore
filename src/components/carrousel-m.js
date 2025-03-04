import createCards from "./card.js";

export default function createCarrouselMedium(products, title, href) {
  const carrousel = document.createElement("article");
  carrousel.className =
    "max-w-[1500px]  m-[40px_auto]  grid grid-rows-[auto] grid-cols-[auto_1fr_1fr_auto] items-center";

  const h2 = document.createElement("h2");
  h2.className =
    "py-4 mt-10 text-3xl font-light tracking-[3px] col-start-2 col-end-3";
  h2.textContent = title.toUpperCase();

  const link = document.createElement("a");
  link.href = href;
  link.className =
    "py-4 col-span-2 col-start-3 col-end-4 text-end font-light w-fit cursor-pointer place-self-end hover:text-purple-700";

  const back = document.createElement("span");
  back.className =
    "w-[30px] h-[30px] bg-[url('./assets/icons/back.svg')] bg-no-repeat bg-center bg-contain cursor-pointer col-start-1 col-end-2";

  const next = document.createElement("span");
  next.className =
    "w-[30px] h-[30px] bg-[url('./assets/icons/forward.svg')] bg-no-repeat bg-center bg-contain cursor-pointer col-start-4 col-end-5";

  const cardsContainer = document.createElement("div");
  cardsContainer.className =
    "flex w-full overflow-hidden scroll-smooth pb-4 col-span-2 snap-x snap-mandatory ";

  //Crear las cards necesarias para el carrusel
  const elements = [...products, ...products];
  elements.forEach((product) => {
    const card = createCards(product);
    card.className =
      "flex-[0_0_19%] grid grid-rows-[300px_auto_30px] w-auto min-w-[140px] h-auto mx-2  rounded-sm relative cursor-pointer hover:shadow-lg snap-start";
    cardsContainer.appendChild(card);
  });

  next.addEventListener("click", () => {
    if (cardsContainer.scrollLeft >= cardsContainer.scrollWidth / 2) {
      cardsContainer.scrollLeft = 0;
    } else {
      cardsContainer.scrollLeft += cardsContainer.offsetWidth;
    }
  });
  back.addEventListener("click", (e) => {
    cardsContainer.scrollLeft -= cardsContainer.offsetWidth;
  });

  carrousel.appendChild(h2);
  carrousel.appendChild(link);
  carrousel.appendChild(back);
  carrousel.appendChild(cardsContainer);
  carrousel.appendChild(next);
  return carrousel;
}
