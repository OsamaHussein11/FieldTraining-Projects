const scrollTopBtn = document.getElementById("scrollTopBtn");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

let openSearch = document.querySelector(".open-search");
let searchBox = document.querySelector(".search-box");
let closeSearch = document.querySelector(".close-search");
let overlay = document.querySelector(".overlay");
let searchBtn = document.querySelector(".search-btn");

openSearch.onclick = function () {
  searchBox.classList.add("active");
  overlay.classList.add("active");
};

closeSearch.onclick = function () {
  searchBox.classList.remove("active");
  overlay.classList.remove("active");
};

overlay.onclick = function () {
  searchBox.classList.remove("active");
  overlay.classList.remove("active");
};

searchBtn.onclick = function () {
  window.location.href = "menu.html";
};

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  },
});


let themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  let icon = themeToggle.querySelector("i");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}