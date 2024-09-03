.App {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.repo-grid, .blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.repo-card, .blog-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.repo-card img, .blog-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

a {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #0366d6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
