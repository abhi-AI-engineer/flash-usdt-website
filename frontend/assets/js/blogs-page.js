// assets/js/blogs-page.js

document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('blog-posts-container');
    const paginationContainer = document.getElementById('pagination-container');
    const paginationInfo = document.getElementById('pagination-info');

    if (!postsContainer) return; // Agar container nahi hai to script na chalayein

    const postsPerPage = 6; // Ek page par kitne posts dikhane hain
    let currentPage = 1;

    function displayPosts(page) {
        postsContainer.innerHTML = ''; // Container ko khaali karein
        page--; // Array index 0 se shuru hota hai

        const startIndex = page * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const paginatedPosts = blogPosts.slice(startIndex, endIndex);

        paginatedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'col-lg-4 col-md-6';
            postElement.innerHTML = `
                <div class="blog-card">
                    <div class="blog-card__image">
                        <a href="blog-single.html?id=${post.id}">
                            <img src="${post.image}" alt="${post.title}">
                        </a>
                        <div class="blog-card__date">
                            <span>${post.date.split(' ')[0]}</span> ${post.date.split(' ')[1]}
                        </div>
                    </div>
                    <div class="blog-card__content">
                        <h5 class="blog-card__title">
                            <a href="blog-single.html?id=${post.id}">${post.title}</a>
                        </h5>
                        <p class="blog-card__text">${post.excerpt}</p>
                    </div>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    function setupPagination() {
        paginationContainer.innerHTML = '';
        const pageCount = Math.ceil(blogPosts.length / postsPerPage);

        // Pagination Info Text
        const startItem = (currentPage - 1) * postsPerPage + 1;
        const endItem = Math.min(startItem + postsPerPage - 1, blogPosts.length);
        paginationInfo.textContent = `Showing ${startItem} to ${endItem} of ${blogPosts.length} results`;

        for (let i = 1; i <= pageCount; i++) {
            const btn = paginationButton(i);
            paginationContainer.appendChild(btn);
        }
    }

    function paginationButton(page) {
        const button = document.createElement('li');
        button.className = 'page-item';
        if (currentPage == page) {
            button.classList.add('active');
        }

        const link = document.createElement('a');
        link.className = 'page-link';
        link.href = '#';
        link.innerText = page;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = page;
            displayPosts(currentPage);
            setupPagination();
        });

        button.appendChild(link);
        return button;
    }

    displayPosts(currentPage);
    setupPagination();
});