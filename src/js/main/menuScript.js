'use strict';

document.addEventListener('click', handleMenu);
const langInStorage = localStorage.getItem('lang');
const currentLang = langInStorage || 'uk';

function handleMenu(e) {
  const targetEl = e.target;
  if (targetEl.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
  if (targetEl.closest('[data-goto]')) {
    e.preventDefault();
    if (document.documentElement.classList.contains('menu-open')) {
      document.documentElement.classList.remove('menu-open');
    }
    const gotoId = targetEl.closest('[data-goto]').dataset.goto;
    const homeUrl = `/portfolio/index_${currentLang}.html`;
    const currentUrl = window.location.pathname + window.location.hash;

    if (homeUrl === currentUrl) {
      document.getElementById(gotoId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = homeUrl + `#${gotoId}`;
    }
  }
}
