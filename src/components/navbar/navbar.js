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

export function setupNavbar() {
  const links = [
    { a: "/index.html", title: "Home" },
    {
      a: "/src/pages/new.html",
      title: "Categories",
      class:
        " hidden absolute top-14  w-[360px] h-[300px] grid grid-cols-2 items-center  p-2 rounded-sm bg-white/80 transition-all duration-500 ease-in-out z-[100]",
      image:
        "https://i.pinimg.com/736x/0d/28/dc/0d28dcecaa9711434d67abb67f2d04f8.jpg",
      categories: [
        { a: "./new.html", title: "Shoes" },
        { a: "./new.html", title: "T-Shirts" },
        { a: "./new.html", title: "Pants" },
        { a: "./new.html", title: "Accesories" },
        { a: "./new.html", title: "new" },
      ],
    },
    {
      a: "/src/pages/off.html",
      title: "50%Off",
      class:
        " hidden  absolute top-14  w-[150px] h-[150px] p-2 bg-white/80 rounded-sm transition-all duration-500 ease-in-out z-[100] ",
      categories: [
        { a: "./off.html", title: "Summer" },
        { a: "./off.html", title: "Accesories" },
      ],
    },
  ];

  const userLinksData = [
    {
      a: "#",
      class:
        "w-[24px] h-[24px] block bg-[url('./assets/icons/us.png')] bg-no-repeat bg-center bg-contain cursor-pointer",
    },
    {
      a: "#",
      class:
        "w-[24px] h-[24px] block bg-[url('./assets/icons/cart.png')] bg-no-repeat bg-center bg-contain",
    },
  ];

  const navbar = document.querySelector("nav");
  const navLinks = navbar.querySelector("#nav-links");
  const userLinks = navbar.querySelector("#user-links");

  let colorText = getCurrentPage();

  navbar.querySelector(".dinamic-color").classList.add(colorText);

  links.forEach((link) => {
    const li = document.createElement("li");
    li.className =
      "category dinamic-color content-center h-full cursor-pointer rounded-[4px] p-[10px] hover:bg-white/5 hover:shadow-s duration-300 ease-in";
    li.classList.add(colorText);
    const a = document.createElement("a");
    a.href = link.a;
    a.textContent = link.title;
    li.appendChild(a);

    if (link.categories) {
      const divlinks = document.createElement("div");
      divlinks.className = link.class;

      const ul = document.createElement("ul");
      ul.className = " left-0  size-fit p-[10px] text-black";

      link.categories.forEach((category) => {
        const li = document.createElement("li");
        li.className =
          "cursor-pointer hover:border-b-1 border-black/10 transition duration-200 ease p-2 my-3";

        const a = document.createElement("a");
        a.href = category.a;
        a.textContent = category.title;

        li.appendChild(a);
        ul.appendChild(li);
        divlinks.appendChild(ul);
      });

      if (link.image) {
        const imgCategory = document.createElement("img");
        imgCategory.src = link.image;
        imgCategory.className = "w-[150px] h-[150px] ";
        divlinks.appendChild(imgCategory);
      }

      li.appendChild(divlinks);
    }

    navLinks.appendChild(li);
  });

  userLinksData.forEach((link) => {
    const li = document.createElement("li");
    li.className = link.class;
    const a = document.createElement("a");
    a.href = link.a;
    li.appendChild(a);
    userLinks.appendChild(li);
  });
}

export function handleNav() {
  let colorText = getCurrentPage();
  const nav = document.querySelector("nav");
  const text = nav.querySelectorAll(".dinamic-color");

  const getCategories = document.querySelectorAll(".category");
  const categories = [...getCategories].slice(1);

  const toggleNavStyle = (add) => {
    const method = add ? "add" : "remove";
    nav.classList[method]("bg-black/80", "fixed", "h-10", "top-0");
    nav.classList[method === "add" ? "remove" : "add"]("h-14");

    text.forEach((i) => {
      if (colorText === "text-black") {
        i.classList[method === "remove" ? "add" : "remove"]("text-black");
        i.classList[method === "add" ? "add" : "remove"]("text-white");
      }
    });
    categories.forEach((category) => {
      const menu = category.lastChild;
      menu.classList[method]("top-10", "bg-white");
      menu.classList[method === "add" ? "remove" : "add"](
        "top-14",
        "bg-white/80"
      );
    });
  };

  document.addEventListener("scroll", () => {
    toggleNavStyle(window.scrollY > 30);
  });

  categories.forEach((category) => {
    const menu = category.lastChild;
    const showMenu = () => {
      menu.classList.remove("hidden");
      menu.classList.add("border", "border-gray-200");
    };
    const hideMenu = (e) => {
      if (
        !category.contains(e.relatedTarget) &&
        !menu.contains(e.relatedTarget)
      ) {
        menu.classList.add("hidden");
      }
    };
    category.addEventListener("mouseenter", showMenu);
    menu.addEventListener("mouseenter", showMenu);
    category.addEventListener("mouseleave", hideMenu);
    menu.addEventListener("mouseleave", hideMenu);
  });
}
