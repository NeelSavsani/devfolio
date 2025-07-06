const menu = document.getElementById('mobileMenu');
const toggleBtn = document.getElementById('menuToggle');
const body = document.body;

function toggleMenu() {
    menu.classList.toggle('show');
    body.classList.toggle('blurred', menu.classList.contains('show'));
    toggleBtn.textContent = menu.classList.contains('show') ? '×' : '☰';
}

function toggleTheme(event) {
    event.preventDefault(); // 🔒 Prevent scroll-to-top
    document.body.classList.toggle('light-mode');
}


// ✅ Close menu on outside click
document.addEventListener('click', function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = toggleBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains('show')) {
        menu.classList.remove('show');
        body.classList.remove('blurred');
        toggleBtn.textContent = '☰';
    }
});