// Lightbox for gallery images + current year in the footer.
(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const buttons = document.querySelectorAll('[data-lightbox]');
  if (!buttons.length) return;

  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  const img = box.querySelector('img');

  const close = () => box.classList.remove('open');
  buttons.forEach((b) => b.addEventListener('click', () => {
    img.src = b.dataset.lightbox;
    img.alt = b.querySelector('img')?.alt || '';
    box.classList.add('open');
  }));
  box.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
