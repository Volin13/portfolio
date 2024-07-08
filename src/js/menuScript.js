'use strict';

document.addEventListener('click', hendleMenu);

function hendleMenu(e) {
  const targetEl = e.target;
  if (targetEl.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
  if (targetEl.closest('[data-goto]')) {
    document.documentElement.classList.contains('menu-open')
      ? document.documentElement.classList.remove('menu-open')
      : null;
    const goto = targetEl.closest('[data-goto]').dataset.goto;
    const goToEl = document.querySelector(goto);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (goToEl) {
      window.scrollTo({
        top: goToEl.offsetTop - (headerHeight + 15),
        behavior: 'smooth',
      });
    }
    e.preventDefault();
  }
}
