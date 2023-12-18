const trooper1 = document.getElementById('hero-img__trooper-frnt');
const trooper2 = document.getElementById('hero-img__trooper-back');

trooper1.addEventListener('mouseenter', () => {
    trooper2.classList.add('visible');
    // trooper1.classList.remove('visible');
});

trooper1.addEventListener('mouseleave', () => {
    trooper2.classList.remove('visible');
    // trooper1.classList.add('visible');
});