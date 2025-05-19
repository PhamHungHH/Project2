// Theme toggle functionality
export const setupThemeToggle = (): void => {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (!themeToggle) return;
  
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  
  // Set initial theme
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
};