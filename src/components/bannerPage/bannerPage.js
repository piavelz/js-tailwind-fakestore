export function imageBanner(id, images) {
  const banner = document.getElementById(id).firstChild;
  images.forEach((image) => {
    const img = document.createElement("img");
    const div = document.createElement("div");
    div.className = "w-full h-[30vh]  ";
    img.src = image.image;
    img.alt = image.title;
    img.className = "w-full h-full object-cover";
    div.appendChild(img);
    banner.appendChild(div);
  });
}
