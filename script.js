// ---- Dark Mode ----
const root = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const toggleLabel = document.getElementById('toggleLabel');
const toggleIcon = document.getElementById('toggleIcon');

function setTheme(theme){
  root.setAttribute('data-theme', theme);
  toggleBtn.setAttribute('aria-pressed', theme === 'dark');
  toggleLabel.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

setTheme('light');

// ---- Countdown timer ----
// NOTE: update this date to your actual internship end date/time.
const internshipEnd = new Date('2026-09-15T17:00:00');

const dEl = document.getElementById('cd-days');
const hEl = document.getElementById('cd-hours');
const mEl = document.getElementById('cd-mins');
const sEl = document.getElementById('cd-secs');

function pad(n){ return String(n).padStart(2, '0'); }

function updateCountdown(){
  const now = new Date();
  let diff = internshipEnd - now;

  if (diff <= 0){
    dEl.textContent = '00';
    hEl.textContent = '00';
    mEl.textContent = '00';
    sEl.textContent = '00';
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);
  const secs = Math.floor(diff / 1000);

  dEl.textContent = pad(days);
  hEl.textContent = pad(hours);
  mEl.textContent = pad(mins);
  sEl.textContent = pad(secs);
}

updateCountdown();
const timerId = setInterval(updateCountdown, 1000);