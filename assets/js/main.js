(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      if (!open) {
        nav.style.display = 'grid';
        nav.style.gridTemplateColumns = '1fr';
        nav.style.gap = '10px';
        nav.style.padding = '10px 0';
        nav.style.position = 'absolute';
        nav.style.top = '56px';
        nav.style.right = '4%';
        nav.style.background = 'rgba(11,13,18,0.95)';
        nav.style.border = '1px solid rgba(255,255,255,0.08)';
        nav.style.borderRadius = '10px';
        nav.style.padding = '10px 12px';
      } else {
        nav.style.display = '';
        nav.removeAttribute('style');
      }
    });
  }
})();