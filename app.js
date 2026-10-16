const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active));});
  let count = 0;
  projects.forEach(project => {project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++;});
  document.querySelector('.series-note').hidden = button.dataset.filter !== 'all';
  document.getElementById('result-count').textContent = `Showing ${count} ${count === 1 ? 'lab' : 'labs'}`;
}));
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('menu-toggle');
const dropdown = document.getElementById('portfolio-menu');
function closeMenu(restoreFocus = false) { dropdown.hidden = true; toggle.setAttribute('aria-expanded', 'false'); if (restoreFocus) toggle.focus(); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; dropdown.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); });
dropdown.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('click', event => { if (!event.target.closest('.menu-wrap')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !dropdown.hidden) closeMenu(true); });
document.addEventListener('focusin', event => { if (!event.target.closest('.menu-wrap')) closeMenu(); });
