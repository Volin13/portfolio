import Swiper from 'swiper';
import {
  Pagination,
  Navigation,
  Controller,
  EffectFade,
  Zoom,
} from 'swiper/modules';

import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const mainSliders = document.querySelectorAll('.mainSlider');
  const thumbnailSliders = document.querySelectorAll('.thumbnailSlider');

  mainSliders.forEach((mainSliderElement, index) => {
    const mainSliderId = mainSliderElement.dataset.id;

    const thumbnailSliderElement = document.querySelector(
      `.thumbnailSlider-${mainSliderId}`
    );

    if (mainSliderElement && thumbnailSliderElement) {
      const mainSwiper = new Swiper(mainSliderElement, {
        modules: [Navigation, Pagination, Controller, EffectFade, Zoom],

        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        zoom: {
          maxRatio: 5,
        },
        speed: 1000,
      });

      const thumbnailSwiper = new Swiper(thumbnailSliderElement, {
        modules: [Navigation, Pagination, Controller],
        slidesPerView: 3,
        spaceBetween: 14,
        slideToClickedSlide: true,
        centeredSlides: true,
        watchSlidesProgress: true,
        controller: {
          control: mainSwiper,
        },
        speed: 1000,
        breakpoints: {
          320: {
            spaceBetween: 10,
          },
          768: {
            spaceBetween: 14,
          },
        },
      });

      if (mainSwiper.controller && thumbnailSwiper.controller) {
        mainSwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = mainSwiper;
      } else {
        console.error('Controller не ініціалізовано');
      }
    } else {
      console.error('Не знайдено відповідних елементів для слайдерів');
    }
  });
});
