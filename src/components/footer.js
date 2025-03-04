export default function Footer() {
  const footer = document.createElement("footer");
  footer.className = "h-[50vh] p-40 grid grid-cols-4";

  const sections = [
    { title: "LOGOTIENDA", paragraphs: ["Descripción breve del logo."] },
    {
      title: "Contacto",
      paragraphs: ["Email: contacto@tienda.com", "Tel: +123456789"],
    },
    {
      title: "Redes Sociales",
      paragraphs: ["Instagram: @tienda", "Facebook: /tienda"],
    },
    {
      title: "Información",
      paragraphs: ["Términos y condiciones", "Política de privacidad"],
    },
  ];

  sections.forEach(({ title, paragraphs }) => {
    const section = document.createElement("div");

    const titleElement = document.createElement("p");
    titleElement.textContent = title.toUpperCase();
    section.appendChild(titleElement);

    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      section.appendChild(p);
    });
    footer.appendChild(section);
  });

  return footer;
}
