const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const toggleIcon = toggle?.querySelector('.material-symbols-rounded');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    if (toggleIcon) toggleIcon.textContent = isOpen ? 'menu' : 'close';
    nav.classList.toggle('open', !isOpen);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      if (toggleIcon) toggleIcon.textContent = 'menu';
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('.signup-form');
if (form) form.addEventListener('submit', (event) => event.preventDefault());
