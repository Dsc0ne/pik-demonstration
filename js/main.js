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

// Мобильное меню
const navToggle = document.createElement('button');
navToggle.className = 'nav__toggle';
navToggle.innerHTML = '☰';
navToggle.setAttribute('aria-label', 'Открыть меню');

const navList = document.querySelector('.nav__list');
const headerContainer = document.querySelector('.header__container');

// Вставляем кнопку переключения
headerContainer.style.position = 'relative';
headerContainer.appendChild(navToggle);

// Обработчик клика по бургер-меню
navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('nav__list--active');
    navToggle.innerHTML = navList.classList.contains('nav__list--active') ? '✕' : '☰';
});

// Закрытие меню при клике на пункт
document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navList.classList.remove('nav__list--active');
            navToggle.innerHTML = '☰';
        }
    });
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
        navList.classList.remove('nav__list--active');
        navToggle.innerHTML = '☰';
    }
});

// Закрытие меню при ресайзе
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navList.classList.remove('nav__list--active');
        navToggle.innerHTML = '☰';
    }
});
