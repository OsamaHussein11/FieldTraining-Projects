const header = document.getElementById("mainHeader");
const links = document.querySelectorAll("#mainHeader a");
const sections = document.querySelectorAll("main section[id]");
const menuToggle = document.querySelector(".menu-toggle");
const navBox = document.querySelector("#mainHeader .rdiv");

const topBtn = document.createElement("button");
topBtn.className = "scroll-top";
topBtn.textContent = "↑";
document.body.appendChild(topBtn);

function setActiveLink() {
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
}

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 80) {
      item.classList.add("show-reveal");
    }
  });
}

function animateProgress() {
  const progressLines = document.querySelectorAll(".progress-line span");

  progressLines.forEach((line) => {
    const lineTop = line.getBoundingClientRect().top;
    if (lineTop < window.innerHeight - 80) {
      line.style.width = line.dataset.width;
    }
  });
}

let countersStarted = false;

function animateCounters() {
  const statsSection = document.querySelector("#stats");
  if (!statsSection || countersStarted) return;

  if (statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
    countersStarted = true;
    const counters = document.querySelectorAll(".stat-card h3");

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let count = 0;
      const speed = Math.max(1, Math.floor(target / 50));

      const updateCounter = setInterval(() => {
        count += speed;

        if (count >= target) {
          counter.textContent = target + (target === 100 ? "%" : "+");
          clearInterval(updateCounter);
        } else {
          counter.textContent = count;
        }
      }, 25);
    });
  }
}

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  topBtn.classList.toggle("show", window.scrollY > 350);
  setActiveLink();
  revealElements();
  animateProgress();
  animateCounters();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBox.classList.remove("open");
  });
});

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navBox.classList.toggle("open");
  });
}

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been received.");
    contactForm.reset();
  });
}

setActiveLink();
revealElements();
animateProgress();
animateCounters();
