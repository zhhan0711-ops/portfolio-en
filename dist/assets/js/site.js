const root = document.body.dataset.root || ".";
const current = document.body.dataset.page || "home";

const navItems = [
  ["home", "Home", "index.html"],
  ["about", "About", "about.html"],
  ["projects", "Projects", "projects.html"],
  ["skills", "Skills", "skills.html"],
  ["resume", "Resume", "resume.html"],
  ["contact", "Contact", "contact.html"],
];

const linkMarkup = navItems.map(([id, label, path]) =>
  `<a class="${current === id || (current === "case" && id === "projects") ? "active" : ""}" href="${root}/${path}">${label}</a>`
).join("");

const header = document.querySelector("[data-site-header]");
if (header) {
  header.innerHTML = `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="${root}/index.html"><span class="brand-mark">ZH</span><span>Zhao Han</span></a><nav class="desktop-nav" aria-label="Primary navigation">${linkMarkup}<a class="nav-cta" href="mailto:zhhan0711@gmail.com">Contact me</a></nav><button class="menu-btn" type="button" aria-expanded="false" aria-label="Open navigation">☰</button></div><nav class="mobile-nav" aria-label="Mobile navigation">${linkMarkup}</nav></header>`;
  const button = header.querySelector(".menu-btn");
  const mobile = header.querySelector(".mobile-nav");
  button.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    button.textContent = open ? "×" : "☰";
  });
}

const footer = document.querySelector("[data-site-footer]");
if (footer) {
  footer.innerHTML = `<footer class="site-footer"><div class="container footer-grid"><div><h2>Let’s turn ideas into dependable software.</h2><p>Backend Engineering · Full-stack Development · AI Applications / LLM Agents</p></div><div class="footer-links"><a href="mailto:zhhan0711@gmail.com">Email</a><a href="https://github.com/zhhan0711-ops" target="_blank" rel="noopener noreferrer">GitHub</a><a href="${root}/resume.html">Resume</a><a href="${root}/projects.html">Projects</a><a href="#top">Back to top</a></div></div></footer>`;
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

