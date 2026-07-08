const scrollTopBtn = document.getElementById("scrollTopBtn");
const header = document.getElementById("mainHeader");

if (scrollTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }

    if (header) {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const recipeSearch = document.querySelector("#hero1 .search input");
const recipeSelects = document.querySelectorAll("#hero1 select");
const recipeCards = document.querySelectorAll("#card .card");

function filterRecipes() {
  if (recipeCards.length === 0) {
    return;
  }

  const searchValue = recipeSearch ? recipeSearch.value.toLowerCase().trim() : "";
  const maxPrep = recipeSelects[0] ? Number(recipeSelects[0].value) : 0;
  const maxCook = recipeSelects[1] ? Number(recipeSelects[1].value) : 0;

  let visibleRecipes = 0;

  recipeCards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();
    const prep = Number(card.getAttribute("data-prep"));
    const cook = Number(card.getAttribute("data-cook"));

    const matchesSearch = cardText.includes(searchValue);
    const matchesPrep = maxPrep === 0 || prep <= maxPrep;
    const matchesCook = maxCook === 0 || cook <= maxCook;

    if (matchesSearch && matchesPrep && matchesCook) {
      card.classList.remove("hide");
      visibleRecipes++;
    } else {
      card.classList.add("hide");
    }
  });

  const recipeCount = document.getElementById("recipeCount");
  const noResults = document.getElementById("noResults");

  if (recipeCount) {
    recipeCount.textContent = visibleRecipes;
  }

  if (noResults) {
    if (visibleRecipes === 0) {
      noResults.classList.add("show");
    } else {
      noResults.classList.remove("show");
    }
  }
}

if (recipeSearch) {
  recipeSearch.addEventListener("input", filterRecipes);
}

recipeSelects.forEach(function (select) {
  select.addEventListener("change", filterRecipes);
});

document.querySelectorAll(".view-recipe").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const card = button.closest(".card");
    const title = card ? card.querySelector("h2").textContent : "Recipe";

    alert(title + " details will be available soon.");
  });
});


const revealItems = document.querySelectorAll(".whatGet, .featured-card, .step-item, .value-card, .stat-box, .tip-card, #built .built, #ready .container, .aboutUs, #card .card");

if (revealItems.length > 0) {
  revealItems.forEach(function (item) {
    item.classList.add("reveal-item");
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
}

filterRecipes();
