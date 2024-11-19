document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const scrollText = document.querySelector('.scroll-text');
        if (scrollText) {
            scrollText.classList.add('visible');
        }
    }, 15000); // 10 seconds delay
});