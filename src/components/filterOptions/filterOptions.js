export function handleFilterOptions(id) {
  const options = document.getElementById(id);
  const fixed = options.querySelector("#filters");
  const footer = document.querySelector("#footer");

  function optionsStyles(add) {
    console.log("dentro de optStyles", add);
    const method = add ? "add" : "remove";
    fixed.classList[method]("fixed", "top-[90px]");
  }

  document.addEventListener("scroll", () => {
    const top = options.offsetTop;
    const footerRect = footer.getBoundingClientRect();
    const isFixed = window.scrollY >= top - 100;

    const isAboveFooter = footerRect.top <= window.innerHeight; // Si el footer está en pantalla

    if (isFixed && !isAboveFooter) {
      optionsStyles(isFixed);
    } else if (isAboveFooter) {
      optionsStyles(false);
      fixed.classList.add("absolute", "bottom-0");
    } else {
      optionsStyles(isFixed);
      fixed.classList.remove("absolute", "bottom-0");
    }
  });
}
