const links = {
  one: "./pages/pdf-manzano.html",
  two: "https://www.linkedin.com/in/gilvam-oliveira/",
  three: "./pages/manzano.html",
  four: "./pages/faccat.html",
  five: "./pages/pdf-faccat.html",
};
const openLink = (id) => {
  const href = links[id];
  window.setTimeout(() => {
    if (id === "one" || id === "two" || id === "five")
      window.open(href, "_blank", "noopener");
    else window.location.href = href;
  }, 180);
};
Object.keys(links).forEach((id) =>
  document
    .querySelector(`#${id}`)
    .addEventListener("click", () => openLink(id)),
);
window.addEventListener("keydown", (event) => {
  const id =
    event.key.toLowerCase() === "m"
      ? "three"
      : event.key.toLowerCase() === "f"
        ? "four"
        : null;
  if (!id || event.repeat) return;
  document.querySelector(`#${id}`).dataset.pressed = "true";
  openLink(id);
});
window.addEventListener("keyup", (event) => {
  if (event.key.toLowerCase() === "m")
    document.querySelector("#three").dataset.pressed = "false";
  if (event.key.toLowerCase() === "f")
    document.querySelector("#four").dataset.pressed = "false";
});
