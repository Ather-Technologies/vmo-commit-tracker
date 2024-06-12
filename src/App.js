import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CommitHistory from './CommitHistory';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://athr.dev/">
        Ather Technologies LLC.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" textAlign="center" sx={{ mb: 2 }}>
            VM-O Scanner Updates Page
          </Typography>
          <Typography variant="h6" component="h2" textAlign="center" sx={{ mb: 2 }}>
            The DEMO is up!! Let's go see! <Link href="https://ozjuly19.github.io/vmo-frontend/">(click here)</Link> <br></br>
            Check out the updates on the frontend below.
          </Typography>
          <CommitHistory />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
