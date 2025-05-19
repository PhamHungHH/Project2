import './style.css';
import { setupDestinations } from './js/destinations';
import { setupGallery } from './js/gallery';
import { setupAnimations } from './js/animations';
import { setupNavigation } from './js/navigation';
import { setupSeasons } from './js/seasons';
import { setupThemeToggle } from './js/theme';
import { setupNewsletter } from './js/newsletter';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupDestinations();
  setupGallery();
  setupAnimations();
  setupSeasons();
  setupThemeToggle();
  setupNewsletter();
});