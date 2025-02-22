// Function to load external HTML content into a container
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(elementId);
            container.innerHTML += data;
            // If your loaded content has .section elements that need to be visible, add the 'visible' class:
            container.querySelectorAll('.section').forEach(section => {
                section.classList.add('visible');
            });
        })
        .catch(error => console.error('Error loading content:', error));
}

// Load the research content
loadContent('../Pages/Research.html', 'research-container');
