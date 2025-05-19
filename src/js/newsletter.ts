// Newsletter form functionality
export const setupNewsletter = (): void => {
  const form = document.getElementById('newsletter-form') as HTMLFormElement;
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const email = emailInput.value.trim();
    
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    
    // This would normally send data to a server
    // For this demo, just show a success message
    alert(`Thank you for subscribing with ${email}! You'll receive the latest updates about Finland.`);
    
    // Reset form
    form.reset();
  });
};