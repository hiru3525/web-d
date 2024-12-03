const menu = document.querySelector('#mobile-menu');
const mediaQuery = window.matchMedia('(min-width: 960px)');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});
const cards = document.querySelectorAll('.glass-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add click handlers for buttons
const addToCartButtons = document.querySelectorAll('.products-section .btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

const viewProductsButtons = document.querySelectorAll('.companies-section .btn');
viewProductsButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to company products...');
    });
});