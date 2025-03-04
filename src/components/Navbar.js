export default function Navbar(links, userLinks) {
  const nav = document.createElement("nav");
  nav.className =
    "bg-transparent h-14 flex items-center justify-around text-[0.9rem] border-b-1 w-full z-50";

  const ulLinks = document.createElement("ul");
  ulLinks.className = "  w-[35%] flex gap-6";

  links.forEach((link) => {
    const li = document.createElement("li");
    li.className =
      "h-full cursor-pointer  p-[12px] text-white hover:bg-black/20 hover:backdrop-blur-md   ";
    const a = document.createElement("a");
    a.href = link.a;
    a.textContent = link.title;

    li.appendChild(a);
    ulLinks.appendChild(li);
  });

  const logo = document.createElement("p");

  logo.className =
    "text-white w-[260px] px-10 text-2xl  font-light tracking-[5px] border-x-2 border-black";
  logo.textContent = "LOGOTIENDA";

  const containLinks = document.createElement("div");
  containLinks.className = "w-[35%] justify-items-end";

  const ulUserLinks = document.createElement("ul");
  ulUserLinks.className = "w-fit grid grid-cols-2 gap-4 ";

  userLinks.forEach((link) => {
    const li = document.createElement("li");
    li.className = link.class;

    const a = document.createElement("a");
    a.href = link.a;

    const span = document.createElement("span");
    span.className = link.class;

    li.appendChild(span);
    span.appendChild(a);
    ulUserLinks.appendChild(li);
    containLinks.appendChild(ulUserLinks);
  });

  nav.appendChild(ulLinks);
  nav.appendChild(logo);
  nav.appendChild(containLinks);
  return nav;
}
