// Observer for scroll animations
export const setupAnimations = (): void => {
  // Initial animations for hero content
  const heroElements = document.querySelectorAll('.hero-content .fade-in');
  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('active');
    }, 300 * index);
  });

  // Scroll-triggered animations
  const animatedElements = document.querySelectorAll('[data-animation]');
  
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Stop observing after animation is triggered
          animationObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  );
  
  animatedElements.forEach((element) => {
    // Add fade-in class to all animated elements
    if (element.getAttribute('data-animation') === 'fade-in') {
      element.classList.add('fade-in');
    }
    
    animationObserver.observe(element);
  });
  
  // Header scroll effect
  const header = document.getElementById('main-header');
  
  if (header) {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        // Only add the scrolled class when the hero section is no longer visible
        if (!entries[0].isIntersecting) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      },
      {
        root: null,
        rootMargin: '-100px 0px 0px 0px',
        threshold: 0
      }
    );
    
    const hero = document.getElementById('hero');
    if (hero) {
      headerObserver.observe(hero);
    }
  }
};