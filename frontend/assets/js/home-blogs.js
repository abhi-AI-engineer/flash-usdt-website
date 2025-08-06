// assets/js/home-blogs.js

document.addEventListener('DOMContentLoaded', () => {
    const homePostsContainer = document.getElementById('home-blog-posts-container');
    if (!homePostsContainer) return;

    const postsToShow = 2; // Homepage par kitne posts dikhane hain
    const latestPosts = blogPosts.slice(0, postsToShow);

    latestPosts.forEach(post => {
        const postElement = document.createElement('div');
        // Column size yahan alag ho sakti hai
        postElement.className = 'col-lg-6'; 
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
        homePostsContainer.appendChild(postElement);
    });
});