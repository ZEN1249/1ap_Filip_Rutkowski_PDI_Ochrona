const button = document.getElementById('changeBackground');
const body = document.body;
let isDark = false;

button.addEventListener('click', () => {
  if (isDark) {
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
  }
  isDark = !isDark;
})