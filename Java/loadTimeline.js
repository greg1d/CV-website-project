document.addEventListener('DOMContentLoaded', function() {
    fetch('../Pages/about_me.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('timeline-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading timeline:', error));
});