document.getElementById('side-menu').addEventListener('change', function() {
    var nav = document.getElementById('nav');
    if (this.checked) {
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('side-menu').checked = false;
        document.getElementById('nav').classList.remove('show');
    });
});