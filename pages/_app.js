// pages/_app.js
import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <>
      <Head>
        <title>My Portfolio Blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
