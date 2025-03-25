function getCurrentPage() {
  const page = window.location.pathname.split("/").pop();
  let colorText = "";

  if (page === "index.html" || page === "") {
    colorText = "text-white";
  } else {
    colorText = "text-black";
  }
  return colorText;
}

export async function handleNav() {
  const navbar = document.getElementById("navbar");
  const text = nav.querySelectorAll(".dinamic-color"); //-> aqui deberias tener todo el texto. iconos y logo
  const cartIcon = document.getElementById("cart--icon");
  const closeCart = document.querySelectorAll(".cart--close");
  const containMenus = document.querySelectorAll(".contain-menu");
  const menus = document.querySelectorAll(".menu");
  const iconMenu = document.getElementById("icon-menu");
  const menuPlegable = document.querySelector(".menu-plegable");

  let colorText = getCurrentPage();

  containMenus.forEach((menu) => {
    const menuContent = menu.lastElementChild;
    menu.addEventListener("click", (e) => {
      menuContent.classList.toggle("hidden");
      e.stopPropagation();
    });
    menuContent.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  iconMenu.addEventListener("click", () => {
    menuPlegable.classList.toggle("hidden");
  });

  // cambiar color de manera dinamica segun pagina
  const dinamicColorText = (color) => {
    text.forEach((i) => {
      const method = color === "text-black" ? "remove" : "add";
      i.classList[method === "remove" ? "add" : "remove"]("text-black");
      i.classList[method === "add" ? "add" : "remove"]("text-white");
    });
  };

  dinamicColorText(colorText); //Detectar en que pagina se esta y cambiar color de texto si es necesario

  function fixedNav(result) {
    //cambiar tamaño de barra segun scroll
    const method = result ? "add" : "remove";
    navbar.classList[method]("bg-black/80", "fixed", "h-10", "top-0");
    navbar.classList[method === "add" ? "remove" : "add"]("h-14", "relative");

    //cambia color de texto segun  scroll
    if (colorText === "text-black" && method === "add") {
      dinamicColorText("text-white");
    } else {
      dinamicColorText(colorText);
    }

    //Cambiar altura de menu desplegable segun scroll
    menus.forEach((menu) => {
      menu.classList[method]("lg:top-10");
      menu.classList[method === "add" ? "remove" : "add"]("lg:top-14");
    });

    if (window.screen.width < 1024) {
      menuPlegable.classList[method]("top-10");
      menuPlegable.classList[method === "add" ? "remove" : "add"]("top-14");
    }
  }

  async function showCart() {
    const cartContainer = document.getElementById("cart--overlay");
    const navCart = document.getElementById("nav--cart");
    cartContainer.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }
  //scroll event
  document.addEventListener("scroll", () => {
    fixedNav(window.scrollY > 30);
  });

  cartIcon.addEventListener("click", showCart);

  closeCart.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        e.stopPropagation();
        showCart();
      }
    });
  });
}
