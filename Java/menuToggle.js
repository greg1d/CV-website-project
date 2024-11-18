document.addEventListener('DOMContentLoaded', function() {
    const menuLink = document.getElementById('menu-link');
    const dynamicMenu = document.getElementById('dynamic-menu');
    const menuIcon = menuLink.querySelector('i');
    const menuText = menuLink.querySelector('span');

    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (dynamicMenu.style.display === 'block') {
            dynamicMenu.style.maxHeight = null;
            setTimeout(() => {
                dynamicMenu.style.display = 'none';
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                menuText.textContent = ' Menu';
            }, 500); // Match the transition duration
        } else {
            dynamicMenu.style.display = 'block';
            setTimeout(() => {
                dynamicMenu.style.maxHeight = dynamicMenu.scrollHeight + "px";
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
                menuText.textContent = ' Close';
            }, 0); // Allow the display change to take effect
        }
    });
});