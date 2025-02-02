// pages/resume.js
import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import Header from '../components/Header';

export default function Resume() {
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '2rem' }}>
        <Paper sx={{ padding: '2rem' }}>
          <Typography variant="h3" gutterBottom>
            My Resume
          </Typography>
          <Typography variant="h5" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: john.doe@example.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: (123) 456-7890
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Bachelor of Science in Computer Science"
                  secondary="University of Example, 2015-2019"
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="h4" gutterBottom>
              Experience
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Software Developer at Company X"
                  secondary="2019 - Present"
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="JavaScript, React, Next.js, Node.js, Go, MongoDB" />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
