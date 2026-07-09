// Back to top button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 350) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Search form validation in the header
const searchForms = document.querySelectorAll('.search-box');

searchForms.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    const input = form.querySelector('input');
    if (!input.value.trim()) {
      event.preventDefault();
    }
  });
});

// Simple live filtering on the search page
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchMessage = document.getElementById('searchMessage');

if (searchInput && searchResults) {
  const urlText = new URLSearchParams(window.location.search).get('q');
  if (urlText) {
    searchInput.value = urlText;
  }

  function filterArticles() {
    const keyword = searchInput.value.toLowerCase().trim();
    const cards = searchResults.querySelectorAll('.news-card');
    let visibleCount = 0;

    cards.forEach(function (card) {
      const text = card.getAttribute('data-text');
      if (!keyword || text.includes(keyword)) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (!keyword) {
      searchMessage.textContent = 'Type any word to filter the articles below.';
    } else if (visibleCount > 0) {
      searchMessage.textContent = visibleCount + ' article(s) found.';
    } else {
      searchMessage.textContent = 'No articles found matching your search.';
    }
  }

  searchInput.addEventListener('input', filterArticles);
  filterArticles();
}
