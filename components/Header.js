// components/Header.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if an admin token exists in localStorage (client side)
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('adminToken')) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio Blog
        </Typography>
        <Box>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button color="inherit">Blog</Button>
          </Link>
          <Link href="/resume" passHref>
            <Button color="inherit">Resume</Button>
          </Link>
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link href="/login" passHref>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
