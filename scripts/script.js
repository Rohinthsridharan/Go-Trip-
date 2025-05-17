document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu li a');
    
    // Set active class based on current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Add hover animation
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
});