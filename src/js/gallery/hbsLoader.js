import projects from '../../templates/galleryProjects.hbs';

import samplesUk from '../../data/samples_uk.json';
import samplesEn from '../../data/samples_en.json';
document.addEventListener('DOMContentLoaded', function () {
  const currentLang = localStorage.getItem('lang') || 'uk';
  if (currentLang === 'uk') {
    document.querySelector('.gallery__list').innerHTML = projects(samplesUk);
  } else {
    document.querySelector('.gallery__list').innerHTML = projects(samplesEn);
  }
});
