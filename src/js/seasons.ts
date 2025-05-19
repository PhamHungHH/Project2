// Seasons tab functionality
export const setupSeasons = (): void => {
  const seasonTabs = document.querySelectorAll('.season-tab');
  
  if (!seasonTabs.length) return;
  
  seasonTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      seasonTabs.forEach((t) => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Get season value
      const season = tab.getAttribute('data-season');
      
      // Hide all panels
      document.querySelectorAll('.season-panel').forEach((panel) => {
        panel.classList.remove('active');
      });
      
      // Show selected panel
      if (season) {
        const panel = document.getElementById(`${season}-panel`);
        if (panel) {
          panel.classList.add('active');
        }
      }
    });
  });
};