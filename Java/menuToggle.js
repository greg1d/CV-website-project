document.addEventListener('DOMContentLoaded', function() {
    console.log('menuToggle.js: DOMContentLoaded event fired.');
    const menuLink = document.getElementById('menu-link');
    const dynamicMenu = document.getElementById('dynamic-menu');
    const navIcon = document.getElementById('nav-icon4');
    const menuOptions = dynamicMenu.querySelectorAll('a'); // Assuming menu options are links

    if (!menuLink || !dynamicMenu || !navIcon) {
        console.error('menuToggle.js: One or more elements not found:', { menuLink, dynamicMenu, navIcon });
        return;
    }

    console.log('menuToggle.js: Elements found:', { menuLink, dynamicMenu, navIcon });

    // Function to update the menu link text
    function updateMenuLinkText() {
        if (dynamicMenu.style.maxHeight) {
            menuLink.innerHTML = ''; // Clear existing content
            menuLink.appendChild(navIcon); // Append the icon
            menuLink.appendChild(document.createTextNode(' Close')); // Append the text
        } else {
            menuLink.innerHTML = ''; // Clear existing content
            menuLink.appendChild(navIcon); // Append the icon
            menuLink.appendChild(document.createTextNode(' Menu')); // Append the text
        }
    }

    // Initial text update
    updateMenuLinkText();

    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('menuToggle.js: Menu link clicked.');
        navIcon.classList.toggle('open');
        console.log('menuToggle.js: navIcon class list:', navIcon.classList);

        if (dynamicMenu.style.maxHeight) {
            dynamicMenu.style.maxHeight = null;
            setTimeout(() => {
                dynamicMenu.style.display = 'none';
                console.log('menuToggle.js: Menu closed.');
                updateMenuLinkText();
            }, 500); // Match the transition duration
        } else {
            dynamicMenu.style.display = 'block';
            setTimeout(() => {
                dynamicMenu.style.maxHeight = dynamicMenu.scrollHeight + "px";
                console.log('menuToggle.js: Menu opened.');
                console.log('menuToggle.js: dynamicMenu dimensions:', {
                    width: dynamicMenu.offsetWidth,
                    height: dynamicMenu.offsetHeight
                });
                updateMenuLinkText();
            }, 0); // Allow the display change to take effect
        }
    });

    // Add event listeners to menu options to close the menu when an option is selected
    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            console.log('menuToggle.js: Menu option clicked.');
            navIcon.classList.remove('open');
            dynamicMenu.style.maxHeight = null;
            setTimeout(() => {
                dynamicMenu.style.display = 'none';
                console.log('menuToggle.js: Menu closed after option selected.');
                updateMenuLinkText();
            }, 500); // Match the transition duration
        });
    });
});