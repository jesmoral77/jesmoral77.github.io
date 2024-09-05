// Sample data for GitHub projects and blog posts
let projects = [
    { title: 'Project 1', image: 'https://via.placeholder.com/150', link: 'https://github.com/username/project1' },
    { title: 'Project 2', image: 'https://via.placeholder.com/150', link: 'https://github.com/username/project2' },
];

let blogPosts = [
    { title: 'Blog Post 1', image: 'https://via.placeholder.com/150', link: 'https://example.com/blog1' },
    { title: 'Blog Post 2', image: 'https://via.placeholder.com/150', link: 'https://example.com/blog2' },
];

// Function to create a card element
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <a href="${item.link}" target="_blank">View</a>
    `;
    return card;
}

// Function to render the list of items
function renderList(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'grid';
    items.forEach(item => {
        grid.appendChild(createCard(item));
    });
    container.appendChild(grid);
}

// Render initial lists
renderList(projects, 'project-list');
renderList(blogPosts, 'blog-list');

// Handle form submission for adding new blog posts
const blogForm = document.getElementById('blog-form');
blogForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value;
    const link = document.getElementById('link').value;
    
    const newBlogPost = { title, image, link };
    blogPosts.push(newBlogPost);
    renderList(blogPosts, 'blog-list');
    
    // Reset form
    blogForm.reset();
});

