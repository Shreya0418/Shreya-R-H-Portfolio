// =======================
// SCROLL + NAVBAR EFFECT (MERGED)
// =======================
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;

  const bar = document.getElementById("scrollProgress");
  if (bar) bar.style.width = scrolled + "%";

  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});


// =======================
// LOAD EVENTS (Particles + AOS)
// =======================
window.addEventListener("load", () => {

  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 70 },
        color: { value: ["#00c4ff", "#3b82f6"] },
        size: { value: 3 },
        opacity: { value: 0.3 },
        move: { speed: 1.2 },
        line_linked: { enable: true, opacity: 0.2 }
      }
    });
  }

  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true
    });
  }
});


// =======================
// PROJECT DATA
// =======================
const projectData = {
  p1: {
    title: "Supply Chain Management System",
    description: "Blockchain-based system for secure product tracking and transparency.",
    tech: "Blockchain"
  },
  p2: {
    title: "Movie Recommendation System",
    description: "Machine learning system that recommends movies based on user preferences.",
    tech: "Machine Learning"
  },
  p3: {
    title: "Smart Street Management System",
    description: "IoT-based system for smart street automation and energy saving.",
    tech: "IoT"
  }
};


// =======================
// MODAL FUNCTIONS
// =======================
function openModal(id) {
  const p = projectData[id];
  if (!p) return;

  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDescription").innerText = p.description;
  document.getElementById("modalTech").innerText = p.tech;

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}


// =======================
// DOM READY
// =======================
document.addEventListener("DOMContentLoaded", () => {

  // CONTACT FORM
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("✅ Message sent successfully!");
      form.reset();
    });
  }

  // SCROLL ANIMATION
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
  });

  // MOBILE MENU
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});


// =======================
// CLICK OUTSIDE MODAL CLOSE
// =======================
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});