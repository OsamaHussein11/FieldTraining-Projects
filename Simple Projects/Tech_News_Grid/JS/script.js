const readMoreBtn = document.querySelector(".item5 a");
const extraText = document.querySelector(".extra-text");
const topBtn = document.createElement("button");
topBtn.className = "scroll-top";
topBtn.textContent = "↑";
document.body.appendChild(topBtn);

if (readMoreBtn && extraText) {
  readMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    extraText.classList.toggle("show");
    readMoreBtn.textContent = extraText.classList.contains("show") ? "Show less" : "Read more";
  });
}

window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 350);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
