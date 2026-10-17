// ปุ่ม Say Hello เดิม
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

// Exercise 3: Toggle Theme (สลับธีม สว่าง/มืด)
const themeToggleBtn = document.querySelector('#themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = '☀️ สลับธีม (Light Mode)';
  } else {
    themeToggleBtn.textContent = '🌙 สลับธีม (Dark Mode)';
  }
});
