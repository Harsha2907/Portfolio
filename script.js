// =======================
// SCROLL PROGRESS BAR
// =======================
window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});

// =======================
// PARTICLES & AOS INIT
// =======================
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

  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true
    });
  }
});

// =======================
// PROJECT FILTER
// =======================
function filterProjects(category, event) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  cards.forEach(card => {
    const show = category === "all" || card.classList.contains(category);
    card.classList.toggle("hide", !show);
  });
}

// =======================
// PROJECT DATA (ADDED)
// =======================
const projectData = {
  project1: {
    title: "Anti-Bike Theft System",
    duration: "Feb 2023",
    description:
      "IoT-based theft alert system that detects unauthorized bike movement using motion sensors and hardware integration.",
    tech: "IoT, Motion Sensors, Hardware Integration"
  },

  project3: {
    title: "Employee Performance Dashboard",
    duration: "Sep 2024 – Dec 2024",
    description:
      "Web-based dashboard developed to analyze employee performance using interactive data visualization.",
    tech: "HTML, CSS, JavaScript, PHP, MySQL, Tableau"
  },

  project4: {
    title: "In-Hospital Pharmacy Integration",
    duration: "Feb 2025 – Jan 2026",
    description:
      "Android-based pharmacy system developed to automate prescriptions and improve hospital workflow efficiency.",
    tech:
      "Android Studio, Java, XML, PHP APIs, MySQL, Bootstrap, REST API"
  }
};

// =======================
// PROJECT MODAL (ADDED)
// =======================
function openModal(projectId) {
  const p = projectData[projectId];
  if (!p) return;

  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDescription").innerText = p.description;
  document.getElementById("modalDuration").innerText = p.duration;
  document.getElementById("modalTech").innerText = p.tech;

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", e => {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) modal.style.display = "none";
});

// =======================
// CERTIFICATE MODAL (UNCHANGED)
// =======================
function openCertModal(id) {
  const m = document.getElementById(id);
  if (m) m.style.display = "flex";
}

function closeCertModal(id) {
  const m = document.getElementById(id);
  if (m) m.style.display = "none";
}

// =======================
// CONTACT FORM (DEMO)
// =======================
function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");
    const submitBtn = form.querySelector('button[type="submit"]');

    // Disable button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';

    emailjs.sendForm(
        "service_jrh2mkg",
        "template__gh11lzHhNEr_fxg",
        form
    )
    .then(() => {
        messageBox.innerHTML = "✅ Message sent successfully!";
        messageBox.style.color = "#10b981";
        form.reset();
        
        // Re-enable button
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i><div class="btn-glow"></div>';
            messageBox.innerHTML = '';
        }, 3000);
    })
    .catch((error) => {
        console.error(error);
        messageBox.innerHTML = "❌ Failed to send message. Please try again.";
        messageBox.style.color = "#ef4444";
        
        // Re-enable button
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i><div class="btn-glow"></div>';
        }, 3000);
    });
}
document.body.style.overflow = "hidden"; // modal open
document.body.style.overflow = "";       // modal close
