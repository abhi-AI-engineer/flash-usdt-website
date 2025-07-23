// assets/js/blog-single.js

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');

    if (!postId) {
        document.getElementById('single-post-content').innerHTML = '<h1>Post not found!</h1>';
        return;
    }

    const post = blogPosts.find(p => p.id == postId);

    if (!post) {
        document.getElementById('single-post-content').innerHTML = '<h1>Post not found!</h1>';
        return;
    }

    // Page par post ka data daalein
    document.title = `${post.title} - Flash USDT`;
    document.getElementById('blog-title').textContent = post.title;
    document.getElementById('blog-date').textContent = `Published on: ${post.date}`;
    const blogImage = document.getElementById('blog-image');
    blogImage.src = post.image;
    blogImage.alt = post.title;
    document.getElementById('blog-full-content').innerHTML = post.content;
});

  