const header = document.querySelector('.header');

function toggleHeaderState() {
    if (window.scrollY > 10) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

window.addEventListener('scroll', toggleHeaderState);
toggleHeaderState();

document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Клик по меню:', e.target.textContent);
    });
});