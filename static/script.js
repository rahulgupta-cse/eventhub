// Animate stat numbers on page load
document.querySelectorAll('.stat-value').forEach(el => {
  const raw = el.textContent.trim();
  const num = parseInt(raw.replace(/[^0-9]/g, ''));
  const suffix = raw.includes('%') ? '%' : '';
  if (isNaN(num) || num === 0) return;
  let cur = 0;
  const step = Math.max(1, Math.ceil(num / 40));
  const timer = setInterval(() => {
    cur = Math.min(cur + step, num);
    el.textContent = cur + suffix;
    if (cur >= num) clearInterval(timer);
  }, 20);
});

// Animate progress bars
document.querySelectorAll('.progress-fill, .mini-progress-fill').forEach(el => {
  const w = el.style.width;
  el.style.width = '0';
  requestAnimationFrame(() => {
    setTimeout(() => {
      el.style.transition = 'width 0.7s cubic-bezier(0.4,0,0.2,1)';
      el.style.width = w;
    }, 100);
  });
});

// Auto dismiss alerts
document.querySelectorAll('.alert').forEach(alert => {
  setTimeout(() => {
    alert.style.transition = 'opacity 0.4s, transform 0.4s';
    alert.style.opacity = '0';
    alert.style.transform = 'translateY(-6px)';
    setTimeout(() => alert.remove(), 400);
  }, 5000);
});

// Sidebar toggle for mobile
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Show mobile toggle button on small screens
if (window.innerWidth < 900) {
  const btn = document.getElementById('sidebarToggle');
  if (btn) btn.style.display = 'flex';
}
window.addEventListener('resize', () => {
  const btn = document.getElementById('sidebarToggle');
  if (!btn) return;
  btn.style.display = window.innerWidth < 900 ? 'flex' : 'none';
});
