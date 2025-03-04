import carrousel from "./components/carrousel-m.js";
import Footer from "./components/footer.js";
import Navbar from "./components/Navbar.js";
import productsLayout from "./components/productslayout.js";

import { getProducts } from "./api/productService.js";

//funcion que devuelve un obj con n cantidad de productos

//carrousel

async function init() {
  //Layout de productos sugeridos
  const getLayoutProducts = await getProducts(8, false);
  document
    .getElementById("suggestions")
    .appendChild(productsLayout(getLayoutProducts));

  //carrousel
  const getNews = await getProducts(9, true);
  const carrouselElement = carrousel(getNews, "novedades", "#");
  document.getElementById("carrusel").appendChild(carrouselElement);

  //footer
  const getFooter = Footer();
  document.getElementById("footer").appendChild(getFooter);
}
document.addEventListener("DOMContentLoaded", init);

//navbar
const links = [
  // { a: "#", title: "LOGOTIENDA", class: "w-[200px] px-10 text-xl border-r-2" },
  {
    a: "#",
    title: "Home",
    class:
      "cursor-pointer  px-[20px]  hover:bg-white/10 hover:backdrop-blur-md   ",
  },
  {
    a: "#",
    title: "New",
    class:
      "cursor-pointer  px-[20px]  hover:bg-white/10 hover:backdrop-blur-md   ",
  },
  {
    a: "#",
    title: "50%Off",
    class:
      "cursor-pointer  px-[20px]  hover:bg-white/10 hover:backdrop-blur-md   ",
  },
];
const userLinks = [
  {
    a: "#",
    class:
      "w-[30px] h-[30px] block bg-[url('./assets/icons/people.png')] bg-no-repeat bg-center bg-contain cursor-pointer",
  },
  {
    a: "#",
    class:
      "w-[40px] h-[40px] block bg-[url('./assets/icons/shopping-bag.png')] bg-no-repeat bg-center bg-contain",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const getNavbar = Navbar(links, userLinks);
  document.getElementById("nav").appendChild(getNavbar);
});
