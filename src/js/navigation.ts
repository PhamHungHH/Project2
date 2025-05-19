// Navigation functionality
export const setupNavigation = (): void => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuBtn || !navLinks) return;
  
  // Toggle mobile menu
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu when a link is clicked
  const links = navLinks.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      // Calculate header height for offset
      const header = document.getElementById('main-header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Scroll to target with offset
      const yOffset = -headerHeight;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
};