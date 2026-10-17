/* =========================================================
   Exercise 3 (JavaScript)
   1) ปุ่ม Say Hello  -> เปลี่ยนข้อความใน #status
   2) ปุ่ม Toggle Theme -> สลับโหมดสว่าง/มืด (จำค่าไว้ในเบราว์เซอร์)
   ========================================================= */

/* ---------- 1) เปลี่ยนข้อความ ---------- */
const messages = [
  'Hello from GitHub Pages!',
  'สวัสดีจาก GitHub Pages!',
  'こんにちは from GitHub Pages!',
  'Deploy สำเร็จแล้ว 🎉'
];
let msgIndex = -1;

const statusEl = document.querySelector('#status');

document.querySelector('#helloBtn').addEventListener('click', () => {
  msgIndex = (msgIndex + 1) % messages.length;
  statusEl.textContent = messages[msgIndex];

  // เล่นแอนิเมชันเล็ก ๆ ทุกครั้งที่ข้อความเปลี่ยน
  statusEl.classList.remove('pop');
  void statusEl.offsetWidth;          // รีสตาร์ทแอนิเมชัน
  statusEl.classList.add('pop');
});

/* ---------- 2) Toggle Theme ---------- */
const root = document.documentElement;
const themeBtn = document.querySelector('#themeToggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeBtn.setAttribute('aria-pressed', theme === 'dark');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}

// ตั้งค่าปุ่มให้ตรงกับธีมปัจจุบันตอนโหลดหน้า
themeBtn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ---------- เสริม: แถบ Skills เลื่อนขึ้นเมื่อเลื่อนมาถึง ---------- */
const skills = document.querySelectorAll('.skill');
const fillBar = (el) => {
  el.querySelector('.bar span').style.width = el.dataset.level + '%';
};

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fillBar(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  skills.forEach((s) => io.observe(s));
} else {
  skills.forEach(fillBar);
}

/* ---------- เสริม: ปุ่มคัดลอกอีเมล ---------- */
const copyBtn = document.querySelector('#copyEmail');
copyBtn.addEventListener('click', async () => {
  const original = copyBtn.textContent;
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.copy);
    copyBtn.textContent = 'คัดลอกแล้ว ✓';
  } catch (e) {
    copyBtn.textContent = 'คัดลอกไม่สำเร็จ';
  }
  setTimeout(() => { copyBtn.textContent = original; }, 1800);
});

/* ---------- เสริม: ปีใน footer ---------- */
document.querySelector('#year').textContent = new Date().getFullYear();
