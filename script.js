// Get references to the mobile menu toggle and the navbar menu
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

// Add a click event listener to the mobile menu toggle
mobileMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar menu
  navbarMenu.classList.toggle('active');
});