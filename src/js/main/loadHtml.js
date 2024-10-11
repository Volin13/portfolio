import headerHTML from '../../partials/header.html';
import headerTemplate from '../../templates/header.hbs';
import translations from '../../data/translations.json';

import mainHTML from '../../partials/main.html';
import mainTemplate from '../../templates/main.hbs';
import footerHTML from '../../partials/footer.html';
import footerTemplate from '../../templates/footer.hbs';
import samplesHTML from '../../partials/samples.html';
import samplesTemplate from '../../templates/samples.hbs';
import aboutHTML from '../../partials/about.html';
import aboutTemplate from '../../templates/about.hbs';

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('lang') || 'uk';
  const langContext = translations[currentLang] || {}; // Перевірка наявності мови

  // Функція для вставки шаблонів або HTML
  const renderContent = (elementId, template, html) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (Object.keys(langContext).length) {
        element.innerHTML = template(langContext);
      } else {
        element.innerHTML = html;
      }
    }
  };

  // Вставка головного контенту
  renderContent('main', mainTemplate, mainHTML);
  renderContent('samples', samplesTemplate, samplesHTML);
  renderContent('about', aboutTemplate, aboutHTML);

  // Вставка хедера
  const headers = document.querySelectorAll('.headerThumb');
  headers.forEach(header => {
    if (Object.keys(langContext).length) {
      header.innerHTML = headerTemplate(langContext);
    } else {
      header.innerHTML = headerHTML;
    }
  });

  // Вставка футера
  const footers = document.querySelectorAll('.footerThumb');
  footers.forEach(footer => {
    if (Object.keys(langContext).length) {
      footer.innerHTML = footerTemplate(langContext);
    } else {
      footer.innerHTML = footerHTML;
    }
  });
});
