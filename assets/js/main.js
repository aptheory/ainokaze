// Dark Mode Logic
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Modal Logic
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = "flex";
        // Get data from the clicked element
        modalImg.src = this.querySelector('img').src;
        modalCaption.textContent = this.getAttribute('data-caption');
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when clicking outside image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});