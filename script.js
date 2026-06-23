/* ===========================
   RUHANI SPHERE – script.js
   =========================== */

// ========== DATA IN ENGLISH ==========
const rohaniServices = [
  { name: "Black Magic Removal",       icon: "🔱", desc: "Complete elimination of black magic blockages through Quranic verses" },
  { name: "Divorce Prevention",        icon: "💍", desc: "Spiritual guidance aimed at protecting and sustaining family relations" },
  { name: "Jinn & Evil Spirit Cure",   icon: "🌙", desc: "Deliverance from the harmful impacts of jinns and negative energy shadows" },
  { name: "Marriage Obstacles Removal", icon: "💒", desc: "Eliminating unforeseen hurdles or systematic blockages in marriage alignments" },
  { name: "Business Blockage Cure",    icon: "💼", desc: "Remedying spiritual elements behind chronic business failures and losses" },
  { name: "Blessing of Children",      icon: "🤲", desc: "Focused spiritual prayers and treatments for couples seeking progeny" },
  { name: "Relationship Harmony",      icon: "🤝", desc: "Resolving deep disputes and creating mutual affection between family relatives" },
  { name: "Chronic Ailments Relief",   icon: "🌿", desc: "Seeking pure holistic recovery from physical diseases using prophetic remedies" },
  { name: "Heart & Soul Healing",      icon: "❤️‍🩹", desc: "Spiritual healing designed for inner peace and heart-related worries" },
  { name: "Unexplained Illness Cure",  icon: "🩺", desc: "Treatment for elusive bodily illnesses induced by spiritual constraints" },
  { name: "Family & Child Reform",     icon: "👨‍👩‍👧", desc: "Guiding disobedient family members effectively back to the righteous path" },
  { name: "Marital Peace & Guidance",  icon: "🕊️", desc: "Restoring natural mutual understanding and love between life spouses" },
];

const quranCourses = [
  {
    name: "Qaida",
    icon: "📗",
    desc: "The essential guide to starting Quran reading – mastering foundational alphabets",
    slug: "Qaida"
  },
  {
    name: "Tajweed",
    icon: "🎙️",
    desc: "Learn highly accurate pronunciation and beautiful acoustic rhythmic rules",
    slug: "Tajweed"
  },
  {
    name: "Translation",
    icon: "🌍",
    desc: "Gain deep literal insights by translating the holy verses accurately",
    slug: "Translation"
  },
  {
    name: "Tafseer",
    icon: "💡",
    desc: "Attain comprehensive exegesis and deep contextual wisdom of Islamic texts",
    slug: "Tafseer"
  },
];

const WA_NUMBER = "923038853329";  // WhatsApp number (intl format)

// Track selection details globally
let currentSelectionType = null;   // 'service', 'course', or null
let currentSelectionValue = "";

// ========== POPULATE DROPDOWNS ==========
function populateDropdowns() {
  const serviceSelect = document.getElementById("selectService");
  const courseSelect = document.getElementById("selectCourse");

  if (serviceSelect) {
    serviceSelect.innerHTML = `<option value="">-- Choose a Service --</option>` + 
      rohaniServices.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
  }
  if (courseSelect) {
    courseSelect.innerHTML = `<option value="">-- Choose a Course --</option>` + 
      quranCourses.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
  }
}

// ========== RENDER CARDS ==========
function renderRohaniServices() {
  const grid = document.getElementById("rohaniServicesGrid");
  grid.innerHTML = rohaniServices.map(s => `
    <div class="service-card animate-on-scroll">
      <div class="card-icon">${s.icon}</div>
      <div class="card-name">${s.name}</div>
      <div class="card-desc">${s.desc}</div>
      <a href="#contact" class="card-btn" onclick="openContactForService('${s.name}')">📲 Contact Us</a>
    </div>
  `).join("");
}

function renderCourses() {
  const grid = document.getElementById("coursesGrid");
  grid.innerHTML = quranCourses.map(c => `
    <div class="course-card animate-on-scroll">
      <div class="card-icon">${c.icon}</div>
      <div class="card-name">${c.name}</div>
      <div class="card-desc">${c.desc}</div>
      <a href="#contact" class="card-btn" onclick="openContactForCourse('${c.name}')">📲 Register Now</a>
    </div>
  `).join("");
}

// ========== CONTACT FORM LOGIC ==========
function resetContactForm() {
  // Revert back to direct navigation state showing dual dropdown options
  document.getElementById("generalDropdownsGroup").style.display = "block";
  document.getElementById("autofillFieldGroup").style.display = "none";
  document.getElementById("messageFieldGroup").style.display = "block";

  document.getElementById("selectService").value = "";
  document.getElementById("selectCourse").value = "";
  document.getElementById("autofillValue").value = "";
  document.getElementById("message").value = "";
  document.getElementById("message").placeholder = "Write your question or concern here...";

  currentSelectionType = null;
  currentSelectionValue = "";
}

