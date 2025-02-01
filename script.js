// Set your backend API URL
const API_URL = 'https://my-go-blog-backend.onrender.com';

// Function to fetch and display all posts
function fetchPosts() {
  fetch(`${API_URL}/posts`)
    .then((response) => response.json())
    .then((posts) => {
      const postsList = document.getElementById('postsList');
      postsList.innerHTML = ''; // Clear existing posts

      posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <small>Posted on ${new Date(post.createdAt).toLocaleString()}</small>
        `;
        postsList.appendChild(postElement);
      });
    })
    .catch((err) => console.error('Error fetching posts:', err));
}

// Event listener for creating a new post
document.getElementById('postForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, content })
  })
    .then((response) => response.json())
    .then((newPost) => {
      // Refresh the list of posts
      fetchPosts();
      // Reset the form
      document.getElementById('postForm').reset();
    })
    .catch((err) => console.error('Error creating post:', err));
});

// Fetch posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});
