// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateToggleText(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
});

function updateToggleText(theme) {
    themeBtn.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

// Greeting Alert System
function triggerGreeting() {
    alert("👋 Thanks for visiting my personal website!");
}
