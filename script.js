// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});

// Particles init
window.addEventListener("load", () => {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 70 },
        color: { value: ["#007acc", "#00c4ff"] },
        shape: { type: "circle" },
        opacity: { value: 0.35 },
        size: { value: 3 },
        line_linked: { enable: true, opacity: 0.2 },
        move: { enable: true, speed: 1.2 }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
      }
    });
  }

  // AOS init
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true
    });
  }
});

// Project filter
function filterProjects(category, event){
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // active btn state
  buttons.forEach(b => b.classList.remove("active"));
  if (event) event.target.classList.add("active");

  // filter with fade
  cards.forEach(card => {
    const show = category === "all" || card.classList.contains(category);
    card.classList.toggle("hide", !show);
  });
}

// Modals
function openModal(id){ const m = document.getElementById(id); if (m) m.style.display = "block"; }
function closeModal(id){ const m = document.getElementById(id); if (m) m.style.display = "none"; }
window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal, .cert-modal").forEach(m => {
    if (e.target === m) m.style.display = "none";
  });
});

// Certificates modal
function openCertModal(id){ const m = document.getElementById(id); if (m) m.style.display = "flex"; }
function closeCertModal(id){ const m = document.getElementById(id); if (m) m.style.display = "none"; }

// Contact form (demo)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});
