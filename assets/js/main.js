



document.addEventListener("DOMContentLoaded", function() {
    
    const loadComponent = (componentPath, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            fetch(componentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Could not load ${componentPath}, status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    placeholder.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading component:', error);
                    placeholder.innerHTML = `<p style="text-align:center; color:red;">Error: Could not load ${placeholderId}.</p>`;
                });
        }
    };

  
    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
});