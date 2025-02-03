function handleResponsiveMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Fonction pour réinitialiser le menu
  function resetMenu() {
    if (window.innerWidth >= 636) {
      // En mode desktop
      navLinks.classList.remove('expanded');
      hamburger.style.display = 'none';
    } else {
      // En mode mobile
      hamburger.style.display = 'flex';
    }
  }

  // Écoute du redimensionnement
  window.addEventListener('resize', resetMenu);

  // Appel initial
  resetMenu();
}

function addCloseButton() {
  const navLinks = document.querySelector('.nav-links');
  
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '✕'; // Croix simple
  closeButton.classList.add('close-menu-btn');
  
  closeButton.addEventListener('click', () => {
    navLinks.classList.remove('expanded');
    
    // Réaffiche le hamburger
    const hamburger = document.querySelector('.hamburger');
    hamburger.style.display = 'flex';
  });
  
  // Ajoute le bouton de fermeture au début du menu
  navLinks.insertBefore(closeButton, navLinks.firstChild);
}

// Initialisation au chargement du document
document.addEventListener('DOMContentLoaded', () => {
  // Ajoute le bouton de fermeture
  addCloseButton();
  
  // Gère le menu responsive
  handleResponsiveMenu();

  // Gestion du hamburger
  document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    // Ne s'applique que sur mobile
    if (window.innerWidth <= 635) {
      navLinks.classList.add('expanded');
      hamburger.style.display = 'none';
    }
  });
});
