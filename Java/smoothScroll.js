document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('#dynamic-menu a, .scroll-text');
    const headerOffset = 100; // Adjust this value to match your fixed header's height

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
