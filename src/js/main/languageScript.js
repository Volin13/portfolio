document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.pathname;

  const fileName = currentUrl.split('/').pop();
  const [name, lang] = fileName.replace('.html', '').split('_');

  let currentLang = lang || localStorage.getItem('lang') || 'uk';
  let currentPage = name || 'index';
  const setLanguage = lang => {
    localStorage.setItem('lang', lang);
  };
  const langEnLink = document.getElementById('lang-en');
  const langUkLink = document.getElementById('lang-uk');
  if (langEnLink && langUkLink) {
    langEnLink.setAttribute('href', `/portfolio/${currentPage}_en.html`);
    langUkLink.setAttribute('href', `/portfolio/${currentPage}_uk.html`);
  }

  document.querySelector(`#lang-${currentLang}`).classList.add('active');

  document
    .getElementById('lang-en')
    .addEventListener('click', () => setLanguage('en'));
  document
    .getElementById('lang-uk')
    .addEventListener('click', () => setLanguage('uk'));
});
