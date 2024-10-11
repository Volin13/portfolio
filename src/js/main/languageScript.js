document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);

  let currentLang =
    searchParams.get('lang') || localStorage.getItem('lang') || 'uk';

  const setLanguage = lang => {
    localStorage.setItem('lang', lang);
  };

  document
    .getElementById('lang-en')
    .setAttribute('href', `${currentUrl}?lang=en`);
  document
    .getElementById('lang-uk')
    .setAttribute('href', `${currentUrl}?lang=uk`);

  document.querySelector(`#lang-${currentLang}`).classList.add('active');

  // if (currentLang === 'uk') {
  //   if (!currentUrl.includes('_uk')) {
  //     window.location.href = currentUrl.replace('.html', '_uk.html');
  //   }
  // } else {
  //   if (currentUrl.includes('_uk')) {
  //     window.location.href = currentUrl.replace('_uk.html', '.html');
  //   }
  // }

  document
    .getElementById('lang-en')
    .addEventListener('click', () => setLanguage('en'));
  document
    .getElementById('lang-uk')
    .addEventListener('click', () => setLanguage('uk'));
});
