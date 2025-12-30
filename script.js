// FADE ANIMATION
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
faders.forEach(el => observer.observe(el));

// DARK MODE AUTO MALAM
const toggle = document.getElementById('darkToggle');

function autoDarkMode() {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
}
autoDarkMode();

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// SEARCH + CLEAR
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  clearBtn.style.display = keyword ? 'block' : 'none';

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(keyword)
      ? 'block'
      : 'none';
  });
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearBtn.style.display = 'none';
  cards.forEach(card => card.style.display = 'block');
  searchInput.focus();
});