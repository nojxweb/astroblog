function handleResponsiveMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Fonction pour réinitialiser le menu selon la taille de l'écran
  function resetMenu() {
    if (window.innerWidth >= 636) {
      navLinks.classList.remove('expanded');
      navLinks.style.display = 'flex'; // Menu visible en desktop
      hamburger.style.display = 'none'; // Cacher le hamburger
      hamburger.classList.remove('active'); // Réinitialiser l'état du hamburger
    } else {
      navLinks.classList.remove('expanded');
      navLinks.style.display = 'none'; // Menu caché en mobile
      hamburger.style.display = 'flex'; // Afficher le hamburger
      hamburger.classList.remove('active'); // Réinitialiser l'état du hamburger
    }
  }

  window.addEventListener('resize', resetMenu);
  resetMenu(); // Appel initial
}

document.addEventListener('DOMContentLoaded', () => {
  handleResponsiveMenu();

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Gestion du clic sur le hamburger
  hamburger.addEventListener('click', () => {
    if (window.innerWidth < 636) {
      navLinks.classList.toggle('expanded'); // Ouvre/ferme le menu
      hamburger.classList.toggle('active');  // Transforme en croix
      navLinks.style.display = navLinks.classList.contains('expanded') ? 'block' : 'none';
    }
  });
});
