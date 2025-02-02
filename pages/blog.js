// pages/blog.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Paper
} from '@mui/material';
import Header from '../components/Header';

const API_URL = 'https://my-go-blog-backend.onrender.com'; // Adjust as needed

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [adminToken, setAdminToken] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Check for admin token in localStorage on client-side
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setAdminToken(token);
    }
  }, []);

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;
    try {
      const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({ title: newTitle, content: newContent })
      });
      if (!res.ok) {
        throw new Error('Failed to create post');
      }
      const post = await res.json();
      // Prepend the new post to the list
      setPosts([post, ...posts]);
      setNewTitle('');
      setNewContent('');
    } catch (error) {
      setErrorMsg('Error creating post');
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>

        {/* If logged in as admin, show the create post form */}
        {adminToken && (
          <Paper sx={{ padding: '1rem', marginBottom: '2rem' }}>
            <Typography variant="h5" gutterBottom>
              Create a New Post
            </Typography>
            {errorMsg && <Typography color="error">{errorMsg}</Typography>}
            <Box component="form" onSubmit={handleCreatePost}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
              <TextField
                label="Content"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit Post
              </Button>
            </Box>
          </Paper>
        )}

        <Box>
          {posts.map((post) => (
            <Card key={post.id} sx={{ marginBottom: '1rem' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body1">
                  {post.content}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Posted on {new Date(post.createdAt).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </div>
  );
}
