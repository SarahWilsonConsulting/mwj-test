const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

const pathway = document.getElementById("pathway");
const groups = document.querySelectorAll("fieldset[data-for]");
const showGroup = () => groups.forEach((g) => { g.hidden = g.dataset.for !== pathway.value; });
pathway.addEventListener("change", showGroup);
showGroup();

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.querySelector(".form-status").textContent = "Preview only: nothing was sent.";
});
