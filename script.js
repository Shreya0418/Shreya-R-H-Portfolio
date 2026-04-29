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
    description:
      "Blockchain-based application designed to enhance transparency, security, and traceability in supply chain operations. The system enables secure transaction handling, product lifecycle tracking, user interaction modules, and improved data security while reducing manipulation risks.",
    tech: "Java, HTML, CSS, Solidity, Ganache, Truffle, MetaMask"
  },

  p2: {
    title: "Movie Recommendation System",
    description:
      "Machine learning-based recommendation system developed using Python that analyzes user preferences and suggests personalized movie recommendations. It uses cosine similarity, Pandas, NumPy, and Flask for recommendation generation and user interaction.",
    tech: "Python, Pandas, NumPy, Scikit-learn, Flask"
  },

  p3: {
    title: "Smart Street Management System",
    description:
      "IoT-based smart street lighting system designed using IR sensors to automate street light control based on movement detection. The project focuses on reducing energy consumption, improving automation, and enhancing public infrastructure efficiency.",
    tech: "IoT, IR Sensors, Breadboard, Basic Electronics"
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
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_0zhfjuj",
      "template_sbraltc",
      this
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("❌ Failed to send message.");
      console.log(error);
    });
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