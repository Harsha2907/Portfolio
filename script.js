// Resume Button Download
document.getElementById("resumeBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Harsha H R.pdf"; // Ensure the file is in the same folder
  link.download = "Harsha_HR_Resume.pdf";
  link.click();
});
function resumeAlert() {
  alert("✅ Resume is downloading...");
}
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    const match = category === "all" || card.dataset.category === category;
    card.style.display = match ? "block" : "none";
  });
}
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    const match = category === "all" || card.dataset.category === category;
    card.style.display = match ? "block" : "none";
  });
}
// Open modal
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Filter project cards by category
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // Set active class
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filter cards
  cards.forEach(card => {
    const type = card.getAttribute("data-category");
    if (category === "all" || type === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
// Filter Function
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Modal Functionality
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
// TYPEWRITER EFFECT
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  logo.classList.add("typewriter");
});

// MODAL LOGIC
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// PROJECT FILTERING
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category) ? "block" : "none";
    }
  });
}

// PARTICLES.JS INIT (Optional but awesome!)
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#6c63ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 4 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

// RESUME DOWNLOAD FEEDBACK
function resumeAlert() {
  alert("Your resume will now download.");
}

// OPTIONAL: Animate On Scroll
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true
});
