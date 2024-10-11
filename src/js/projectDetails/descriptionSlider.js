import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
  // Now you can use Swiper
  const swiper = new Swiper('.descriptionSwiper', {
    speed: 500,
    lazy: true,
    direction: 'horizontal',
    grabCursor: true,
    spaceBetween: 30,
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3500,
      pauseOnMouseEnter: true,
    },
    speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
      dynamicMainBullets: 3,
      clickable: true,
    },
    navigation: {
      nextEl: '.descriptionSwiper__button-next',
      prevEl: '.descriptionSwiper__button-prev',
    },
  });
});
