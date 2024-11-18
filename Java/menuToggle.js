document.addEventListener('DOMContentLoaded', function() {
    const menuLink = document.getElementById('menu-link');
    const dynamicMenu = document.getElementById('dynamic-menu');

    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (dynamicMenu.style.display === 'block') {
            dynamicMenu.style.maxHeight = null;
            setTimeout(() => {
                dynamicMenu.style.display = 'none';
            }, 500); // Match the transition duration
        } else {
            dynamicMenu.style.display = 'block';
            setTimeout(() => {
                dynamicMenu.style.maxHeight = dynamicMenu.scrollHeight + "px";
            }, 0); // Allow the display change to take effect
        }
    });
});