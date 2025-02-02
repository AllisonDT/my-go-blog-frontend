// pages/login.js
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Header from '../components/Header';

const API_URL = 'https://my-go-blog-backend.onrender.com'; // Change this URL as needed

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch(`${API_URL}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }

      const data = await res.json();
      // Assuming the token is returned as data.token
      localStorage.setItem('adminToken', data.token);
      router.push('/blog');
    } catch (error) {
      setErrorMsg('Invalid credentials or login error.');
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '2rem' }}>
        <Paper sx={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
          <Typography variant="h4" gutterBottom>
            Admin Login
          </Typography>
          {errorMsg && <Typography color="error">{errorMsg}</Typography>}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
