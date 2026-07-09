const scrollTopBtn = document.querySelector("#scroll-top");
const counters = document.querySelectorAll(".counter");
const playVideoBtn = document.querySelector("#play-video");

let counterStarted = false;

if (scrollTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }

    startCounters();
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function startCounters() {
  if (counterStarted || counters.length === 0) {
    return;
  }

  const firstCounter = counters[0];

  if (window.scrollY >= firstCounter.offsetTop - 600) {
    counters.forEach(function (counter) {
      const target = Number(counter.getAttribute("data-target"));
      let count = 0;
      const speed = Math.ceil(target / 120);

      const updateCounter = setInterval(function () {
        count += speed;

        if (count >= target) {
          counter.textContent = target;
          clearInterval(updateCounter);
        } else {
          counter.textContent = count;
        }
      }, 40);
    });

    counterStarted = true;
  }
}

if (playVideoBtn) {
  playVideoBtn.addEventListener("click", function () {
    alert("Presentation video will be available soon.");
  });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    faqItems.forEach(function (faq) {
      if (faq !== item) {
        faq.classList.remove("open");
      }
    });

    item.classList.toggle("open");
  });
});