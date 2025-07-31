// Resume Download Button with Alert
document.getElementById("resumeBtn").addEventListener("click", () => {
  alert("✅ Resume is downloading...");
  const link = document.createElement("a");
  link.href = "Harsha H R.pdf"; // Make sure the file is in the same folder
  link.download = "Harsha_HR_Resume.pdf";
  link.click();
});

// Filter Projects by Category with event param for active button
function filterProjects(category, event) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  if (event) {
    event.target.classList.add("active");
  }

  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (category === "all" || cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Open Modal by ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

// Close Modal by ID
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Contact form submission alert & reset
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Typewriter effect trigger on logo
document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.classList.add("typewriter");
  }
});

// Initialize particles.js if loaded
if (window.particlesJS) {
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
}

// Initialize AOS (Animate on Scroll) if loaded
if (window.AOS) {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true
  });
}
function filterProjects(category, event) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // Set active class on clicked button
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Show/hide projects
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Project filtering function
function filterProjects(category, event) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function filterProjects(category, event) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Update active button style
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Optional: Close modal on outside click
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
};
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true
});
document.getElementById("resumeBtn").addEventListener("click", () => {
  alert("✅ Resume is downloading...");
  const link = document.createElement("a");
  link.href = "Harsha H R.pdf"; // Must match the exact filename
  link.download = "Harsha_HR_Resume.pdf";
  link.click();
});
