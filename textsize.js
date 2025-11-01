
// TEXT SIZE ADJUSTER – Annabelle Youkhana

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // Start from current or saved size
  const saved = localStorage.getItem('fontSize');
  let baseSize = saved ? parseFloat(saved) : (parseFloat(getComputedStyle(root).fontSize) || 16);
  root.style.fontSize = baseSize + 'px';

  const incBtn = document.getElementById('increaseText');
  const decBtn = document.getElementById('decreaseText');

  function applySize(size) {
    baseSize = Math.min(Math.max(size, 12), 22);   // clamp 12–22px
    root.style.fontSize = baseSize + 'px';
    localStorage.setItem('fontSize', String(baseSize));
  }

  if (incBtn) incBtn.addEventListener('click', () => applySize(baseSize + 1));
  if (decBtn) decBtn.addEventListener('click', () => applySize(baseSize - 1));
});