function openContactForCourse(courseName) {
  // Executed when choosing from Course Card
  document.getElementById("generalDropdownsGroup").style.display = "none";
  document.getElementById("autofillFieldGroup").style.display = "block";
  document.getElementById("autofillLabel").textContent = "Selected Course";
  document.getElementById("autofillValue").value = courseName;
  document.getElementById("messageFieldGroup").style.display = "none";

  currentSelectionType = "course";
  currentSelectionValue = courseName;
}

function openContactForService(serviceName) {
  // Executed when choosing from Service Card
  document.getElementById("generalDropdownsGroup").style.display = "none";
  document.getElementById("autofillFieldGroup").style.display = "block";
  document.getElementById("autofillLabel").textContent = "Selected Service";
  document.getElementById("autofillValue").value = serviceName;
  document.getElementById("messageFieldGroup").style.display = "block";
  document.getElementById("message").placeholder = `Write your details or question regarding ${serviceName} here...`;

  currentSelectionType = "service";
  currentSelectionValue = serviceName;
}

function handleGeneralServiceSelect() {
  const val = document.getElementById("selectService").value;
  if (val) {
    // Exclude conflicting course choice
    document.getElementById("selectCourse").value = "";
    document.getElementById("messageFieldGroup").style.display = "block";
    document.getElementById("message").placeholder = `Write your details or question regarding ${val} here...`;
    currentSelectionType = "service";
    currentSelectionValue = val;
  } else {
    currentSelectionType = null;
    currentSelectionValue = "";
    document.getElementById("message").placeholder = "Write your question or concern here...";
  }
}

function handleGeneralCourseSelect() {
  const val = document.getElementById("selectCourse").value;
  if (val) {
    // Exclude conflicting service choice
    document.getElementById("selectService").value = "";
    document.getElementById("messageFieldGroup").style.display = "none";
    currentSelectionType = "course";
    currentSelectionValue = val;
  } else {
    currentSelectionType = null;
    currentSelectionValue = "";
    document.getElementById("messageFieldGroup").style.display = "block";
    document.getElementById("message").placeholder = "Write your question or concern here...";
  }
}

function sendWhatsApp() {
  const name    = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("waNumber").value.trim();
  const country = document.getElementById("country").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !country) {
    alert("Please fill in your Name, WhatsApp Number, and Country.");
    return;
  }

  let text = `Assalaamu Alaikum,\n\n`;
  text += `*Name:* ${name}\n`;
  text += `*WhatsApp:* ${phone}\n`;
  text += `*Country:* ${country}\n`;

  if (currentSelectionType === "course") {
    text += `*Course:* ${currentSelectionValue}\n`;
    text += `\nI am interested in registering for the ${currentSelectionValue} course. Please provide details.`;
  } else if (currentSelectionType === "service") {
    text += `*Service:* ${currentSelectionValue}\n`;
    if (message) {
      text += `\n*Inquiry / Details:*\n${message}`;
    }
  } else {
    if (message) {
      text += `\n*Message / Question:*\n${message}`;
    }
  }

  text += `\n\n_(Sent via Ruhani Sphere website)_`;

  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank");
}

// ========== HERO SLIDER ==========
function initHeroSlider() {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("heroDots");
  let current = 0;
  let timer;

  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "hero-dot" + (i === 0 ? " active" : "");
    btn.setAttribute("aria-label", `Slide ${i + 1}`);
    btn.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(btn);
  });

  function goTo(idx) {
    slides[current].classList.remove("active");
    document.querySelectorAll(".hero-dot")[current].classList.remove("active");
    current = idx;
    slides[current].classList.add("active");
    document.querySelectorAll(".hero-dot")[current].classList.add("active");
  }

  function next() { goTo((current + 1) % slides.length); }

  timer = setInterval(next, 4500);

  document.querySelector(".hero").addEventListener("mouseenter", () => clearInterval(timer));
  document.querySelector(".hero").addEventListener("mouseleave", () => { timer = setInterval(next, 4500); });
}

// ========== NAVBAR ==========
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  function observeAll() {
    document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
  }

  observeAll();
  setTimeout(observeAll, 100);
}

// Smooth scroll for internal links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        
        // Reset to initial general state if user uses contact links directly
        if (id === "contact") {
          resetContactForm();
        }

        const navH = document.getElementById("navbar").offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// Active nav link on scroll
function initActiveNavHighlight() {
  const sections = ["home", "rohani-services", "courses", "about", "contact"];
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const navH = document.getElementById("navbar").offsetHeight;
      if (window.scrollY >= el.offsetTop - navH - 60) current = id;
    });
    links.forEach(link => {
      link.style.color = "";
      const href = link.getAttribute("href").replace("#", "");
      if (href === current) link.style.color = "var(--gold)";
    });
  });
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
  populateDropdowns();
  renderRohaniServices();
  renderCourses();
  initHeroSlider();
  initNavbar();
  initScrollAnimations();
  initSmoothScroll();
  initActiveNavHighlight();
  resetContactForm();
});
