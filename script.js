// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Show the resume button only once resume.pdf has been added to the site
const resumeBtn = document.querySelector("[data-resume]");
fetch(resumeBtn.getAttribute("href"), { method: "HEAD" })
  .then((res) => { if (res.ok) resumeBtn.hidden = false; })
  .catch(() => {});
