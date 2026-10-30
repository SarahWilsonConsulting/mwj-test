const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    setMenu(false);
    toggle.focus();
  }
});

// Highlight the menu item for the section in view
const links = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
const targets = links.map((a) => document.querySelector(a.getAttribute("href")));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((a, i) => {
      if (targets[i] === entry.target) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-45% 0px -50% 0px" });
targets.forEach((t) => observer.observe(t));

// Media marquee pause control
const marquee = document.querySelector(".marquee");
const marqueeBtn = document.querySelector(".marquee-toggle");
marqueeBtn.addEventListener("click", () => {
  const paused = marquee.classList.toggle("paused");
  marqueeBtn.setAttribute("aria-pressed", String(paused));
  marqueeBtn.textContent = paused ? "Play" : "Pause";
});

// Contact form: show pathway fields, preselect from section buttons
const pathway = document.getElementById("pathway");
const groups = document.querySelectorAll("fieldset[data-for]");
const showGroup = () => groups.forEach((g) => { g.hidden = g.dataset.for !== pathway.value; });
pathway.addEventListener("change", showGroup);
document.querySelectorAll("a[data-pathway]").forEach((a) => a.addEventListener("click", () => {
  pathway.value = a.dataset.pathway;
  showGroup();
}));
showGroup();

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.querySelector(".form-status").textContent = "Preview only: nothing was sent.";
});
