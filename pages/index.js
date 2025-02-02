// pages/index.js
import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '2rem' }}>
        <Paper sx={{ padding: '2rem', textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Welcome to My Portfolio Blog
          </Typography>
          <Typography variant="h5">
            Explore my blog posts and check out my resume.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
