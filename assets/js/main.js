document.addEventListener("DOMContentLoaded", function() {
    // Function to load a component from a file into a placeholder element
    const loadComponent = (componentPath, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            fetch(componentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Could not load ${componentPath}`);
                    }
                    return response.text();
                })
                .then(data => {
                    placeholder.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading component:', error);
                    placeholder.innerHTML = `<p style="color:red;">Error loading ${placeholderId}.</p>`;
                });
        }
    };

    // Load header and footer
    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
});