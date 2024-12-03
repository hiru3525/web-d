const menu = document.querySelector('#mobile-menu');
const mediaQuery = window.matchMedia('(min-width: 960px)');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement.querySelector('h3').textContent;
        const price = this.parentElement.querySelector('.price').textContent;
        alert(`Added to cart:\n${product}\n${price}`);
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});