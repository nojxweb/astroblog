function handleResponsiveMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Fonction pour réinitialiser le menu
  function resetMenu() {
    if (window.innerWidth >= 636) {
      navLinks.classList.remove('expanded');
      navLinks.style.display = 'flex'; // Menu visible en desktop
      hamburger.style.display = 'none'; // Cacher le hamburger
    } else {
      navLinks.classList.remove('expanded');
      navLinks.style.display = 'none'; // Menu caché par défaut en mobile
      hamburger.style.display = 'flex'; // Afficher le hamburger
    }
  }

  window.addEventListener('resize', resetMenu);
  resetMenu(); // Appel initial
}

function addCloseButton() {
  const navLinks = document.querySelector('.nav-links');

  // Empêcher les doublons de bouton
  if (!document.querySelector('.close-menu-btn')) {
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.classList.add('close-menu-btn');

    closeButton.addEventListener('click', () => {
      navLinks.classList.remove('expanded');
      navLinks.style.display = 'none';

      // Réaffiche le hamburger
      const hamburger = document.querySelector('.hamburger');
      hamburger.style.display = 'flex';
    });

    navLinks.insertBefore(closeButton, navLinks.firstChild);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addCloseButton();
  handleResponsiveMenu();

  // Gestion du clic sur le hamburger
  document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    if (window.innerWidth <= 635) {
      navLinks.classList.add('expanded');
      navLinks.style.display = 'block'; // Affiche le menu sous le header
      hamburger.style.display = 'none';
    }
  });
});
