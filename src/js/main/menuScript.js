'use strict';

document.addEventListener('click', handleMenu);

function handleMenu(e) {
  const targetEl = e.target;

  if (targetEl.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (targetEl.closest('[data-goto]')) {
    e.preventDefault();

    document.documentElement.classList.contains('menu-open') &&
      document.documentElement.classList.remove('menu-open');

    const gotoId = targetEl.closest('[data-goto]').dataset.goto;

    const homeUrl = '/#' + gotoId;

    window.location.href = homeUrl;
  }
}
