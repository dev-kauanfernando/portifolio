const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement;

themeBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');

    themeIcon.classList.toggle('bi-sun-fill', !isDark);
    themeIcon.classList.toggle('bi-moon-fill', isDark);
});

const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');

    menuIcon.classList.toggle('bi-list', !isActive);
    menuIcon.classList.toggle('bi-x', isActive);
});

const navLinkItems = navLinks.querySelectorAll('a');

navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
    });
});