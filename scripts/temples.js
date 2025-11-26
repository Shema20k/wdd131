const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;