const express = require('express');
const app = express();
const PORT = 5000;

const { fetchPosts } = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Successfully fetched and sent posts.');
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
