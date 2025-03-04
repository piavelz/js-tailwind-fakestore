export default function createCard({ image, name, price }) {
  const card = document.createElement("section");
  card.className =
    "grid grid-rows-[300px_auto_30px] w-auto min-w-[140px] h-auto mx-2 p-4  rounded-sm relative cursor-pointer hover:shadow-lg snap-start";

  const img = document.createElement("img");
  img.src = image;
  img.alt = name;
  img.className =
    "rounded-sm w-auto max-h-[100%] px-[10px]   place-self-center object-cover ";

  const title = document.createElement("h3");
  title.textContent = name.substring(1, 26).toUpperCase();
  title.className = " h-fit text-[14px] font-medium";

  const p = document.createElement("p");
  p.textContent = `$ ${price}`;
  p.className = "text-[14px] text-gray-800 pb-2";

  const add = document.createElement("button");
  add.textContent = "Add to cart";
  add.className =
    "w-fit hidden px-4 py-0.5 hover:bg-amber-400 absolute top-0 right-0";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(p);
  card.appendChild(add);

  return card;
}
