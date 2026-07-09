const header = document.querySelector("header");
const topBtn = document.createElement("button");
topBtn.className = "scroll-top";
topBtn.textContent = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  topBtn.classList.toggle("show", window.scrollY > 300);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactForm = document.querySelector("#contact form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully.");
    contactForm.reset();
  });
}
