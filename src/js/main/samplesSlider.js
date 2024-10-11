import Swiper from 'swiper';

import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import samples from '../../data/samples_uk.json';
import engSamples from '../../data/samples_en.json';
import template from '../../templates/samplesItem.hbs';

document.addEventListener('DOMContentLoaded', function () {
  const currentLang = localStorage.getItem('lang') || 'uk';
  if (currentLang === 'uk') {
    document.querySelector('.mainSwiper-wrapper').innerHTML = template(samples);
  } else {
    document.querySelector('.mainSwiper-wrapper').innerHTML =
      template(engSamples);
  }

  // Now you can use Swiper
  const swiper = new Swiper('.mainSwiper', {
    speed: 500,
    direction: 'horizontal',
    grabCursor: true,
    mousewheel: true,
    modules: [Mousewheel, Navigation, Pagination],
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 14,
        height: 288,
      },
      1440: {
        slidesPerView: 2,

        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 3,

        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
