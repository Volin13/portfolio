document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('projects-list');
  const currentLang = localStorage.getItem('lang');

  projectList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      const projectId = event.target.getAttribute('data-id');
      window.location.href = `projectDetails.html?id=${projectId}?lang=${currentLang}`;
    }
  });
});
